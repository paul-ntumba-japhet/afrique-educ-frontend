import imgAirtel from '~/assets/images/payments/images/airtel-money.png'
import imgMpesa from '~/assets/images/payments/images/mpesa.jpg'
import imgOrange from '~/assets/images/payments/images/orange-money.png'
import imgVisaMastercard from '~/assets/images/payments/visa-mastercard.png'
import imgCoverAlain from '~/assets/images/payments/livres/alain-mabanckou-book.avif'
import imgCoverChimamanda from '~/assets/images/payments/livres/chimamanda-book.webp'
import imgCoverGael from '~/assets/images/payments/livres/gael-faye-book.avif'
import imgCoverHenri from '~/assets/images/payments/livres/henri-lopes-book.avif'
import imgCoverScholastique from '~/assets/images/payments/livres/scholastique-mukasonga-book.png'
import { cartBookRecommendations } from '@/data/cart-books'

export type CartFormat = 'ebook' | 'paper'

export interface CartRecommendation {
  slug: string
  title: string
  author: string
  price: number
  coverImage: string
  href: string
}

export interface CartPaymentMethod {
  id: string
  label: string
  image?: string
  accountHint?: string
}

export const cartShippingFee = 8
export const cartTaxAmount = 5
export const cartPromoCode = 'BIENVENUE10'
export const cartPromoDiscount = 10

export const cartPaymentMethods: CartPaymentMethod[] = [
  {
    id: 'mpesa',
    label: 'M-Pesa',
    image: imgMpesa,
    accountHint: '+243 999 123 456',
  },
  {
    id: 'airtel',
    label: 'Airtel Money',
    image: imgAirtel,
    accountHint: '+243 970 654 321',
  },
  {
    id: 'orange',
    label: 'Orange Money',
    image: imgOrange,
    accountHint: '+243 812 345 678',
  },
  {
    id: 'card',
    label: 'Carte bancaire',
    image: imgVisaMastercard,
    accountHint: 'Visa · Mastercard',
  },
]

export const cartRecommendations: CartRecommendation[] = cartBookRecommendations

export const cartPublisherBySlug: Record<string, string> = {
  'le-royaume-kongo': 'Éditions Mwinda',
  'l-ame-du-baobab': 'Jeunesse Éditions',
  'paroles-des-anciens': 'Mwinda Press',
  'les-contes-de-la-sagesse': 'Jeunesse Éditions',
  'chemins-d-eveil': 'Afrique Littéraire',
  'histoire-du-congo': 'Patrimoine Éditions',
  'sciences-naturelles-6e': 'Scolaire Plus',
  'contes-et-legendes-du-congo': 'Jeunesse Éditions',
  'comprendre-l-economie': 'Savoirs Africains',
  'les-etoiles-d-inongo': 'Nuit Africaine',
  'introduction-a-l-ia': 'Tech Éditions',
}

export const cartCoverSamples = {
  alain: imgCoverAlain,
  chimamanda: imgCoverChimamanda,
  gael: imgCoverGael,
  henri: imgCoverHenri,
  scholastique: imgCoverScholastique,
}

export const cartDemoLines = [
  {
    id: 'racines-futur-ebook',
    slug: 'les-racines-du-futur',
    title: 'Les Racines du Futur',
    author: 'Alain Mabanckou',
    publisher: 'Éditions Continent',
    format: 'ebook' as const,
    unitPrice: 9.99,
    quantity: 1,
    coverImage: imgCoverAlain,
  },
  {
    id: 'memoire-origines-ebook',
    slug: 'la-memoire-des-origines',
    title: 'La Mémoire des Origines',
    author: 'Chimamanda Ngozi Adichie',
    publisher: 'Afrique Littéraire',
    format: 'ebook' as const,
    unitPrice: 12.99,
    quantity: 1,
    coverImage: imgCoverChimamanda,
  },
  {
    id: 'contes-sagesse-paper',
    slug: 'les-contes-de-la-sagesse',
    title: 'Les Contes de la Sagesse',
    author: 'Aicha Lufungula',
    publisher: 'Jeunesse Éditions',
    format: 'paper' as const,
    unitPrice: 16.49,
    quantity: 2,
    coverImage: imgCoverScholastique,
  },
  {
    id: 'paroles-anciens-paper',
    slug: 'paroles-des-anciens',
    title: 'Paroles des Anciens',
    author: 'Mwana Ndala',
    publisher: 'Mwinda Press',
    format: 'paper' as const,
    unitPrice: 18.99,
    quantity: 1,
    coverImage: imgCoverHenri,
  },
  {
    id: 'histoire-congo-ebook',
    slug: 'histoire-du-congo',
    title: 'Histoire du Congo',
    author: 'Gael Faye',
    publisher: 'Patrimoine Éditions',
    format: 'ebook' as const,
    unitPrice: 19.99,
    quantity: 1,
    coverImage: imgCoverGael,
  },
]
