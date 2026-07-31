/**
 * Navigation — header, mega menus, barre secondaire
 * @see docs/structure_du_menu_navigation.pdf
 */

export interface NavLink {
  label: string
  href: string
  description?: string
}

export interface MegaMenuColumn {
  title: string
  href?: string
  links: NavLink[]
}

export interface MegaMenuFeatured {
  title: string
  description: string
  href: string
  cta?: string
}

export interface MegaMenuConfig {
  id: string
  label: string
  href?: string
  columns: MegaMenuColumn[]
  featured?: MegaMenuFeatured
}

export const catalogueMenu: MegaMenuConfig = {
  id: 'catalogue',
  label: 'Catalogue',
  featured: {
    title: 'Explorer tout le catalogue',
    description: 'Numérique, papier, audio — des milliers d’ouvrages africains et internationaux.',
    href: '/catalogue',
    cta: 'Voir le catalogue',
  },
  columns: [
    {
      title: 'Livres numériques',
      href: '/catalogue?format=numerique',
      links: [
        { label: 'EPUB', href: '/catalogue?format=epub', description: 'Lecture fluide sur tous appareils' },
        { label: 'PDF', href: '/catalogue?format=pdf', description: 'Mise en page fixe, académique' },
        { label: 'Bundles & collections', href: '/catalogue?type=bundle' },
      ],
    },
    {
      title: 'Livres physiques',
      href: '/catalogue?format=physique',
      links: [
        { label: 'Neuf', href: '/catalogue?etat=neuf' },
        { label: 'Occasion', href: '/catalogue?etat=occasion' },
        { label: 'Impression à la demande (POD)', href: '/pod' },
      ],
    },
    {
      title: 'Livres éducatifs',
      href: '/catalogue?type=educatif',
      links: [
        { label: 'Scolaire', href: '/catalogue?niveau=scolaire' },
        { label: 'Universitaire', href: '/catalogue?niveau=universitaire' },
        { label: 'Formation professionnelle', href: '/catalogue?niveau=professionnel' },
      ],
    },
    {
      title: 'Langues',
      href: '/catalogue?filtre=langue',
      links: [
        { label: 'Français', href: '/catalogue?langue=fr' },
        { label: 'Anglais', href: '/catalogue?langue=en' },
        { label: 'Lingala', href: '/catalogue?langue=lingala' },
        { label: 'Swhahili', href: '/catalogue?langue=swhahili' },
        { label: 'Kikongo', href: '/catalogue?langue=kikongo' },
        { label: 'Tshiluba', href: '/catalogue?langue=tshiluba' },
        { label: 'Otetela', href: '/catalogue?langue=otetela' },
      ],
    },
    {
      title: 'Accès rapide',
      links: [
        { label: 'Nouveautés', href: '/nouveautes' },
        { label: 'Meilleures ventes', href: '/catalogue?tri=ventes' },
        { label: 'Gratuit', href: '/gratuit' },
        { label: 'Promotions', href: '/catalogue?promo=1' },
      ],
    },
  ],
}

