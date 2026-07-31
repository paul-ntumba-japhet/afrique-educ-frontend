import type { Component } from 'vue'
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock,
  FileText,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Library,
  MapPin,
  Package,
  School,
  Search,
  ShieldCheck,
  Store,
  Tag,
  Truck,
  Users,
  Wallet,
} from 'lucide-vue-next'
import heroImage from '~/assets/images/commandes-institutions/hero.png'
import laptopImage from '~/assets/images/commandes-institutions/ordinateur-decor.png'
import bandeau1 from '~/assets/images/commandes-institutions/bandeau/carte1.png'
import bandeau2 from '~/assets/images/commandes-institutions/bandeau/carte2.png'
import bandeau3 from '~/assets/images/commandes-institutions/bandeau/carte3.png'
import bandeau4 from '~/assets/images/commandes-institutions/bandeau/carte4.png'
import bandeau5 from '~/assets/images/commandes-institutions/bandeau/carte5.png'
import bandeau6 from '~/assets/images/commandes-institutions/bandeau/carte6.png'
import bandeau7 from '~/assets/images/commandes-institutions/bandeau/carte7.png'
import bandeau8 from '~/assets/images/commandes-institutions/bandeau/carte8.png'
import bandeau9 from '~/assets/images/commandes-institutions/bandeau/carte9.png'
import bandeau10 from '~/assets/images/commandes-institutions/bandeau/carte10.png'
import bandeau11 from '~/assets/images/commandes-institutions/bandeau/carte11.png'
import bandeau12 from '~/assets/images/commandes-institutions/bandeau/carte12.png'
import bandeau13 from '~/assets/images/commandes-institutions/bandeau/carte13.png'
import bandeau14 from '~/assets/images/commandes-institutions/bandeau/carte14.png'
import bandeau15 from '~/assets/images/commandes-institutions/bandeau/carte15.png'
import bandeau16 from '~/assets/images/commandes-institutions/bandeau/carte16.png'
import bandeau17 from '~/assets/images/commandes-institutions/bandeau/carte17.png'

export const institutionalOrdersImages = {
  hero: heroImage,
  laptop: laptopImage,
} as const

export const institutionalClosingBenefits = [
  'Conseiller dédié',
  'Devis gratuit',
  'Remises volume',
  'Facturation adaptée',
] as const

export interface InstitutionalAudience {
  id: string
  title: string
  description: string
  icon: Component
}

export const institutionalAudiences: InstitutionalAudience[] = [
  { id: 'libraries', title: 'Bibliothèques', description: 'Publiques, universitaires, spécialisées', icon: Library },
  { id: 'schools', title: 'Écoles', description: 'Primaires, secondaires, lycées', icon: School },
  { id: 'universities', title: 'Universités', description: 'Facultés, campus, centres de recherche', icon: GraduationCap },
  { id: 'training', title: 'Centres de formation', description: 'Professionnels & continus', icon: BookOpen },
  { id: 'business', title: 'Entreprises', description: 'RH, culture d’entreprise, RSE', icon: Building2 },
  { id: 'ngo', title: 'ONG', description: 'Éducation, culture, développement', icon: Handshake },
  { id: 'ministries', title: 'Ministères', description: 'Éducation, culture, jeunesse', icon: Landmark },
  { id: 'bookstores', title: 'Librairies', description: 'Indépendantes & réseaux', icon: Store },
]

export interface InstitutionalReason {
  id: string
  title: string
  description: string
  icon: Component
  accent: string
  accentSoft: string
}

