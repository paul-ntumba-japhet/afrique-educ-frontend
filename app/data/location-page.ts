import type { Component } from 'vue'
import {
  BookOpen,
  Building2,
  CalendarDays,
  CreditCard,
  Library,
  Search,
  Smartphone,
  Users,
} from 'lucide-vue-next'
import ameBaoba from '~/assets/images/page-livres/ame-baoba.png'
import cheminsEveil from '~/assets/images/page-livres/chemins-eveil.png'
import contesLegendes from '~/assets/images/page-livres/contes-legendes-du-congo.png'
import etoilesInongo from '~/assets/images/page-livres/etoiles-inongo.png'
import histoireCongo from '~/assets/images/page-livres/histoire-congo.png'
import parolesAnciens from '~/assets/images/page-livres/paroles-des-anciens.png'
import royaumeKongo from '~/assets/images/page-livres/royaume-kongo.png'
import sciencesNaturelles from '~/assets/images/page-livres/sciences-naturelles.png'

export type LocationBookFormat = 'Numérique' | 'Papier'
export type LocationBookAction = 'Louer' | 'Emprunter'

export interface LocationBook {
  id: string
  title: string
  author: string
  cover: string
  format: LocationBookFormat
  available: boolean
  priceLabel: string
  durationLabel: string
  action: LocationBookAction
  description: string
  genre: string
  pages: number
  language: string
  fileFormats: string
  rating: number
  reviewCount: number
}

export interface LocationStep {
  id: string
  title: string
  description: string
  icon: Component
}

export interface LocationAccessMode {
  id: string
  title: string
  description: string
  href: string
  icon: Component
}

export interface LocationStat {
  value: string
  label: string
}

export const locationTypeOptions = [
  { id: 'all', label: 'Tous les types' },
  { id: 'rent', label: 'Location' },
  { id: 'borrow', label: 'Emprunt' },
  { id: 'digital', label: 'Numérique' },
  { id: 'paper', label: 'Papier' },
] as const

export const locationAvailabilityOptions = [
  { id: 'all', label: 'Toutes disponibilités' },
  { id: 'available', label: 'Disponible' },
  { id: 'soon', label: 'Bientôt disponible' },
] as const

export const locationDurationOptions = [
  { id: 'all', label: 'Toutes durées' },
  { id: '7', label: '7 jours' },
  { id: '14', label: '14 jours' },
  { id: '30', label: '30 jours' },
] as const

export const locationSteps: LocationStep[] = [
  {
    id: 'find',
    title: 'Trouvez',
    description: 'Recherchez le livre qui vous intéresse.',
    icon: Search,
  },
  {
    id: 'choose',
    title: 'Choisissez',
    description: 'Sélectionnez le format et la durée souhaitée.',
    icon: CalendarDays,
  },
  {
    id: 'reserve',
    title: 'Réservez',
    description: 'Payez en toute sécurité et validez votre demande.',
    icon: CreditCard,
  },
  {
    id: 'enjoy',
    title: 'Profitez',
    description: 'Commencez votre lecture ou récupérez votre livre.',
    icon: BookOpen,
  },
]

export const locationBooks: LocationBook[] = [
  {
    id: '1',
    title: 'Les Contes de la Sagesse',
    author: 'Amina Diallo',
    cover: parolesAnciens,
    format: 'Numérique',
    available: true,
    priceLabel: '1 500 FCFA',
    durationLabel: '7 jours',
    action: 'Louer',
    description: 'Un recueil de contes africains qui transmettent sagesse, mémoire et valeurs à travers des récits accessibles à tous les âges.',
    genre: 'Contes',
    pages: 248,
    language: 'Français',
    fileFormats: 'PDF / EPUB',
    rating: 4.7,
    reviewCount: 186,
  },
  {
    id: '2',
    title: 'Histoire du Congo',
    author: 'Jean Mwanza',
    cover: histoireCongo,
    format: 'Papier',
    available: true,
    priceLabel: '2 000 FCFA',
    durationLabel: '14 jours',
    action: 'Emprunter',
    description: 'Une synthèse claire de l’histoire du Congo, des royaumes anciens aux enjeux contemporains, pour étudiants et curieux.',
    genre: 'Histoire',
    pages: 312,
    language: 'Français',
    fileFormats: 'Papier',
    rating: 4.6,
    reviewCount: 142,
  },
  {
    id: '3',
    title: 'L’Âme du Baobab',
    author: 'Fatou Ndiaye',
    cover: ameBaoba,
    format: 'Numérique',
    available: true,
    priceLabel: '1 200 FCFA',
    durationLabel: '7 jours',
    action: 'Louer',
    description: 'Un roman poétique autour de la mémoire familiale et de la force symbolique du baobab dans la culture ouest-africaine.',
    genre: 'Roman',
    pages: 276,
    language: 'Français',
    fileFormats: 'PDF / EPUB',
    rating: 4.8,
    reviewCount: 221,
  },
  {
    id: '4',
    title: 'Les Étoiles d’Inongo',
    author: 'Kofi Mensah',
    cover: etoilesInongo,
    format: 'Papier',
    available: true,
    priceLabel: '1 800 FCFA',
    durationLabel: '14 jours',
    action: 'Emprunter',
    description: 'Une odyssée littéraire sur le lac Maï-Ndombe, entre mythes locaux, amitiés d’enfance et quête d’identité.',
    genre: 'Roman',
    pages: 298,
    language: 'Français',
    fileFormats: 'Papier',
    rating: 4.5,
    reviewCount: 98,
  },
  {
    id: '5',
    title: 'Chemins d’Éveil',
    author: 'Sarah Okeke',
    cover: cheminsEveil,
    format: 'Numérique',
    available: true,
    priceLabel: '1 500 FCFA',
    durationLabel: '7 jours',
    action: 'Louer',
    description: 'Un essai inspirant sur l’éducation, la curiosité et les parcours d’apprentissage en Afrique contemporaine.',
    genre: 'Essai',
    pages: 210,
    language: 'Français',
    fileFormats: 'PDF / EPUB',
    rating: 4.7,
    reviewCount: 167,
  },
  {
    id: '6',
    title: 'Royaume du Kongo',
    author: 'Patrick Mbala',
    cover: royaumeKongo,
    format: 'Papier',
    available: true,
    priceLabel: '2 200 FCFA',
    durationLabel: '30 jours',
    action: 'Emprunter',
    description: 'Une immersion documentée dans l’histoire du royaume du Kongo, ses alliances, ses arts et son héritage vivant.',
    genre: 'Histoire',
    pages: 340,
    language: 'Français',
    fileFormats: 'Papier',
    rating: 4.9,
    reviewCount: 204,
  },
  {
    id: '7',
    title: 'Contes & Légendes du Congo',
    author: 'Marie Kabongo',
    cover: contesLegendes,
    format: 'Numérique',
    available: true,
    priceLabel: '1 400 FCFA',
    durationLabel: '7 jours',
    action: 'Louer',
    description: 'Des légendes congolaises revisitées pour la jeunesse et les familles, dans une langue riche et accessible.',
    genre: 'Contes',
    pages: 192,
    language: 'Français',
    fileFormats: 'PDF / EPUB',
    rating: 4.6,
    reviewCount: 131,
  },
  {
    id: '8',
    title: 'Sciences Naturelles',
    author: 'Dr. Isaac Toure',
    cover: sciencesNaturelles,
    format: 'Papier',
    available: true,
    priceLabel: '2 500 FCFA',
    durationLabel: '30 jours',
    action: 'Emprunter',
    description: 'Un manuel illustré pour découvrir la biodiversité africaine, les écosystèmes et les bases des sciences naturelles.',
    genre: 'Sciences',
    pages: 356,
    language: 'Français',
    fileFormats: 'Papier',
    rating: 4.4,
    reviewCount: 89,
  },
]

