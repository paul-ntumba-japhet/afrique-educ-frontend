import type { Component } from 'vue'
import {
  BookMarked,
  BookOpen,
  Building2,
  Check,
  GraduationCap,
  Headphones,
  LibraryBig,
  PenLine,
  Printer,
  Rocket,
  ShieldCheck,
  Star,
  Store,
  UserRound,
  Users,
  Zap,
} from 'lucide-vue-next'
import heroImage from '~/assets/images/packs/hero.png'

export const librarySubscriptionsImages = {
  hero: heroImage,
} as const

export const librarySubscriptionsHeroHighlights = [
  { id: 'flex', label: 'Simple et flexible', icon: Zap },
  { id: 'secure', label: 'Sécurisé', icon: ShieldCheck },
  { id: 'support', label: 'Accompagnement', icon: Headphones },
] as const

export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: string
  period: string
  features: string[]
  cta: string
  href: string
  icon: Component
  featured?: boolean
  badge?: string
  tone: 'free' | 'premium' | 'pro'
  featuresColumns?: 1 | 2
}

export type SubscriptionAudience = 'individuals' | 'organizations'

export const individualPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Lecteur Gratuit',
    description: 'L’essentiel pour bien lire',
    price: '0 FCFA',
    period: 'toujours',
    features: [
      'Achat de livres',
      'Bibliothèque personnelle',
      'Lecture en ligne',
      'Listes de lecture',
      'Recommandations éditoriales',
      'Newsletter Afric-Educ',
      'Accès mobile & web',
    ],
    cta: 'Commencer gratuitement',
    href: '/inscription',
    icon: BookOpen,
    tone: 'free',
    featuresColumns: 1,
  },
  {
    id: 'premium',
    name: 'Lecteur Premium',
    description: 'Une expérience de lecture enrichie',
    price: '2 500 FCFA',
    period: 'mois',
    features: [
      'Tout dans Gratuit',
      'Lecture hors connexion',
      'Catalogue numérique étendu',
      'Sans publicité',
      'Nouveautés en avant-première',
      'Téléchargements illimités',
      'Sync multi-appareils',
      'Support prioritaire',
      'Collections exclusives',
      'Mode lecture avancé',
    ],
    cta: 'Choisir Premium',
    href: '/inscription?plan=premium',
    icon: BookMarked,
    featured: true,
    badge: 'Populaire',
    tone: 'premium',
    featuresColumns: 2,
  },
  {
    id: 'author',
    name: 'Auteur Pro',
    description: 'Publiez, gérez et développez votre audience',
    price: '7 500 FCFA',
    period: 'mois',
    features: [
      'Publications illimitées',
      'Tableau de bord auteur',
      'Outils IA éditoriaux',
      'Statistiques de lecture',
      'Gestion des droits',
      'Promotion catalogue',
      'Espace auteurs',
      'Accompagnement dédié',
      'ISBN & dépôt',
      'Distribution POD',
      'Royalties transparentes',
      'Support prioritaire',
    ],
    cta: 'Devenir auteur pro',
    href: '/publier',
    icon: PenLine,
    tone: 'pro',
    featuresColumns: 2,
  },
]

export interface OrganizationSolution {
  id: string
  title: string
  features: string[]
  cta: string
  href: string
  icon: Component
}

export const organizationSolutions: OrganizationSolution[] = [
  {
    id: 'schools',
    title: 'Écoles & Universités',
    features: [
      'Licences multi-utilisateurs',
      'Catalogue pédagogique',
      'Suivi des emprunts',
      'Facturation institutionnelle',
    ],
    cta: 'En savoir plus',
    href: '/partenaires/bibliotheques/commandes',
    icon: GraduationCap,
  },
  {
    id: 'libraries',
    title: 'Bibliothèques',
    features: [
      'Abonnements catalogue',
      'Prêt & location',
      'Gestion des acquisitions',
      'Rapports d’usage',
    ],
    cta: 'En savoir plus',
    href: '/partenaires/bibliotheques/location',
    icon: LibraryBig,
  },
  {
    id: 'publishers',
    title: 'Maisons d’édition',
    features: [
      'Diffusion numérique',
      'Gestion des droits',
      'Analytics ventes',
      'Distribution POD',
    ],
    cta: 'Nous contacter',
    href: '/partenaires/services/contact',
    icon: Building2,
  },
  {
    id: 'bookstores',
    title: 'Librairies',
    features: [
      'Achat en gros',
      'Conditions revendeurs',
      'Précommandes',
      'Suivi commandes',
    ],
    cta: 'En savoir plus',
    href: '/partenaires/librairies/achat-en-gros',
    icon: Store,
  },
  {
    id: 'enterprises',
    title: 'Entreprises & Institutions',
    features: [
      'Packs sur mesure',
      'Formation & RSE',
      'Multi-sites',
      'SLA dédié',
    ],
    cta: 'Nous contacter',
    href: '/partenaires/services/contact',
    icon: Users,
  },
]