export const institutionalReasons: InstitutionalReason[] = [
  {
    id: 'catalog',
    title: 'Catalogue africain',
    description: 'Des milliers d’ouvrages d’auteurs africains et de la diaspora.',
    icon: Globe2,
    accent: '#c5a059',
    accentSoft: 'rgba(197, 160, 89, 0.14)',
  },
  {
    id: 'pricing',
    title: 'Prix dégressifs',
    description: 'Remises volume dès 10 exemplaires, jusqu’à 25 %.',
    icon: Wallet,
    accent: '#1a3020',
    accentSoft: 'rgba(26, 48, 32, 0.1)',
  },
  {
    id: 'delivery',
    title: 'Livraison',
    description: 'Afrique & diaspora, suivi et délais maîtrisés.',
    icon: Truck,
    accent: '#b88345',
    accentSoft: 'rgba(184, 131, 69, 0.14)',
  },
  {
    id: 'billing',
    title: 'Facturation',
    description: 'Devis, bons de commande et factures proforma.',
    icon: FileText,
    accent: '#3d5a80',
    accentSoft: 'rgba(61, 90, 128, 0.12)',
  },
  {
    id: 'support',
    title: 'Accompagnement',
    description: 'Conseiller dédié pour vos appels d’offres.',
    icon: Users,
    accent: '#8a621f',
    accentSoft: 'rgba(138, 98, 31, 0.12)',
  },
  {
    id: 'payment',
    title: 'Paiements adaptés',
    description: 'Virement, mobile money, échéanciers institutionnels.',
    icon: ShieldCheck,
    accent: '#2f6b4f',
    accentSoft: 'rgba(47, 107, 79, 0.12)',
  },
]

export interface InstitutionalStep {
  id: string
  number: number
  label: string
  icon: Component
}

export const institutionalSteps: InstitutionalStep[] = [
  { id: 'select', number: 1, label: 'Sélectionnez les livres', icon: Search },
  { id: 'quote', number: 2, label: 'Demandez un devis', icon: ClipboardList },
  { id: 'validate', number: 3, label: 'Validez la commande', icon: CheckCircle2 },
  { id: 'payment', number: 4, label: 'Paiement', icon: Wallet },
  { id: 'prep', number: 5, label: 'Préparation', icon: Package },
  { id: 'ship', number: 6, label: 'Expédition', icon: Truck },
  { id: 'delivery', number: 7, label: 'Livraison', icon: Award },
]

export const institutionalDiscountTiers = [
  { qty: '10+ exemplaires', discount: '5 %', segment: 'Petites commandes' },
  { qty: '25+ exemplaires', discount: '8 %', segment: 'Écoles' },
  { qty: '50+ exemplaires', discount: '12 %', segment: 'Bibliothèques' },
  { qty: '100+ exemplaires', discount: '18 %', segment: 'Universités' },
  { qty: '250+ exemplaires', discount: '25 %', segment: 'Grandes institutions' },
  { qty: '500+ exemplaires', discount: 'Sur devis', segment: 'Commandes sur mesure' },
] as const

export const institutionalSearchCategories = [
  { id: 'primary', label: 'Primaire' },
  { id: 'secondary', label: 'Secondaire' },
  { id: 'university', label: 'Université' },
  { id: 'training', label: 'Formation' },
  { id: 'extracurricular', label: 'Parascolaire' },
  { id: 'more', label: '…' },
] as const

export interface InstitutionalAdvancedFilter {
  id: string
  label: string
  defaultValue: string
  icon: Component
  options: readonly string[]
}

export const institutionalAdvancedFilters: InstitutionalAdvancedFilter[] = [
  {
    id: 'subject',
    label: 'Matière',
    defaultValue: 'Toutes',
    icon: BookOpen,
    options: ['Toutes', 'Littérature', 'Histoire', 'Sciences'],
  },
  {
    id: 'language',
    label: 'Langue',
    defaultValue: 'Toutes',
    icon: Globe2,
    options: ['Toutes', 'Français', 'Anglais', 'Lingala'],
  },
  {
    id: 'country',
    label: 'Pays',
    defaultValue: 'Tous',
    icon: MapPin,
    options: ['Tous', 'RDC', 'Sénégal', 'Côte d’Ivoire'],
  },
  {
    id: 'publisher',
    label: 'Maison d’édition',
    defaultValue: 'Toutes',
    icon: Building2,
    options: ['Toutes', 'Indépendantes', 'Universitaires'],
  },
  {
    id: 'availability',
    label: 'Disponibilité',
    defaultValue: 'Toutes',
    icon: CheckCircle2,
    options: ['Toutes', 'En stock', 'Sur commande'],
  },
  {
    id: 'format',
    label: 'Format',
    defaultValue: 'Tous',
    icon: FileText,
    options: ['Tous', 'Papier', 'Numérique', 'Audio'],
  },
]

export const institutionalSearchHighlights = [
  { id: 'delivery', label: 'Livraison rapide', icon: Truck },
  { id: 'pricing', label: 'Tarifs institutions', icon: Tag },
  { id: 'quote', label: 'Devis instantané', icon: FileText },
  { id: 'availability', label: 'Disponibilité en temps réel', icon: Clock },
] as const

