import imgHeroBg from '~/assets/images/page-livres/hero.png'
import imgRoyaumeKongo from '~/assets/images/page-livres/royaume-kongo.png'
import imgAmeBaoba from '~/assets/images/page-livres/ame-baoba.png'
import imgParolesAnciens from '~/assets/images/page-livres/paroles-des-anciens.png'
import imgContesSagesse from '~/assets/images/page-livres/les-contes-de-la-sagesse.png'
import imgCheminsEveil from '~/assets/images/page-livres/chemins-eveil.png'
import imgHistoireCongo from '~/assets/images/page-livres/histoire-congo.png'
import imgSciencesNaturelles from '~/assets/images/page-livres/sciences-naturelles.png'
import imgContesLegendesKongo from '~/assets/images/page-livres/contes-legendes-du-congo.png'
import imgComprendreEconomie from '~/assets/images/page-livres/comprendre-economie.png'
import imgEtoilesInongo from '~/assets/images/page-livres/etoiles-inongo.png'
import imgIa from '~/assets/images/page-livres/ia.png'

export const bookCoverImages = {
  'royaume-kongo': imgRoyaumeKongo,
  'ame-baoba': imgAmeBaoba,
  'paroles-des-anciens': imgParolesAnciens,
  'les-contes-de-la-sagesse': imgContesSagesse,
  'chemins-eveil': imgCheminsEveil,
  'histoire-congo': imgHistoireCongo,
  'sciences-naturelles': imgSciencesNaturelles,
  'contes-legendes-du-congo': imgContesLegendesKongo,
  'comprendre-economie': imgComprendreEconomie,
  'etoiles-inongo': imgEtoilesInongo,
  'ia': imgIa,
} as const

export type BookCoverSlug = keyof typeof bookCoverImages

export function getBookCover(slug: BookCoverSlug) {
  return bookCoverImages[slug]
}

export interface BookItem {
  id: number
  slug: string
  title: string
  author: string
  category: string
  categorySlug: string
  coverSlug: BookCoverSlug
  cover: string
  rating: number
  reviews: number
  formats: string[]
  price: number | null
  isFree: boolean
  availability: 'available' | 'soon' | 'free'
  badge?: 'NOUVEAU' | 'RARE' | 'GRATUIT'
}

export interface BookFilterOption {
  label: string
  value: string
  count: number
}

export interface QuickFilterChip {
  label: string
  param: 'category' | 'type'
  value: string
}

export interface PopularCollection {
  title: string
  slug: string
  count: number
  href: string
}

export const booksHeroBackground = imgHeroBg

export const sortOptions = [
  { label: 'Pertinence', value: 'relevance' },
  { label: 'Nouveautés', value: 'newest' },
  { label: 'Plus populaires', value: 'popular' },
  { label: 'Prix croissant', value: 'price-asc' },
  { label: 'Prix décroissant', value: 'price-desc' },
  { label: 'Mieux notés', value: 'rating' },
] as const

export type SortValue = typeof sortOptions[number]['value']

export const quickFilterChips: QuickFilterChip[] = [
  { label: 'Patrimoine africain', param: 'category', value: 'patrimoine-africain' },
  { label: 'Romans', param: 'category', value: 'roman' },
  { label: 'Essais', param: 'category', value: 'essai' },
  { label: 'Scolaire', param: 'category', value: 'scolaire' },
  { label: 'Jeunesse', param: 'category', value: 'jeunesse' },
  { label: 'Livres gratuits', param: 'type', value: 'gratuits' },
]

export const categoryFilters: BookFilterOption[] = [
  { label: 'Roman', value: 'roman', count: 38 },
  { label: 'Essai', value: 'essai', count: 24 },
  { label: 'Histoire', value: 'histoire', count: 18 },
  { label: 'Scolaire', value: 'scolaire', count: 15 },
  { label: 'Jeunesse', value: 'jeunesse', count: 12 },
]

