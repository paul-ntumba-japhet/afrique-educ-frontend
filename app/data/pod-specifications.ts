import type { Component } from 'vue'
import {
  BookMarked,
  BookOpen,
  Crop,
  FileText,
  Info,
  Layers,
  Library,
  ScanLine,
} from 'lucide-vue-next'

export interface PodSpecSection {
  label?: string
  items?: string[]
  text?: string
}

export interface PodSpecCard {
  id: string
  title: string
  icon: Component
  sections: PodSpecSection[]
  footnote?: string
}

export const podSpecificationsCards: PodSpecCard[] = [
  {
    id: 'formats',
    title: 'Formats disponibles',
    icon: BookOpen,
    sections: [
      {
        items: [
          'A4 (210 × 297 mm)',
          'A5 (148 × 210 mm)',
          '148 × 210 mm',
          'Format personnalisé',
        ],
      },
    ],
    footnote: 'Autres formats sur demande.',
  },
  {
    id: 'pages',
    title: 'Pages',
    icon: Layers,
    sections: [
      { label: 'Nombre de pages', items: ['De 24 à 1000 pages'] },
      {
        label: 'Impression',
        items: ['Noir et blanc', 'Couleur', 'Recto seul ou recto verso'],
      },
    ],
  },
  {
    id: 'cover',
    title: 'Couverture',
    icon: BookMarked,
    sections: [
      {
        label: 'Types de couverture',
        items: ['Souple (dos carré collé)', 'Rigide (cartonnée)'],
      },
      { label: 'Finitions', items: ['Mat', 'Brillant', 'Soft Touch'] },
    ],
  },
  {
    id: 'paper',
    title: 'Papier intérieur',
    icon: Layers,
    sections: [
      {
        label: 'Types de papier',
        items: [
          'Papier offset',
          'Papier bouffant',
          'Papier couché mat',
          'Papier couché brillant',
        ],
      },
      {
        label: 'Grammages disponibles',
        items: ['80 g/m² • 90 g/m² • 100 g/m² • 120 g/m² • 170 g/m²'],
      },
    ],
  },
  {
    id: 'binding',
    title: 'Reliures',
    icon: Library,
    sections: [
      {
        items: [
          'Dos carré collé (collé PUR)',
          'Reliure cousue (fil)',
          'Reliure spirale',
          'Agrafée (jusqu’à 48 pages)',
        ],
      },
    ],
  },
  {
    id: 'bleeds',
    title: 'Fonds perdus et marges',
    icon: Crop,
    sections: [
      {
        text: 'Fonds perdus : 3 mm tout autour.',
      },
      {
        text: 'Marges de sécurité : 5 mm. Évitez de placer les éléments importants (texte, logos) trop près des bords.',
      },
    ],
  },
  {
    id: 'resolution',
    title: 'Résolution et couleurs',
    icon: ScanLine,
    sections: [
      {
        items: [
          'Résolution recommandée : 300 DPI',
          'Mode colorimétrique : CMJN',
          'Pas de RVB ni Pantone',
          'Noir profond (C:60 M:60 Y:60 K:100)',
        ],
      },
    ],
  },
  {
    id: 'file',
    title: 'Fichier d’impression',
    icon: FileText,
    sections: [
      {
        items: [
          'Format PDF (recommandé)',
          'Polices incorporées ou vectorisées',
          'Images en haute résolution (300 DPI)',
          'Fichier à taille réelle sans protection',
        ],
      },
    ],
  },
  {
    id: 'tips',
    title: 'Bon à savoir',
    icon: Info,
    sections: [
      {
        text: 'Notre équipe vérifie gratuitement vos fichiers avant impression. En cas de non-conformité, nous vous contacterons pour vous aider à corriger.',
      },
    ],
  },
]

export const podSpecificationsGuideHref = '/docs/guide-preparation-fichiers.pdf'
