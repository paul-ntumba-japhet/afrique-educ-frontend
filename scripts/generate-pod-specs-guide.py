#!/usr/bin/env python3
"""Génère le guide PDF détaillé des spécifications techniques Afric-Educ."""

from __future__ import annotations

import zlib
from pathlib import Path

GOLD = (0.812, 0.635, 0.310)       # #cfa24f
GOLD_DARK = (0.722, 0.514, 0.271)  # #b88345
NAVY = (0.122, 0.227, 0.373)       # #1f3a5f
INK = (0.122, 0.141, 0.129)        # #1f2421
MUTED = (0.420, 0.447, 0.502)      # #6b7280
LINE = (0.898, 0.906, 0.922)       # #e5e7eb
SOFT = (0.969, 0.969, 0.961)       # #f7f7f5
SOFT_GOLD = (0.988, 0.965, 0.910)  # soft gold tint
WHITE = (1, 1, 1)

PAGE_W = 595.28
PAGE_H = 841.89
MARGIN = 48
CONTENT_W = PAGE_W - 2 * MARGIN
CONTENT_TOP = PAGE_H - 130
CONTENT_BOTTOM = 58


def esc(text: str) -> str:
    mapping = {
        "é": "\\351", "è": "\\350", "ê": "\\352", "ë": "\\353",
        "à": "\\340", "â": "\\342", "ù": "\\371", "û": "\\373",
        "ô": "\\364", "ö": "\\366", "î": "\\356", "ï": "\\357",
        "ç": "\\347", "É": "\\311", "È": "\\310", "Ê": "\\312",
        "À": "\\300", "Â": "\\302", "Ç": "\\307", "Ô": "\\324",
        "–": "-", "—": "-", "’": "'", "‘": "'", "“": '"', "”": '"',
        "•": "\\225", "×": "x", "²": "\\262", "«": "\\253", "»": "\\273",
        "…": "...", "°": "\\260",
    }
    out = []
    for ch in text:
        if ch in mapping:
            out.append(mapping[ch])
        elif ch in ("\\", "(", ")"):
            out.append("\\" + ch)
        elif ord(ch) < 128:
            out.append(ch)
        else:
            out.append("?")
    return "".join(out)


def rgb(c): return f"{c[0]:.3f} {c[1]:.3f} {c[2]:.3f} rg"
def RG(c): return f"{c[0]:.3f} {c[1]:.3f} {c[2]:.3f} RG"


def rect(x, y, w, h, fill=None, stroke=None, lw=1):
    parts = []
    if fill:
        parts.append(rgb(fill))
    if stroke:
        parts.append(f"{lw} w")
        parts.append(RG(stroke))
    parts.append(f"{x:.2f} {y:.2f} {w:.2f} {h:.2f} re")
    if fill and stroke:
        parts.append("B")
    elif fill:
        parts.append("f")
    else:
        parts.append("S")
    return "\n".join(parts)


def text_at(x, y, content, size, color, font="F1"):
    return (
        f"BT\n/{font} {size:.1f} Tf\n{rgb(color)}\n"
        f"1 0 0 1 {x:.2f} {y:.2f} Tm\n({esc(content)}) Tj\nET"
    )


def approx_chars(size: float, width: float = CONTENT_W) -> int:
    # Helvetica ~ 0.5 * size average char width
    return max(20, int(width / (size * 0.48)))