export const formatFilters: BookFilterOption[] = [
  { label: 'Papier', value: 'papier', count: 45 },
  { label: 'PDF', value: 'pdf', count: 62 },
  { label: 'EPUB', value: 'epub', count: 56 },
  { label: 'Audio', value: 'audio', count: 18 },
]

export const availabilityFilters: BookFilterOption[] = [
  { label: 'Disponible', value: 'available', count: 110 },
  { label: 'Bientôt disponible', value: 'soon', count: 8 },
  { label: 'Gratuit', value: 'free', count: 15 },
]

export const popularCollections: PopularCollection[] = [
  { title: 'Classiques africains', slug: 'classiques-africains', count: 24, href: '/livres?category=classiques-africains' },
  { title: 'Livres scolaires congolais', slug: 'scolaires-congolais', count: 18, href: '/livres?category=scolaire' },
  { title: 'Nouveautés', slug: 'nouveautes', count: 12, href: '/livres?sort=newest' },
  { title: 'Livres gratuits', slug: 'gratuits', count: 15, href: '/livres?type=gratuits' },
]

export function getBookBySlug(slug: string) {
  return baseBooks.find(book => book.slug === slug)
}

export function getBookDetailPath(book: Pick<BookItem, 'slug'>) {
  return `/livres/${book.slug}`
}