export interface ThematicPack {
  id: string
  title: string
  description: string
  price: string
  href: string
  icon: Component
}

export const thematicPacks: ThematicPack[] = [
  {
    id: 'launch',
    title: 'Pack Lancement d’auteur',
    description: 'ISBN, couverture, mise en ligne et promotion de lancement.',
    price: '99 000 FCFA',
    href: '/publier',
    icon: Rocket,
  },
  {
    id: 'bestseller',
    title: 'Pack Bestseller',
    description: 'Stratégie éditoriale, marketing et visibilité catalogue.',
    price: '299 000 FCFA',
    href: '/publier',
    icon: Star,
  },
  {
    id: 'school',
    title: 'Pack École',
    description: 'Licences, manuels numériques et accompagnement pédagogique.',
    price: 'Sur devis',
    href: '/partenaires/bibliotheques/devis',
    icon: GraduationCap,
  },
  {
    id: 'library',
    title: 'Pack Bibliothèque',
    description: 'Catalogue institutionnel, prêt numérique et formation.',
    price: 'Sur devis',
    href: '/partenaires/bibliotheques/devis',
    icon: LibraryBig,
  },
]

export const comparisonFeatures = [
  { id: 'catalog', label: 'Accès catalogue numérique', free: true, premium: true, pro: true },
  { id: 'offline', label: 'Téléchargements hors ligne', free: false, premium: true, pro: true },
  { id: 'publish', label: 'Publication d’ouvrages', free: false, premium: false, pro: true },
  { id: 'dashboard', label: 'Tableau de bord auteur', free: false, premium: false, pro: true },
  { id: 'ia', label: 'Outils IA éditoriaux', free: false, premium: false, pro: true },
  { id: 'support', label: 'Support prioritaire', free: false, premium: true, pro: true },
  { id: 'stats', label: 'Statistiques avancées', free: false, premium: false, pro: true },
] as const

export const aLaCarteServices = [
  { id: 'isbn', label: 'ISBN' },
  { id: 'correction', label: 'Correction' },
  { id: 'translation', label: 'Traduction' },
  { id: 'cover', label: 'Couverture' },
  { id: 'audiobook', label: 'Audiobook' },
  { id: 'print', label: 'Impression' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'ads', label: 'Publicité' },
  { id: 'shipping', label: 'Livraison internationale' },
] as const

export const librarySubscriptionsTestimonials = [
  {
    id: '1',
    quote: 'Afric-Educ nous a permis d’équiper notre bibliothèque universitaire avec un catalogue africain riche et accessible.',
    name: 'Dr. Amina Kabongo',
    role: 'Bibliothécaire, Université de Kinshasa',
  },
  {
    id: '2',
    quote: 'Le pack auteur pro m’a accompagné de la rédaction à la diffusion de mon premier roman.',
    name: 'Michée Makengo',
    role: 'Auteur',
  },
  {
    id: '3',
    quote: 'Nos élèves accèdent désormais à des ressources numériques adaptées à chaque niveau.',
    name: 'Jean-Pierre Mwamba',
    role: 'Directeur, Lycée Saint-Joseph',
  },
] as const

export const librarySubscriptionsFaq = [
  {
    id: 'change',
    question: 'Puis-je changer de formule à tout moment ?',
    answer:
      'Oui. Vous pouvez passer d’une formule à une autre depuis votre espace compte. Le changement prend effet immédiatement et la facturation est ajustée au prorata.',
  },
  {
    id: 'trial',
    question: 'Y a-t-il une période d’essai pour Premium ?',
    answer:
      'Le plan Lecteur Gratuit vous permet de découvrir la plateforme sans engagement. Premium peut être testé 14 jours avec annulation possible à tout moment.',
  },
  {
    id: 'institution',
    question: 'Comment fonctionnent les abonnements institutionnels ?',
    answer:
      'Les bibliothèques et établissements bénéficient de licences multi-utilisateurs, d’un catalogue dédié et d’un conseiller institutions. Un devis personnalisé est établi selon vos besoins.',
  },
  {
    id: 'payment',
    question: 'Quels moyens de paiement acceptez-vous ?',
    answer:
      'Carte bancaire, Mobile Money (M-Pesa, Orange Money, Airtel Money) et virement pour les institutions. Facturation pro disponible sur demande.',
  },
  {
    id: 'cancel',
    question: 'Comment résilier mon abonnement ?',
    answer:
      'La résiliation se fait en un clic depuis votre espace compte. Vous conservez l’accès jusqu’à la fin de la période en cours, sans frais cachés.',
  },
] as const

export { Check, UserRound, Building2 as BuildingIcon }