export const categoriesMenu: MegaMenuConfig = {
  id: 'categories',
  label: 'Catégories',
  href: '/categories',
  featured: {
    title: 'Explorer les catégories',
    description: 'Plus de 50 catégories de livres pour apprendre, enseigner, se divertir et transmettre le savoir.',
    href: '/categories',
    cta: 'Découvrir',
  },
  columns: [
    {
      title: 'Littérature',
      href: '/categorie/litterature',
      links: [
        { label: 'Roman', href: '/categorie/litterature/roman' },
        { label: 'Poésie', href: '/categorie/litterature/poesie' },
        { label: 'Théâtre', href: '/categorie/litterature/theatre' },
        { label: 'Essais & récits', href: '/categorie/litterature/essais' },
      ],
    },
    {
      title: 'Éducation',
      href: '/categorie/education',
      links: [
        { label: 'Primaire', href: '/categorie/education/primaire' },
        { label: 'Collège & lycée', href: '/categorie/education/secondaire' },
        { label: 'Manuels scolaires', href: '/categorie/education/manuels' },
        { label: 'Pédagogie', href: '/categorie/education/pedagogie' },
      ],
    },
    {
      title: 'Sciences humaines',
      href: '/categorie/sciences-humaines',
      links: [
        { label: 'Histoire', href: '/categorie/sciences-humaines/histoire' },
        { label: 'Philosophie', href: '/categorie/sciences-humaines/philosophie' },
        { label: 'Sociologie', href: '/categorie/sciences-humaines/sociologie' },
        { label: 'Politique & géopolitique', href: '/categorie/sciences-humaines/politique' },
      ],
    },
    {
      title: 'Jeunesse',
      href: '/categorie/jeunesse',
      links: [
        { label: 'Albums illustrés', href: '/categorie/jeunesse/albums' },
        { label: 'BD & mangas', href: '/categorie/jeunesse/bd' },
        { label: 'Young adult', href: '/categorie/jeunesse/young-adult' },
        { label: 'Contes & légendes', href: '/categorie/jeunesse/contes' },
      ],
    },
    {
      title: 'Professionnel',
      href: '/categorie/professionnel',
      links: [
        { label: 'Droit', href: '/categorie/professionnel/droit' },
        { label: 'Management & économie', href: '/categorie/professionnel/management' },
        { label: 'Santé & médecine', href: '/categorie/professionnel/sante' },
        { label: 'Technologie & IA', href: '/categorie/professionnel/tech' },
      ],
    },
  ],
}

export const auteursMenu: MegaMenuConfig = {
  id: 'auteurs',
  label: 'Auteurs',
  href: '/auteurs',
  featured: {
    title: 'Michée Makengo à la une',
    description: 'Découvrez mon univers littéraire, mes publications et les temps forts de mon parcours éditorial.',
    href: '/michée-makengo',
    cta: 'Voir mon profil',
  },
  columns: [
    {
      title: 'Auteurs',
      href: '/auteurs',
      links: [
        { label: 'Tous les auteurs', href: '/auteurs' },
        { label: 'Auteurs africains', href: '/auteurs?filtre=africains' },
        { label: 'Auteurs émergents', href: '/auteurs?filtre=emergents' },
        { label: 'Auteurs primés', href: '/auteurs?filtre=primes' },
        { label: 'Interviews & portraits', href: '/auteurs/portraits' },
      ],
    },
    {
      title: 'Éditeurs',
      href: '/editeurs',
      links: [
        { label: 'Tous les éditeurs', href: '/editeurs' },
        { label: 'Éditeurs partenaires', href: '/editeurs?filtre=partenaires' },
        { label: 'Éditeurs académiques', href: '/editeurs?filtre=academiques' },
        { label: 'Éditeurs jeunesse', href: '/editeurs?filtre=jeunesse' },
        { label: 'Soumettre un catalogue', href: '/editeurs/soumettre' },
      ],
    },
    {
      title: 'Maisons d’édition',
      href: '/maisons-edition',
      links: [
        { label: 'Maisons africaines', href: '/maisons-edition?filtre=africaines' },
        { label: 'Maisons indépendantes', href: '/maisons-edition?filtre=independantes' },
        { label: 'Nouvelles maisons', href: '/maisons-edition?filtre=nouvelles' },
        { label: 'Collections thématiques', href: '/maisons-edition/collections' },
        { label: 'Focus pays', href: '/maisons-edition/pays' },
      ],
    },
    {
      title: 'Ressources pro',
      href: '/ressources-pro',
      links: [
        { label: 'Publier un manuscrit', href: '/publier/manuscrit' },
        { label: 'Services éditoriaux', href: '/services-editoriaux' },
        { label: 'Distribution & diffusion', href: '/distribution-diffusion' },
        { label: 'ISBN / dépôt légal', href: '/guides/isbn-depot-legal' },
        { label: 'Programme institutions', href: '/solutions/institutions' },
      ],
    },
  ],
}