const baseBooks: Omit<BookItem, 'id'>[] = [
  {
    slug: 'le-royaume-kongo',
    title: 'Le Royaume Kongo',
    author: 'Isabelle Ébéné',
    category: 'Patrimoine africain',
    categorySlug: 'patrimoine-africain',
    coverSlug: 'royaume-kongo',
    cover: bookCoverImages['royaume-kongo'],
    rating: 4.8,
    reviews: 124,
    formats: ['PDF', 'EPUB', 'Papier'],
    price: 12.99,
    isFree: false,
    availability: 'available',
    badge: 'NOUVEAU',
  },
  {
    slug: 'l-ame-du-baobab',
    title: 'L\'Âme du Baobab',
    author: 'Kévin B. Mbenza',
    category: 'Roman',
    categorySlug: 'roman',
    coverSlug: 'ame-baoba',
    cover: bookCoverImages['ame-baoba'],
    rating: 4.6,
    reviews: 89,
    formats: ['PDF', 'EPUB'],
    price: 9.99,
    isFree: false,
    availability: 'available',
  },
  {
    slug: 'paroles-des-anciens',
    title: 'Paroles des anciens',
    author: 'Mwana Ndala',
    category: 'Essai',
    categorySlug: 'essai',
    coverSlug: 'paroles-des-anciens',
    cover: bookCoverImages['paroles-des-anciens'],
    rating: 4.7,
    reviews: 56,
    formats: ['PDF', 'Audio'],
    price: 8.49,
    isFree: false,
    availability: 'available',
    badge: 'RARE',
  },
  {
    slug: 'les-contes-de-la-sagesse',
    title: 'Les Contes de la Sagesse',
    author: 'Aicha Lufungula',
    category: 'Jeunesse',
    categorySlug: 'jeunesse',
    coverSlug: 'les-contes-de-la-sagesse',
    cover: bookCoverImages['les-contes-de-la-sagesse'],
    rating: 4.9,
    reviews: 201,
    formats: ['PDF', 'EPUB', 'Papier'],
    price: null,
    isFree: true,
    availability: 'free',
    badge: 'GRATUIT',
  },
  {
    slug: 'chemins-d-eveil',
    title: 'Chemins d\'éveil',
    author: 'Joshua Kalonji',
    category: 'Essai',
    categorySlug: 'essai',
    coverSlug: 'chemins-eveil',
    cover: bookCoverImages['chemins-eveil'],
    rating: 4.5,
    reviews: 73,
    formats: ['PDF', 'EPUB'],
    price: 11.49,
    isFree: false,
    availability: 'available',
  },
  {
    slug: 'histoire-du-congo',
    title: 'Histoire du Congo',
    author: 'Pierre M. Kanku',
    category: 'Histoire',
    categorySlug: 'histoire',
    coverSlug: 'histoire-congo',
    cover: bookCoverImages['histoire-congo'],
    rating: 4.8,
    reviews: 142,
    formats: ['PDF', 'Papier'],
    price: 14.99,
    isFree: false,
    availability: 'available',
    badge: 'NOUVEAU',
  },
  {
    slug: 'lumiere-sur-l-interieur',
    title: 'Lumière sur l\'intérieur',
    author: 'Grâce W. Tshibanda',
    category: 'Essai',
    categorySlug: 'essai',
    coverSlug: 'chemins-eveil',
    cover: bookCoverImages['chemins-eveil'],
    rating: 4.4,
    reviews: 48,
    formats: ['PDF', 'EPUB', 'Audio'],
    price: 7.99,
    isFree: false,
    availability: 'available',
  },
  {
    slug: 'sciences-naturelles-5e',
    title: 'Sciences naturelles 5e',
    author: 'Min. de l\'Enseignement',
    category: 'Scolaire',
    categorySlug: 'scolaire',
    coverSlug: 'sciences-naturelles',
    cover: bookCoverImages['sciences-naturelles'],
    rating: 4.3,
    reviews: 312,
    formats: ['PDF', 'Papier'],
    price: 18.99,
    isFree: false,
    availability: 'available',
  },
  {
    slug: 'contes-et-legendes-du-kongo',
    title: 'Contes et légendes du Kongo',
    author: 'Mbuya Kiese',
    category: 'Patrimoine africain',
    categorySlug: 'patrimoine-africain',
    coverSlug: 'contes-legendes-du-congo',
    cover: bookCoverImages['contes-legendes-du-congo'],
    rating: 4.7,
    reviews: 95,
    formats: ['PDF', 'EPUB'],
    price: null,
    isFree: true,
    availability: 'free',
    badge: 'GRATUIT',
  },
  {
    slug: 'comprendre-l-economie',
    title: 'Comprendre l\'économie',
    author: 'Blaise Nsombo',
    category: 'Essai',
    categorySlug: 'essai',
    coverSlug: 'comprendre-economie',
    cover: bookCoverImages['comprendre-economie'],
    rating: 4.2,
    reviews: 67,
    formats: ['PDF', 'Papier'],
    price: 15.49,
    isFree: false,
    availability: 'soon',
  },
  {
    slug: 'les-etoiles-d-inongo',
    title: 'Les Étoiles d\'Inongo',
    author: 'Fidèle Bolomba',
    category: 'Roman',
    categorySlug: 'roman',
    coverSlug: 'etoiles-inongo',
    cover: bookCoverImages['etoiles-inongo'],
    rating: 4.6,
    reviews: 88,
    formats: ['PDF', 'EPUB', 'Audio'],
    price: 10.99,
    isFree: false,
    availability: 'available',
    badge: 'RARE',
  },
  {
    slug: 'l-ia-et-nos-defis-de-demain',
    title: 'L\'IA et nos défis de demain',
    author: 'Claire Montel',
    category: 'Essai',
    categorySlug: 'essai',
    coverSlug: 'ia',
    cover: bookCoverImages.ia,
    rating: 4.5,
    reviews: 54,
    formats: ['PDF', 'EPUB'],
    price: 13.99,
    isFree: false,
    availability: 'available',
    badge: 'NOUVEAU',
  },
]

export function expandBooksCatalog(target = 124): BookItem[] {
  const result: BookItem[] = []
  let id = 1

  while (result.length < target) {
    for (const book of baseBooks) {
      if (result.length >= target)
        break
      result.push({ ...book, id: id++ })
    }
  }

  return result
}

export const mockBooksCatalog = expandBooksCatalog()
