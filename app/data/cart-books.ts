import imgAmeBaoba from '~/assets/images/page-livres/ame-baoba.png'
import imgContes from '~/assets/images/page-livres/les-contes-de-la-sagesse.png'
import imgParoles from '~/assets/images/page-livres/paroles-des-anciens.png'
import imgRoyaume from '~/assets/images/page-livres/royaume-kongo.png'
import type { CartRecommendation } from '@/data/cart-page'

export const cartBookRecommendations: CartRecommendation[] = [
  {
    slug: 'le-royaume-kongo',
    title: 'Le Royaume Kongo',
    author: 'Isabelle Ébéné',
    price: 12.99,
    coverImage: imgRoyaume,
    href: '/livres/le-royaume-kongo',
  },
  {
    slug: 'l-ame-du-baobab',
    title: 'L\'Âme du Baobab',
    author: 'Kévin B. Mbenza',
    price: 9.99,
    coverImage: imgAmeBaoba,
    href: '/livres/l-ame-du-baobab',
  },
  {
    slug: 'paroles-des-anciens',
    title: 'Paroles des anciens',
    author: 'Mwana Ndala',
    price: 8.49,
    coverImage: imgParoles,
    href: '/livres/paroles-des-anciens',
  },
  {
    slug: 'les-contes-de-la-sagesse',
    title: 'Les Contes de la Sagesse',
    author: 'Aicha Lufungula',
    price: 16.49,
    coverImage: imgContes,
    href: '/livres/les-contes-de-la-sagesse',
  },
]