export function getLocationBookById(id: string) {
  return locationBooks.find(book => book.id === id) ?? null
}

export type RentalDurationId = '24h' | '7d' | '30d' | '90d'

export interface RentalDurationOption {
  id: RentalDurationId
  label: string
  price: number
  days: number
  description: string
  popular?: boolean
}

export const rentalDurationOptions: RentalDurationOption[] = [
  {
    id: '24h',
    label: '24 heures',
    price: 500,
    days: 1,
    description: 'Idéal pour une lecture rapide',
  },
  {
    id: '7d',
    label: '7 jours',
    price: 1500,
    days: 7,
    description: 'Le plus choisi pour un roman',
  },
  {
    id: '30d',
    label: '30 jours',
    price: 4000,
    days: 30,
    description: 'Accès confortable et flexible',
    popular: true,
  },
  {
    id: '90d',
    label: '90 jours',
    price: 9000,
    days: 90,
    description: 'Pour une lecture approfondie',
  },
]

export const rentalIncludedFeatures = [
  {
    id: 'online',
    title: 'Lecture en ligne',
    subtitle: 'Sur tous vos appareils',
  },
  {
    id: 'download',
    title: 'Téléchargement',
    subtitle: 'Hors connexion',
  },
  {
    id: 'sync',
    title: 'Synchronisation',
    subtitle: 'Progression partagée',
  },
  {
    id: 'notes',
    title: 'Notes & surlignages',
    subtitle: 'Annotations illimitées',
  },
  {
    id: 'bookmarks',
    title: 'Marque-pages',
    subtitle: 'Repères personnels',
  },
] as const

export function formatFcfa(amount: number) {
  return `${amount.toLocaleString('fr-FR')} FCFA`
}

export function getRentalExpiryLabel(days: number, from = new Date()) {
  const date = new Date(from)
  date.setDate(date.getDate() + days)
  date.setHours(23, 59, 0, 0)
  const datePart = date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const timePart = date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return `${datePart} à ${timePart}`
}

export function getRentalExpiryShort(days: number, from = new Date()) {
  const date = new Date(from)
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export const locationAccessModes: LocationAccessMode[] = [
  {
    id: 'rent',
    title: 'Location',
    description: 'Louez un livre numérique ou papier pour une durée adaptée à votre rythme de lecture.',
    href: '/partenaires/bibliotheques/location#livres',
    icon: Smartphone,
  },
  {
    id: 'borrow',
    title: 'Emprunt',
    description: 'Empruntez auprès de lecteurs et de bibliothèques partenaires, simplement et en confiance.',
    href: '/partenaires/bibliotheques/location#livres',
    icon: Users,
  },
  {
    id: 'libraries',
    title: 'Bibliothèques',
    description: 'Accédez au catalogue des bibliothèques partenaires proches de chez vous.',
    href: '/partenaires/bibliotheques/commandes',
    icon: Library,
  },
  {
    id: 'institutional',
    title: 'Institutionnel',
    description: 'Offrez un accès mutualisé à vos étudiants, collaborateurs ou usagers.',
    href: '/partenaires/bibliotheques/devis',
    icon: Building2,
  },
]

export const locationStats: LocationStat[] = [
  { value: '120+', label: 'Bibliothèques partenaires' },
  { value: '50 000+', label: 'Livres accessibles' },
  { value: '5+', label: 'Pays couverts' },
]