export const partenairesMenu: MegaMenuConfig = {
  id: 'partenaires',
  label: 'Partenaires',
  featured: {
    title: 'Programme Partenaires',
    description: 'Bibliothèques, librairies et imprimeries : commande, location, achat et impression dans un parcours unifié.',
    href: '/partenaires',
    cta: 'Devenir partenaire',
  },
  columns: [
    {
      title: 'Bibliothèques',
      href: '/partenaires/bibliotheques',
      links: [
        { label: 'Commandes institutionnelles', href: '/partenaires/bibliotheques/commandes' },
        { label: 'Abonnements & packs', href: '/partenaires/bibliotheques/abonnements' },
        { label: 'Prêt & location', href: '/partenaires/bibliotheques/location' },
        { label: 'Demande de devis', href: '/partenaires/bibliotheques/devis' },
      ],
    },
    {
      title: 'Librairies',
      href: '/partenaires/librairies',
      links: [
        { label: 'Achat en gros', href: '/partenaires/librairies/achat-en-gros' },
        { label: 'Conditions revendeurs', href: '/partenaires/librairies/revendeurs' },
        { label: 'Nouveautés & précommandes', href: '/partenaires/librairies/nouveautes' },
        { label: 'Suivi de commandes', href: '/partenaires/librairies/commandes' },
      ],
    },
    {
      title: 'Imprimeries',
      href: '/partenaires/imprimeries',
      links: [
        { label: 'Impression à la demande (POD)', href: '/partenaires/imprimeries/pod' },
        { label: 'Tirages courts & moyens', href: '/partenaires/imprimeries/tirages' },
        { label: 'Spécifications techniques', href: '/partenaires/imprimeries/specifications' },
      ],
    },
    {
      title: 'Services & support',
      href: '/partenaires/services',
      links: [
        { label: 'Logistique & livraison', href: '/partenaires/services/logistique' },
        { label: 'Facturation pro', href: '/partenaires/services/facturation' },
        { label: 'SLA & délais', href: '/partenaires/services/sla' },
        { label: 'Contact commercial', href: '/partenaires/services/contact' },
      ],
    },
  ],
}

export const megaMenus = [catalogueMenu, categoriesMenu, auteursMenu, partenairesMenu] as const

/**
 * 6 liens du menu principal (Catalogue, Catégories + liens suivants)
 * — même taille, même padding, même effet au survol
 */
export const headerMenuLinkClass = 'header-menu-link'

export const headerMenuLinkActiveClass = 'header-menu-link--active'

/** Lien de la carte « À la une » du mega menu */
export function getFeaturedHref(menu: MegaMenuConfig): string {
  if (menu.id === 'categories')
    return '/categories'

  return menu.featured?.href ?? '/'
}

/** Liens cliquables dans le panneau mega menu */
export const megaMenuPanelLinkClass =
  'cursor-pointer text-sm font-normal leading-none text-foreground/75 transition-colors duration-150 hover:bg-muted/50 hover:text-foreground'

export const mainNavLinks: NavLink[] = [
  { label: 'Publier', href: '/publier' },
  { label: 'Blog', href: '/blog' },
]

export const secondaryNavLinks: NavLink[] = [
  { label: 'Nouveautés', href: '/nouveautes' },
  { label: 'Tendances', href: '/tendances' },
  { label: 'Gratuit', href: '/gratuit' },
  { label: 'Scolaire', href: '/catalogue?niveau=scolaire' },
  { label: 'Universitaire', href: '/catalogue?niveau=universitaire' },
  { label: 'POD', href: '/pod' },
  { label: 'AudioBooks', href: '/catalogue?format=audio' },
  { label: 'Livres africains', href: '/livres-africains' },
]

export interface HeaderAction {
  id: string
  label: string
  href: string
  badge?: number
}

export const headerActions: HeaderAction[] = [
  { id: 'profile', label: 'Mon compte', href: '/compte' },
]
