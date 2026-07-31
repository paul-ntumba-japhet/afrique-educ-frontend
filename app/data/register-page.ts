import type { Component } from 'vue'
import {
  BookMarked,
  BookOpen,
  Building2,
  GraduationCap,
  Landmark,
  Library,
  PenLine,
  Printer,
  School,
  Store,
  User,
  Users,
} from 'lucide-vue-next'

export type AccountCategory = 'individual' | 'organization'

export type IndividualType = 'reader' | 'author' | 'reader_author'

export type OrganizationType =
  | 'publisher'
  | 'school'
  | 'university'
  | 'library'
  | 'bookstore'
  | 'training_center'
  | 'printing_company'

export interface RegisterChoiceOption {
  id: string
  title: string
  subtitle?: string
  description?: string
  icon: Component
}

export const registerProgressSteps = {
  individual: [
    'Choix du profil',
    'Type de compte',
    'Création du compte',
    'Complétez votre profil',
    'Finalisation',
  ],
  organization: [
    'Choix du profil',
    'Type de compte',
    'Création du compte',
    'Informations complémentaires',
    'Vérification',
    'Finalisation',
  ],
} as const

export const profileTypeOptions: RegisterChoiceOption[] = [
  {
    id: 'individual',
    title: 'Particulier',
    subtitle: 'Lecteurs et Auteurs',
    description: 'Lire, publier et créer votre profil personnel',
    icon: User,
  },
  {
    id: 'organization',
    title: 'Organisation',
    subtitle: 'Editeurs et partenaires',
    description: 'École, université, bibliothèque, maison d’édition…',
    icon: Building2,
  },
]

export const individualTypeOptions: RegisterChoiceOption[] = [
  {
    id: 'reader',
    title: 'Lecteur',
    description: 'Découvrir et lire des milliers de livres',
    icon: BookOpen,
  },
  {
    id: 'author',
    title: 'Auteur',
    description: 'Publier et vendre vos ouvrages',
    icon: PenLine,
  },
  {
    id: 'reader_author',
    title: 'Lecteur et Auteur',
    description: 'Lire des livres et publier les vôtres',
    icon: BookMarked,
  },
]

export const organizationTypeOptions: RegisterChoiceOption[] = [
  {
    id: 'publisher',
    title: 'Maison d’édition',
    description: 'Éditer et diffuser des ouvrages',
    icon: Landmark,
  },
  {
    id: 'school',
    title: 'École',
    description: 'Proposer des manuels et ressources pédagogiques',
    icon: School,
  },
  {
    id: 'university',
    title: 'Université',
    description: 'Diffuser des ouvrages académiques',
    icon: GraduationCap,
  },
  {
    id: 'library',
    title: 'Bibliothèque',
    description: 'Gérer et partager un fonds documentaire',
    icon: Library,
  },
  {
    id: 'bookstore',
    title: 'Librairie',
    description: 'Vendre et promouvoir des livres',
    icon: Store,
  },
  {
    id: 'training_center',
    title: 'Centre de formation',
    description: 'Proposer des contenus éducatifs spécialisés',
    icon: Users,
  },
  {
    id: 'printing_company',
    title: 'Imprimerie',
    description: 'Produire des ouvrages imprimés',
    icon: Printer,
  },
]

export const readerInterestTags = [
  'Histoire',
  'Sciences',
  'Technologie',
  'Littérature',
  'Jeunesse',
  'Économie',
  'Développement personnel',
  'Spiritualité',
  'Romans',
  'Livres scolaires',
  'Culture africaine',
  'Entrepreneuriat',
] as const

export const writingLanguages = [
  'Français',
  'Anglais',
  'Arabe',
  'Portugais',
  'Swahili',
  'Autre',
] as const

export const bookCategories = [
  'Roman',
  'Essai',
  'Jeunesse',
  'Scolaire',
  'Biographie',
  'Poésie',
  'Autre',
] as const

export const countryOptions = [
  'Côte d’Ivoire',
  'Sénégal',
  'Cameroun',
  'RD Congo',
  'Mali',
  'Burkina Faso',
  'Bénin',
  'Togo',
  'Gabon',
  'Guinée',
  'Niger',
  'France',
  'Autre',
] as const

export const organizationDocumentRequirements: Record<OrganizationType, string[]> = {
  publisher: [
    'RCCM',
    'Numéro d’identification fiscale',
    'Autorisation d’exercice ou document équivalent',
  ],
  school: [
    'Arrêté d’agrément',
    'Numéro d’identification fiscale, si disponible',
    'Document administratif officiel',
  ],
  university: [
    'Agrément universitaire',
    'Numéro d’identification fiscale',
    'Document administratif officiel',
  ],
  library: [
    'Document d’existence',
    'Autorisation administrative, si applicable',
  ],
  bookstore: [
    'RCCM',
    'Numéro d’identification fiscale',
    'Autorisation commerciale',
  ],
  training_center: [
    'Agrément',
    'Numéro d’identification fiscale',
    'Document administratif officiel',
  ],
  printing_company: [
    'RCCM',
    'Numéro d’identification fiscale',
    'Autorisation d’exploitation',
  ],
}

export const registerWelcomeContent = {
  reader: {
    title: 'Bienvenue !',
    message: 'Votre compte lecteur a été créé avec succès. Vous pouvez maintenant explorer la bibliothèque.',
    cta: 'Explorer la bibliothèque',
    href: '/espace-lecteur',
    secondary: 'Retour à l’accueil',
    secondaryHref: '/',
  },
  author: {
    title: 'Bienvenue, auteur !',
    message: 'Votre compte a été créé avec succès. Vous pouvez maintenant compléter votre espace auteur et publier votre premier livre.',
    cta: 'Accéder à mon espace auteur',
    href: '/espace-auteur',
    secondary: 'Retour à l’accueil',
    secondaryHref: '/',
  },
  reader_author: {
    title: 'Bienvenue !',
    message: 'Votre compte lecteur et auteur a été créé avec succès. Explorez la bibliothèque ou commencez à publier.',
    cta: 'Accéder à mon espace auteur',
    href: '/espace-auteur',
    secondary: 'Explorer la bibliothèque',
    secondaryHref: '/livres',
  },
  organization: {
    title: 'Merci !',
    message: 'Votre inscription a été reçue. Votre dossier est en cours d’examen par notre équipe. Vous recevrez une réponse dans votre espace organisation.',
    cta: 'Accéder à mon espace organisation',
    href: '/espace-organisation',
    secondary: 'Retour à l’accueil',
    secondaryHref: '/',
  },
}