def wrap(content: str, max_chars: int) -> list[str]:
    words = content.split()
    lines, cur = [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if len(trial) <= max_chars:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [""]


class Doc:
    def __init__(self):
        self.pages: list[str] = []
        self.parts: list[str] = []
        self.y = CONTENT_TOP
        self.page_no_started = False

    def new_page(self, title: str, subtitle: str | None = None):
        if self.parts:
            self._flush()
        self.parts = [
            rect(0, 0, PAGE_W, PAGE_H, fill=WHITE),
            rect(0, PAGE_H - 8, PAGE_W, 8, fill=GOLD),
            rect(MARGIN, PAGE_H - 70, CONTENT_W, 1.2, fill=GOLD),
            text_at(MARGIN, PAGE_H - 42, "AFRIC-EDUC", 11, NAVY, font="F2"),
            text_at(MARGIN + 95, PAGE_H - 42, "Impression à la demande", 9, GOLD_DARK),
            text_at(MARGIN, PAGE_H - 96, title, 18, NAVY, font="F2"),
        ]
        self.y = PAGE_H - 120
        if subtitle:
            self.para(subtitle, size=10, color=MUTED, gap_after=14)
        else:
            self.y -= 8

    def _flush(self):
        self.pages.append("\n".join(self.parts))
        self.parts = []

    def ensure(self, need: float, title: str, subtitle: str | None = None):
        if self.y - need < CONTENT_BOTTOM:
            self.new_page(title, subtitle)

    def gap(self, h: float = 10):
        self.y -= h

    def rule(self):
        self.ensure(16, "Guide technique")
        self.parts.append(rect(MARGIN, self.y, 42, 2.2, fill=GOLD))
        self.y -= 14

    def h2(self, label: str):
        self.ensure(36, label)
        self.parts.append(text_at(MARGIN, self.y, label, 13, NAVY, font="F2"))
        self.y -= 8
        self.parts.append(rect(MARGIN, self.y, 36, 1.6, fill=GOLD))
        self.y -= 16

    def para(self, content: str, size: float = 10, color=INK, gap_after: float = 10, width: float = CONTENT_W):
        line_h = size + 4
        lines = wrap(content, approx_chars(size, width))
        need = len(lines) * line_h + gap_after
        self.ensure(need, "Guide technique")
        for line in lines:
            self.parts.append(text_at(MARGIN, self.y, line, size, color))
            self.y -= line_h
        self.y -= gap_after

    def bullet(self, content: str, size: float = 9.5, color=MUTED):
        line_h = size + 3.5
        max_c = approx_chars(size, CONTENT_W - 16)
        lines = wrap(content, max_c)
        self.ensure(len(lines) * line_h + 4, "Guide technique")
        self.parts.append(rect(MARGIN + 2, self.y + 1, 4.5, 4.5, fill=GOLD))
        for i, line in enumerate(lines):
            self.parts.append(text_at(MARGIN + 14, self.y, line, size, color))
            self.y -= line_h
        self.y -= 3

    def option_card(self, title: str, when: str, details: list[str]):
        """Draw a titled option block with when-to-use guidance + details."""
        when_lines = wrap(when, approx_chars(9, CONTENT_W - 24))
        detail_lines = []
        for d in details:
            detail_lines.extend(wrap(f"- {d}", approx_chars(9, CONTENT_W - 24)))
        top_pad = 18
        bottom_pad = 14
        content_h = 16 + 12 + len(when_lines) * 12 + 4 + len(detail_lines) * 12
        box_h = content_h + top_pad + bottom_pad
        self.ensure(box_h + 12, "Guide technique")

        box_bottom = self.y - box_h + 8
        self.parts.append(rect(MARGIN, box_bottom, CONTENT_W, box_h, fill=SOFT, stroke=LINE, lw=0.8))
        self.parts.append(rect(MARGIN, box_bottom + box_h - 3, CONTENT_W, 3, fill=GOLD))

        cy = box_bottom + box_h - top_pad
        self.parts.append(text_at(MARGIN + 12, cy, title, 11, NAVY, font="F2"))
        cy -= 16
        self.parts.append(text_at(MARGIN + 12, cy, "Quand l'utiliser", 8.5, GOLD_DARK, font="F2"))
        cy -= 12
        for line in when_lines:
            self.parts.append(text_at(MARGIN + 12, cy, line, 9, INK))
            cy -= 12
        cy -= 4
        for line in detail_lines:
            self.parts.append(text_at(MARGIN + 12, cy, line, 9, MUTED))
            cy -= 12
        self.y = box_bottom - 10

    def tip(self, content: str):
        lines = wrap(content, approx_chars(9, CONTENT_W - 28))
        top_pad = 16
        h = top_pad + 14 + len(lines) * 12 + 12
        self.ensure(h + 8, "Guide technique")
        box_y = self.y - h + 10
        self.parts.append(rect(MARGIN, box_y, CONTENT_W, h, fill=SOFT_GOLD))
        self.parts.append(rect(MARGIN, box_y, 4, h, fill=GOLD))
        self.parts.append(text_at(MARGIN + 14, box_y + h - top_pad, "Conseil", 8.5, GOLD_DARK, font="F2"))
        cy = box_y + h - top_pad - 14
        for line in lines:
            self.parts.append(text_at(MARGIN + 14, cy, line, 9, INK))
            cy -= 12
        self.y = box_y - 12

    def finish(self):
        if self.parts:
            self._flush()
        # Add footers with page numbers
        total = len(self.pages)
        footered = []
        for i, page in enumerate(self.pages, start=1):
            footer = "\n".join([
                rect(MARGIN, 36, CONTENT_W, 0.8, fill=LINE),
                text_at(MARGIN, 22, "Guide de préparation des fichiers — Afric-Educ", 8, MUTED),
                text_at(PAGE_W - MARGIN - 36, 22, f"{i} / {total}", 8, MUTED),
            ])
            footered.append(page + "\n" + footer)
        self.pages = footered
        return self.pages


def build_cover() -> str:
    parts = [
        rect(0, 0, PAGE_W, PAGE_H, fill=WHITE),
        rect(0, PAGE_H - 130, PAGE_W, 130, fill=NAVY),
        rect(0, PAGE_H - 138, PAGE_W, 8, fill=GOLD),
        text_at(MARGIN, PAGE_H - 58, "AFRIC-EDUC", 14, GOLD, font="F2"),
        text_at(MARGIN, PAGE_H - 82, "L'édition africaine, sans limites", 10, WHITE),
        text_at(MARGIN, PAGE_H - 230, "GUIDE TECHNIQUE", 11, GOLD_DARK, font="F2"),
        text_at(MARGIN, PAGE_H - 268, "Préparer et configurer", 26, NAVY, font="F2"),
        text_at(MARGIN, PAGE_H - 300, "votre impression", 26, NAVY, font="F2"),
        text_at(MARGIN, PAGE_H - 332, "à la demande", 26, NAVY, font="F2"),
        rect(MARGIN, PAGE_H - 352, 56, 3, fill=GOLD),
    ]
    y = PAGE_H - 390
    intro = (
        "Ce guide vous aide à choisir les bonnes options (format, papier, "
        "reliure, finitions…) et à préparer un fichier conforme pour un "
        "rendu professionnel."
    )
    for line in wrap(intro, approx_chars(11)):
        parts.append(text_at(MARGIN, y, line, 11, MUTED))
        y -= 16

    y -= 20
    parts.append(text_at(MARGIN, y, "Vous y trouverez", 11, NAVY, font="F2"))
    y -= 24
    for item in [
        "Explications détaillées de chaque option de configuration",
        "Conseils pour savoir quand utiliser tel ou tel choix",
        "Exigences techniques (fonds perdus, CMJN, PDF)",
        "Checklist finale avant envoi du fichier",
    ]:
        parts.append(rect(MARGIN, y - 2, 8, 8, fill=GOLD))
        parts.append(text_at(MARGIN + 18, y, item, 10.5, INK))
        y -= 24

    parts.append(rect(MARGIN, 88, CONTENT_W, 58, fill=SOFT))
    parts.append(text_at(MARGIN + 16, 124, "Public concerné", 10, NAVY, font="F2"))
    parts.append(text_at(
        MARGIN + 16, 104,
        "Auteurs, institutions, librairies et imprimeries partenaires.",
        9, MUTED,
    ))
    return "\n".join(parts)


def build_all_pages() -> list[str]:
    d = Doc()

    d.new_page(
        "1. Formats disponibles",
        "Le format définit la taille finale du livre une fois imprimé et rogné.",
    )
    d.para(
        "Choisissez le format selon l'usage du livre, le volume de texte et "
        "le confort de lecture. Un format trop grand pour un roman augmente "
        "le coût papier ; un format trop petit pour un manuel peut gêner la lecture."
    )
    d.option_card(
        "A5 (148 x 210 mm)",
        "Idéal pour romans, essais, recueils de nouvelles, livres de poche "
        "et tirages personnels. C'est le format le plus courant et le plus "
        "économique pour la prose.",
        [
            "Confortable à tenir et à transporter",
            "Bon équilibre coût / lisibilité pour 150 à 400 pages",
            "Recommandé si vous démarrez sans contrainte particulière",
        ],
    )
    d.option_card(
        "A4 (210 x 297 mm)",
        "À privilégier pour manuels scolaires, catalogues, rapports, livres "
        "photo, partitions ou documents avec tableaux et illustrations larges.",
        [
            "Plus d'espace pour images, schémas et mise en page aérée",
            "Plus coûteux en papier et en envoi",
            "Évitez-le pour un roman classique (trop grand en main)",
        ],
    )
    d.option_card(
        "Format personnalisé",
        "Utile pour un projet éditorial spécifique (carré, paysage, format "
        "album, livre jeunesse atypique) ou pour coller à une collection existante.",
        [
            "Indiquez les dimensions exactes (largeur x hauteur, pages fermées)",
            "Peut influencer le prix et les délais",
            "Validez toujours avec un conseiller avant gros tirage",
        ],
    )
    d.tip(
        "Si vous hésitez : partez en A5 pour un récit ou un essai, en A4 pour "
        "un document pédagogique ou institutionnel."
    )

    d.new_page(
        "2. Pages et impression",
        "Le nombre de pages et le mode d'impression impactent le prix, le poids et le rendu.",
    )
    d.h2("Nombre de pages")
    d.para(
        "Nous imprimons de 24 à 1000 pages. En dessous de 24 pages, une "
        "brochure agrafée est souvent plus adaptée. Au-delà de 400 à 500 pages, "
        "prévoyez une reliure solide (dos carré collé PUR ou cousue) et un grammage "
        "papier raisonnable pour limiter l'épaisseur et le poids."
    )
    d.bullet("Pages paires recommandées (multiple de 4 idéal pour certains flux).")
    d.bullet("Comptez la pagination réelle du PDF intérieur (hors couverture).")
    d.bullet("Les pages blanches comptent aussi dans le total.")
    d.gap(6)
    d.h2("Noir et blanc ou couleur")
    d.option_card(
        "Noir et blanc",
        "Romans, essais, documents textuels, manuels peu illustrés. Moins cher "
        "et délais souvent plus courts.",
        [
            "Parfait si les images sont secondaires ou en niveaux de gris",
            "Le texte reste net et contrasté",
            "Économique dès les petits tirages",
        ],
    )
    d.option_card(
        "Couleur",
        "Livres photo, catalogues, jeunesse illustrée, manuels avec schémas "
        "couleur, projets où la couleur porte l'information.",
        [
            "Obligatoire si la couleur est essentielle au contenu",
            "Coût unitaire plus élevé",
            "Préparez le fichier en CMJN (pas en RVB)",
        ],
    )
    d.h2("Recto seul ou recto verso")
    d.option_card(
        "Recto verso (recommandé)",
        "La norme pour presque tous les livres. Réduit le volume et le coût papier.",
        [
            "Usage standard pour roman, essai, manuel",
            "Pensez à la transparence du papier (voir grammage)",
        ],
    )
    d.option_card(
        "Recto seul",
        "Cas particuliers : partitions, cahiers d'exercices à écrire, documents "
        "où le verso doit rester vierge.",
        [
            "Double presque le nombre de feuilles",
            "À réserver aux besoins pédagogiques ou techniques précis",
        ],
    )

    d.new_page(
        "3. Couverture et finitions",
        "La couverture donne l'identité du livre et protège l'intérieur.",
    )
    d.option_card(
        "Couverture souple (dos carré collé)",
        "Le choix le plus répandu pour romans, essais, tirages courts et POD. "
        "Léger, économique, rendu professionnel.",
        [
            "Idéal de 80 à environ 400 pages selon papier",
            "Facile à transporter et à stocker",
            "Excellent rapport qualité / prix",
        ],
    )
    d.option_card(
        "Couverture rigide (cartonnée)",
        "À choisir pour ouvrages de prestige, livres photo, éditions cadeau, "
        "collections institutionnelles durables.",
        [
            "Meilleure tenue dans le temps",
            "Plus chère et plus longue à produire",
            "Recommandée pour les beaux livres et volumes valorisés",
        ],
    )
    d.option_card(
        "Souple avec rabats",
        "Quand vous voulez une couverture souple plus premium, avec espace "
        "pour bio auteur, résumé ou collection.",
        [
            "Look éditorial soigné sans passer en rigide",
            "Utile pour essais et livres de non-fiction",
        ],
    )
    d.h2("Finitions de couverture")
    d.option_card(
        "Mat",
        "Rendu élégant, peu de reflets. Très adapté aux romans, essais et "
        "ouvrages textuels.",
        ["Lecture confortable", "Aspect littéraire contemporain"],
    )
    d.option_card(
        "Brillant",
        "Fait ressortir les photos et couleurs vives. Bon pour jeunesse, "
        "catalogues et livres très illustrés.",
        ["Couleurs plus vivantes", "Peut montrer reflets et traces selon usage"],
    )
    d.option_card(
        "Soft Touch",
        "Finition veloutée premium au toucher. Pour positionner un livre "
        "haut de gamme (cadeau, collection, lancement).",
        ["Sensation tactile distinctive", "Surcoût possible — à valider au devis"],
    )
    d.tip(
        "Pelliculage et vernis sélectif protègent la couverture et renforcent "
        "titres ou logos. Demandez-les si le livre circule beaucoup."
    )

    d.new_page(
        "4. Papier intérieur et grammage",
        "Le papier influence l'opacité, le toucher, l'épaisseur et le coût.",
    )
    d.option_card(
        "Papier offset (blanc naturel)",
        "Usage général : romans, essais, documents institutionnels. Bon "
        "compromis lisibilité / prix.",
        ["Polyvalent et largement disponible", "Bon pour texte dense en noir et blanc"],
    )
    d.option_card(
        "Papier bouffant",
        "Donne plus d'épaisseur au livre avec moins de pages (effet volume). "
        "Apprécié pour romans et livres de lecture.",
        ["Sensation plus « livre de librairie »", "Moins adapté aux images très détaillées"],
    )
    d.option_card(
        "Papier couché mat",
        "Pour livres illustrés, catalogues, manuels avec photos. Rendu image "
        "propre sans trop de reflets.",
        ["Bon contraste images / texte", "Souvent choisi en couleur"],
    )
    d.option_card(
        "Papier couché brillant",
        "Livres photo, magazines, catalogues luxe où les images doivent "
        "ressortir. Moins confortable pour de longs blocs de texte.",
        ["Couleurs saturées", "À éviter pour un roman textuel long"],
    )
    d.h2("Grammages")
    d.para(
        "Plus le grammage est élevé, plus le papier est épais et opaque "
        "(moins de transparence verso), mais le livre devient plus lourd et cher."
    )
    d.bullet("80-90 g/m² : lecture courante, romans, essais (économique).")
    d.bullet("100 g/m² : bon confort si recto verso dense ou légères illustrations.")
    d.bullet("120 g/m² : manuels, catalogues, meilleure opacité.")
    d.bullet("170 g/m² : pages très illustrées, inserts, rendu premium.")
    d.tip(
        "En recto verso noir et blanc dense, un 90 ou 100 g/m² limite la "
        "transparence sans alourdir inutilement le livre."
    )

    d.new_page(
        "5. Reliures",
        "La reliure doit correspondre au nombre de pages, à l'usage et à la durée de vie souhaitée.",
    )
    d.option_card(
        "Dos carré collé (collé PUR)",
        "Standard professionnel pour la majorité des livres POD. Ouverture "
        "agréable et dos imprimé possible (titre, auteur).",
        [
            "Recommandé dès ~60-80 pages jusqu'à plusieurs centaines",
            "Idéal roman, essai, livre institutionnel classique",
            "Le PUR offre une meilleure tenue que la colle EVA classique",
        ],
    )
    d.option_card(
        "Reliure cousue (fil)",
        "Pour ouvrages durables, beaux livres, gros volumes ou usage intensif "
        "(bibliothèques, collections).",
        ["Excellente longévité et ouverture", "Plus coûteuse — projets valorisés"],
    )
    d.option_card(
        "Reliure spirale",
        "Cahiers, agendas, manuels de formation, partitions : le livre doit "
        "rester à plat ou être annoté.",
        ["Ouverture large / pratique", "Plus pédagogique que « librairie »"],
    )
    d.option_card(
        "Agrafée (jusqu'à 48 pages)",
        "Brochures, livrets, programmes, catalogues courts. Simple et économique.",
        ["Uniquement pour faibles paginations", "Pas adaptée aux romans ou gros essais"],
    )
    d.tip(
        "En cas de doute pour un livre classique : dos carré collé + couverture "
        "souple mat + papier offset 90 g/m² en A5."
    )

    d.new_page(
        "6. Préparer le fichier technique",
        "Même une bonne configuration échoue si le fichier n'est pas conforme.",
    )
    d.h2("Fonds perdus et marges")
    d.para(
        "Les fonds perdus (bleed) évitent les liserés blancs après rognage. "
        "Les marges de sécurité protègent textes et logos."
    )
    d.bullet("Fonds perdus : 3 mm tout autour de chaque page.")
    d.bullet("Marges de sécurité : 5 mm minimum depuis le bord final.")
    d.bullet("Ne placez aucun texte critique dans la zone de fond perdu.")
    d.gap(4)
    d.h2("Résolution et couleurs")
    d.bullet("Images : 300 DPI à taille réelle d'impression.")
    d.bullet("Mode colorimétrique : CMJN (pas RVB, pas Pantone).")
    d.bullet("Noir profond recommandé pour aplats : C60 M60 Y60 K100.")
    d.bullet("Évitez les images compressées ou issues du web (72 DPI).")
    d.gap(4)
    d.h2("Fichier d'impression")
    d.bullet("PDF unique à taille réelle (recommandé).")
    d.bullet("Polices incorporées ou texte vectorisé.")
    d.bullet("Pas de mot de passe, pas de protection d'impression.")
    d.bullet("Couverture : fichier séparé (plat 4 + dos + plat 1) si demandé.")
    d.tip(
        "Notre équipe vérifie gratuitement vos fichiers. En cas de non-conformité, "
        "nous vous contactons pour corriger avant impression."
    )

    d.new_page(
        "7. Checklist avant envoi",
        "Cochez chaque point avant de lancer votre demande d'impression.",
    )
    checks = [
        ("Format choisi", "Le format PDF correspond au format commandé (A5, A4…)."),
        ("Pagination", "Nombre de pages cohérent (24 à 1000), pages paires si possible."),
        ("Couverture", "Type (souple/rigide) et finition (mat/brillant/soft touch) décidés."),
        ("Papier", "Type et grammage adaptés au contenu (texte vs images)."),
        ("Reliure", "Compatible avec le nombre de pages et l'usage prévu."),
        ("Fonds perdus", "3 mm présents ; éléments importants à 5 mm des bords."),
        ("Couleurs", "Document en CMJN ; images à 300 DPI."),
        ("PDF final", "Polices incorporées, taille réelle, sans protection."),
        ("Épreuvage", "Relu à l'écran : orthographe, césures, images, pagination."),
    ]
    for title, desc in checks:
        d.ensure(48, "7. Checklist avant envoi")
        box_h = 40
        d.parts.append(rect(MARGIN, d.y - 28, CONTENT_W, box_h, fill=SOFT, stroke=LINE, lw=0.6))
        d.parts.append(rect(MARGIN + 12, d.y - 8, 11, 11, fill=GOLD))
        d.parts.append(text_at(MARGIN + 34, d.y - 2, title, 10.5, NAVY, font="F2"))
        d.parts.append(text_at(MARGIN + 34, d.y - 18, desc, 9, MUTED))
        d.y -= 50

    d.ensure(96, "7. Checklist avant envoi")
    box_bottom = d.y - 78
    d.parts.append(rect(MARGIN, box_bottom, CONTENT_W, 78, fill=NAVY))
    d.parts.append(rect(MARGIN, box_bottom, 6, 78, fill=GOLD))
    d.parts.append(text_at(MARGIN + 20, d.y - 18, "Prêt à imprimer ?", 12, GOLD, font="F2"))
    cta_lines = wrap(
        "Lancez votre demande sur Afric-Educ (Partenaires > Imprimeries > POD) "
        "et recevez un devis personnalisé rapidement.",
        approx_chars(9, CONTENT_W - 40),
    )
    cy = d.y - 38
    for line in cta_lines:
        d.parts.append(text_at(MARGIN + 20, cy, line, 9, WHITE))
        cy -= 12
    d.parts.append(text_at(MARGIN + 20, box_bottom + 12, "Besoin d'aide ? Contactez un conseiller.", 8.5, GOLD))

    # Collect pages without footers first
    if d.parts:
        d._flush()
    content_pages = d.pages
    all_pages = [build_cover()] + content_pages
    total = len(all_pages)
    footered = []
    for i, page in enumerate(all_pages, start=1):
        footer = "\n".join([
            rect(MARGIN, 36, CONTENT_W, 0.8, fill=LINE),
            text_at(MARGIN, 22, "Guide de préparation des fichiers — Afric-Educ", 8, MUTED),
            text_at(PAGE_W - MARGIN - 36, 22, f"{i} / {total}", 8, MUTED),
        ])
        footered.append(page + "\n" + footer)
    return footered


def build_pdf(pages: list[str]) -> bytes:
    objects: list[bytes] = []

    def add(obj: str | bytes) -> int:
        if isinstance(obj, str):
            obj = obj.encode("latin-1", errors="replace")
        objects.append(obj)
        return len(objects)

    add("<< /Type /Catalog /Pages 2 0 R >>")
    objects.append(b"")  # pages placeholder
    add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")

    page_refs = []
    for content in pages:
        stream = content.encode("latin-1", errors="replace")
        compressed = zlib.compress(stream)
        content_id = add(
            f"<< /Length {len(compressed)} /Filter /FlateDecode >>\nstream\n".encode("latin-1")
            + compressed
            + b"\nendstream"
        )
        page_id = add(
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {PAGE_W:.2f} {PAGE_H:.2f}] "
            f"/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> "
            f"/Contents {content_id} 0 R >>"
        )
        page_refs.append(page_id)

    kids = " ".join(f"{i} 0 R" for i in page_refs)
    objects[1] = f"<< /Type /Pages /Kids [{kids}] /Count {len(page_refs)} >>".encode("latin-1")

    out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = [0]
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out.extend(f"{i} 0 obj\n".encode("latin-1"))
        out.extend(obj)
        out.extend(b"\nendobj\n")

    xref_pos = len(out)
    out.extend(f"xref\n0 {len(objects) + 1}\n".encode("latin-1"))
    out.extend(b"0000000000 65535 f \n")
    for off in offsets[1:]:
        out.extend(f"{off:010d} 00000 n \n".encode("latin-1"))
    out.extend(
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
        f"startxref\n{xref_pos}\n%%EOF\n".encode("latin-1")
    )
    return bytes(out)


def main() -> None:
    out_dir = Path(__file__).resolve().parents[1] / "public" / "docs"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "guide-preparation-fichiers.pdf"
    pages = build_all_pages()
    pdf = build_pdf(pages)
    out_path.write_bytes(pdf)
    print(f"Wrote {out_path} ({len(pdf)} bytes, {len(pages)} pages)")


if __name__ == "__main__":
    main()