export interface InstitutionalService {
  id: string
  label: string
  image: string
}

export const institutionalServices: InstitutionalService[] = [
  { id: 'b1', label: 'Service institutionnel', image: bandeau1 },
  { id: 'b2', label: 'Service institutionnel', image: bandeau2 },
  { id: 'b3', label: 'Service institutionnel', image: bandeau3 },
  { id: 'b4', label: 'Service institutionnel', image: bandeau4 },
  { id: 'b5', label: 'Service institutionnel', image: bandeau5 },
  { id: 'b6', label: 'Service institutionnel', image: bandeau6 },
  { id: 'b7', label: 'Service institutionnel', image: bandeau7 },
  { id: 'b8', label: 'Service institutionnel', image: bandeau8 },
  { id: 'b9', label: 'Service institutionnel', image: bandeau9 },
  { id: 'b10', label: 'Service institutionnel', image: bandeau10 },
  { id: 'b11', label: 'Service institutionnel', image: bandeau11 },
  { id: 'b12', label: 'Service institutionnel', image: bandeau12 },
  { id: 'b13', label: 'Service institutionnel', image: bandeau13 },
  { id: 'b14', label: 'Service institutionnel', image: bandeau14 },
  { id: 'b15', label: 'Service institutionnel', image: bandeau15 },
  { id: 'b16', label: 'Service institutionnel', image: bandeau16 },
  { id: 'b17', label: 'Service institutionnel', image: bandeau17 },
]

export const institutionalFaqItems = [
  {
    id: 'who',
    question: 'Qui peut passer une commande institutionnelle ?',
    answer:
      'Toute structure publique ou privée engagée dans l’éducation, la culture ou la formation peut ouvrir un compte : bibliothèques municipales et universitaires, écoles et lycées, facultés, centres de formation, entreprises (RH / RSE), ONG, ministères et librairies. Après vérification des informations administratives (raison sociale, contacts, adresse de livraison), un conseiller institutions valide l’accès et paramètre les conditions volume adaptées à votre organisation.',
  },
  {
    id: 'min',
    question: 'Y a-t-il un minimum de commande ?',
    answer:
      'Il n’y a pas de montant minimum imposé pour ouvrir un compte. Les remises dégressives démarrent dès 10 exemplaires (5 %), puis progressent à 25, 50, 100 et 250 exemplaires jusqu’à 25 % de réduction. Au-delà de 500 exemplaires, un devis sur mesure est établi : composition du panier, délais de réassort, options de conditionnement et échéancier de paiement sont négociés avec votre conseiller.',
  },
  {
    id: 'delivery',
    question: 'Quels sont les délais de livraison ?',
    answer:
      'En stock disponible, comptez en général 5 à 15 jours ouvrés pour les destinations en Afrique, selon le pays, le volume et le mode de transport. Les commandes mixtes (papier + numérique) sont traitées en parallèle : les accès numériques sont activés dès validation du paiement, tandis que les ouvrages physiques suivent le planning logistique confirmé sur le devis. Un suivi de colis et des alertes d’étape (préparation, expédition, livraison) sont visibles dans votre espace Institutions.',
  },
  {
    id: 'invoice',
    question: 'Proposez-vous la facturation sur bon de commande ?',
    answer:
      'Oui. Nous produisons devis, proforma, bon de commande et facture conformes aux procédures d’achat public ou privé. Les documents peuvent intégrer vos références internes (numéro de marché, centre de coût, contact comptable) et être transmis aux formats PDF et Excel. Le paiement peut s’effectuer par virement, mobile money ou selon un échéancier institutionnel convenu lors de la validation du devis.',
  },
  {
    id: 'account',
    question: 'Comment accéder à l’espace Institutions ?',
    answer:
      'Après validation de votre compte par l’équipe Afric-Educ, vous recevez vos identifiants par e-mail. Depuis le tableau de bord, vous consultez les devis en cours, passez ou suivez vos commandes, visualisez les livraisons à venir et téléchargez vos factures. Un conseiller dédié reste joignable pour ajuster un panier, relancer un devis ou accompagner un appel d’offres. En cas d’oubli d’accès, la réinitialisation se fait directement depuis l’écran de connexion.',
  },
] as const
