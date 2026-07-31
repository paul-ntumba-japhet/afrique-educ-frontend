import imgHeroCover from '~/assets/images/details-livre/hero.png'
import iconFire from '~/assets/images/details-livre/fire-svgrepo-com.svg'
import iconCup from '~/assets/images/details-livre/cup-svgrepo-com.svg'
import iconPdf from '~/assets/images/details-livre/pdf-file-svgrepo-com.svg'
import imgPageTableMatiere from '~/assets/images/details-livre/page-table-de-matiere.avif'
import imgPageChapitre1 from '~/assets/images/details-livre/page-chapitre-1.avif'
import imgPageChapitre1Suite from '~/assets/images/details-livre/page-chapitre-1-suite.avif'
import imgPageCarte from '~/assets/images/details-livre/page-de-carte.avif'
import imgPageAPropos from '~/assets/images/details-livre/page-a-propos.avif'
import imgApercuTableMatiere from '~/assets/images/details-livre/apercu-pages/page-table-de-matiere.png'
import imgApercuChapitre1 from '~/assets/images/details-livre/apercu-pages/page-chapitre-1.png'
import imgApercuChapitre1Suite from '~/assets/images/details-livre/apercu-pages/page-chapitre-1-suite.png'
import imgApercuCarte from '~/assets/images/details-livre/apercu-pages/page-de-carte.png'
import imgApercuAPropos from '~/assets/images/details-livre/apercu-pages/page-a-propos.png'
import imgAuthorPortrait from '~/assets/images/details-livre/ebene.avif'
import imgRelatedAmeBaoba from '~/assets/images/details-livre/apercu-images/ame-baoba.png'
import imgRelatedParoles from '~/assets/images/details-livre/apercu-images/paroles-des-anciens.png'
import imgRelatedContes from '~/assets/images/details-livre/apercu-images/les-contes-de-la-sagesse.png'
import imgRelatedChemins from '~/assets/images/details-livre/apercu-images/chemins-eveil.png'
import imgRelatedHistoire from '~/assets/images/details-livre/apercu-images/histoire-congo.png'
import imgRelatedLegendes from '~/assets/images/details-livre/apercu-images/contes-legendes-du-congo.png'
import iconEpub from '~/assets/images/details-livre/epub-svgrepo-com.svg'
import iconPdfFormat from '~/assets/images/details-livre/pdf-file-svgrepo-com.svg'
import iconAudio from '~/assets/images/details-livre/audio-svgrepo-com.svg'
import iconBookFormat from '~/assets/images/details-livre/book-svgrepo-com.svg'

export interface BookDetailBreadcrumb {
  label: string
  href?: string
}

export interface BookDetailBadge {
  id: string
  label: string
  icon: string
}

export interface BookDetailSalesHighlight {
  value: string
  label: string
}

export interface BookPreviewPage {
  id: string
  image: string
  largeImage: string
  alt: string
}

export interface BookPreviewPromo {
  title: string
  description: string
  ctaLabel: string
  icon: string
}

export interface BookDetailPreview {
  sectionTitle: string
  pages: BookPreviewPage[]
  promo: BookPreviewPromo
}

export interface BookDetailDescription {
  sectionTitle: string
  paragraphs: string[]
  keyPointsTitle: string
  keyPoints: string[]
}

export type BookBibliographicIcon =
  | 'user'
  | 'building'
  | 'library'
  | 'globe'
  | 'barcode'
  | 'calendar'
  | 'files'
  | 'book'

export interface BookBibliographicItem {
  id: string
  label: string
  value: string
  icon: BookBibliographicIcon
}

export interface BookDetailBibliography {
  sectionTitle: string
  items: BookBibliographicItem[]
}

export interface BookDetailAuthorStat {
  id: string
  value: string
  label: string
}

export type BookAuthorSocialNetwork =
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'youtube'
  | 'pinterest'

export interface BookDetailAuthorSocialLink {
  network: BookAuthorSocialNetwork
  href: string
  label: string
}

export interface BookDetailAuthorProfile {
  sectionTitle: string
  name: string
  slug: string
  verified: boolean
  avatar: string
  description: string
  biography: string
  extendedDescription: string
  stats: BookDetailAuthorStat[]
  profileLabel: string
  followLabel: string
  followingLabel: string
  socialLinks: BookDetailAuthorSocialLink[]
}

export type BookTocItemLevel = 'prologue' | 'part' | 'chapter' | 'epilogue'

export interface BookTocItem {
  id: string
  title: string
  page?: number
  level: BookTocItemLevel
}

export interface BookDetailTableOfContents {
  sectionTitle: string
  items: BookTocItem[]
  viewAllLabel: string
}

export type BookLearningOutcomeIcon =
  | 'landmark'
  | 'globe'
  | 'users'
  | 'scroll'
  | 'map'
  | 'sparkles'

export interface BookLearningOutcome {
  id: string
  title: string
  icon: BookLearningOutcomeIcon
}

export interface BookDetailLearningOutcomes {
  sectionTitle: string
  outcomes: BookLearningOutcome[]
  maxVisibleItems: number
  viewMoreLabel: string
  viewLessLabel: string
}

export interface BookRatingDistribution {
  stars: number
  percentage: number
}

export interface BookDetailReviewsSummary {
  sectionTitle: string
  rating: number
  reviewCount: number
  basedOnLabel: string
  distribution: BookRatingDistribution[]
  viewAllLabel: string
}

export interface BookQuote {
  id: string
  text: string
}

export interface BookDetailQuotes {
  sectionTitle: string
  quotes: BookQuote[]
}

export interface BookDetailInsights {
  learningOutcomes: BookDetailLearningOutcomes
  reviews: BookDetailReviewsSummary
  quotes: BookDetailQuotes
}

export interface BookDetailRelatedBook {
  slug: string
  title: string
  author: string
  cover: string
  rating: number
  reviewCount: number
  price: number | null
  isFree: boolean
}

export interface BookDetailRelatedBooks {
  sectionTitle: string
  viewAllLabel: string
  viewAllHref: string
  books: BookDetailRelatedBook[]
}

export type BookFormatId = 'epub' | 'pdf' | 'audio' | 'paper'

export interface BookDetailFormat {
  id: BookFormatId
  title: string
  description: string
  icon: string
}

export interface BookDetailFormats {
  sectionTitle: string
  formats: BookDetailFormat[]
}

export interface BookDetailPageData {
  slug: string
  title: string
  categoryLabel: string
  breadcrumbs: BookDetailBreadcrumb[]
  author: {
    name: string
    verified: boolean
  }
  rating: number
  reviewCount: number
  excerpt: string
  prices: {
    digital: number
    paper: number
  }
  metadata: {
    pages: number
    language: string
    formats: string
    publishedAt: string
    isbn: string
  }
  badges: BookDetailBadge[]
  salesHighlight: BookDetailSalesHighlight
  coverImage: string
  preview: BookDetailPreview
  description: BookDetailDescription
  bibliography: BookDetailBibliography
  authorProfile: BookDetailAuthorProfile
  tableOfContents: BookDetailTableOfContents
  insights: BookDetailInsights
  relatedBooks: BookDetailRelatedBooks
  formats: BookDetailFormats
}

export const royaumeKongoDetail: BookDetailPageData = {
  slug: 'le-royaume-kongo',
  title: 'Le Royaume Congo',
  categoryLabel: 'Roman historique',
  breadcrumbs: [
    { label: 'Accueil', href: '/' },
    { label: 'Romans', href: '/livres?category=roman' },
    { label: 'Roman historique', href: '/livres?category=roman' },
    { label: 'Le Royaume Congo' },
  ],
  author: {
    name: 'Isabelle Ébéné',
    verified: true,
  },
  rating: 4.8,
  reviewCount: 1285,
  excerpt: 'Une fresque historique captivante qui plonge le lecteur au cœur des intrigues politiques et culturelles du royaume Kongo, à travers le regard d\'une reine légendaire.',
  prices: {
    digital: 8.99,
    paper: 19.99,
  },
  metadata: {
    pages: 412,
    language: 'Français',
    formats: 'EPUB • PDF',
    publishedAt: '15 mars 2026',
    isbn: '978-2-492345-67-8',
  },
  badges: [
    { id: 'bestseller', label: 'Bestseller', icon: iconFire  },
    { id: 'readers-choice', label: 'Choix des lecteurs', icon: iconCup },
  ],
  salesHighlight: {
    value: '+10 000',
    label: 'exemplaires vendus',
  },
  coverImage: imgHeroCover,
  preview: {
    sectionTitle: 'Découvrez quelques pages',
    pages: [
      {
        id: 'table-matiere',
        image: imgPageTableMatiere,
        largeImage: imgApercuTableMatiere,
        alt: 'Table des matières — Le Royaume Congo',
      },
      {
        id: 'chapitre-1',
        image: imgPageChapitre1,
        largeImage: imgApercuChapitre1,
        alt: 'Chapitre I — Le Royaume Congo',
      },
      {
        id: 'chapitre-1-suite',
        image: imgPageChapitre1Suite,
        largeImage: imgApercuChapitre1Suite,
        alt: 'Chapitre I (suite) — Le Royaume Congo',
      },
      {
        id: 'carte',
        image: imgPageCarte,
        largeImage: imgApercuCarte,
        alt: 'Carte du royaume — Le Royaume Congo',
      },
      {
        id: 'a-propos',
        image: imgPageAPropos,
        largeImage: imgApercuAPropos,
        alt: 'À propos de l\'auteur — Le Royaume Congo',
      },
    ],
    promo: {
      title: 'Téléchargez un extrait gratuit',
      description: 'Plongez dans les premières pages et découvrez l\'univers du royaume Kongo.',
      ctaLabel: 'Lire maintenant',
      icon: iconPdf,
    },
  },
  description: {
    sectionTitle: 'À propos du livre',
    paragraphs: [
      'Le Royaume Congo retrace l\'épopée d\'un empire africain dont l\'influence a marqué l\'histoire de l\'Afrique centrale. À travers le regard d\'une souveraine légendaire, Isabelle Ébéné compose une fresque où se mêlent intrigues de cour, traditions ancestrales et résistance face aux bouleversements du monde.',
      'Roman historique nourri par des années de recherches, l\'ouvrage donne voix aux acteurs oubliés d\'un royaume qui a su unir territoires, cultures et savoirs. Chaque chapitre révèle la complexité d\'une société en mutation, entre diplomatie, spiritualité et quête de liberté.',
      'Une lecture immersive pour tous ceux qui souhaitent découvrir une Afrique puissante, inventrice et profondément humaine, loin des clichés et des récits simplifiés.',
    ],
    keyPointsTitle: 'Points clés',
    keyPoints: [
      'Histoire du Royaume Kongo',
      'Personnages inspirés de faits réels',
      'Recherche historique approfondie',
      'Accessible aux étudiants',
      'Langage fluide et immersif',
    ],
  },
  bibliography: {
    sectionTitle: 'Informations bibliographiques',
    items: [
      { id: 'author', label: 'Auteur', value: 'Isabelle Ébéné', icon: 'user' },
      { id: 'publisher', label: 'Éditeur', value: 'Éditions Africaines', icon: 'building' },
      { id: 'collection', label: 'Collection', value: 'Patrimoine africain', icon: 'library' },
      { id: 'language', label: 'Langue', value: 'Français', icon: 'globe' },
      { id: 'isbn', label: 'ISBN', value: '978-2-892345-67-8', icon: 'barcode' },
      { id: 'published', label: 'Date de publication', value: '15 mars 2026', icon: 'calendar' },
      { id: 'pages', label: 'Nombre de pages', value: '412', icon: 'files' },
      { id: 'formats', label: 'Formats', value: 'EPUB, PDF, Papier', icon: 'book' },
    ],
  },
  authorProfile: {
    sectionTitle: 'À propos de l\'auteur',
    name: 'Isabelle Ébéné',
    slug: 'isabelle-ebene',
    verified: true,
    avatar: imgAuthorPortrait,
    description: 'Écrivaine et historienne, Isabelle Ébéné se passionne pour la valorisation de l\'histoire africaine.',
    biography: 'Ses romans mettent en lumière la richesse des civilisations africaines et inspirent des milliers de lecteurs à travers le monde.',
    extendedDescription: 'Spécialiste du Royaume Kongo, elle mène des recherches approfondies sur les dynasties, les traditions de cour et les échanges culturels de l\'Afrique centrale. Ses ouvrages sont étudiés dans les écoles et universités d\'Afrique francophone.',
    stats: [
      { id: 'books', value: '7', label: 'Livres publiés' },
      { id: 'readers', value: '25K+', label: 'Lecteurs' },
      { id: 'reviews', value: '4.9K+', label: 'Avis' },
    ],
    profileLabel: 'Voir le profil',
    followLabel: 'Suivre l\'auteur',
    followingLabel: 'Auteur suivi',
    socialLinks: [
      { network: 'facebook', href: 'https://facebook.com', label: 'Facebook' },
      { network: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
      { network: 'x', href: 'https://x.com', label: 'X' },
      { network: 'youtube', href: 'https://youtube.com', label: 'YouTube' },
      { network: 'pinterest', href: 'https://pinterest.com', label: 'Pinterest' },
    ],
  },
  tableOfContents: {
    sectionTitle: 'Table des matières',
    viewAllLabel: 'Voir toute la table des matières',
    items: [
      { id: 'prologue', title: 'Prologue', page: 1, level: 'prologue' },
      { id: 'part-1', title: 'Partie I — Les Origines', page: 8, level: 'part' },
      { id: 'ch-1', title: '1. La Terre et le Peuple', page: 11, level: 'chapter' },
      { id: 'ch-2', title: '2. Les Premiers Rois', page: 33, level: 'chapter' },
      { id: 'ch-3', title: '3. Alliances et Héritages', page: 62, level: 'chapter' },
      { id: 'part-2', title: 'Partie II — L\'Âge d\'Or', page: 85, level: 'part' },
      { id: 'ch-4', title: '4. L\'Expansion du Royaume', page: 87, level: 'chapter' },
      { id: 'ch-5', title: '5. Foi et Diplomatie', page: 113, level: 'chapter' },
      { id: 'ch-6', title: '6. Crises au Palais', page: 143, level: 'chapter' },
      { id: 'part-3', title: 'Partie III — Épreuves et Résilience', page: 179, level: 'part' },
      { id: 'ch-7', title: '7. Les Derniers Souverains', page: 181, level: 'chapter' },
      { id: 'ch-8', title: '8. Résistance et Mémoire', page: 205, level: 'chapter' },
      { id: 'ch-9', title: '9. L\'Héritage du Fleuve', page: 228, level: 'chapter' },
      { id: 'epilogue', title: 'Épilogue', page: 251, level: 'epilogue' },
      { id: 'annexes', title: 'Annexes', page: 268, level: 'chapter' },
    ],
  },
  insights: {
    learningOutcomes: {
      sectionTitle: 'Ce que vous apprendrez',
      maxVisibleItems: 3,
      viewMoreLabel: 'Voir plus',
      viewLessLabel: 'Voir moins',
      outcomes: [
        {
          id: 'politics',
          title: 'Comprendre la structure politique du Royaume Kongo',
          icon: 'landmark',
        },
        {
          id: 'trade',
          title: 'Découvrir les échanges commerciaux africains',
          icon: 'globe',
        },
        {
          id: 'figures',
          title: 'Identifier les grandes figures historiques',
          icon: 'users',
        },
        {
          id: 'traditions',
          title: 'Explorer les traditions et spiritualités de cour',
          icon: 'scroll',
        },
        {
          id: 'geography',
          title: 'Situer les territoires et routes du royaume',
          icon: 'map',
        },
        {
          id: 'heritage',
          title: 'Apprécier l\'héritage culturel africain',
          icon: 'sparkles',
        },
      ],
    },
    reviews: {
      sectionTitle: 'Avis des lecteurs',
      rating: 4.8,
      reviewCount: 1285,
      basedOnLabel: 'Basé sur 1285 avis',
      distribution: [
        { stars: 5, percentage: 84 },
        { stars: 4, percentage: 10 },
        { stars: 3, percentage: 4 },
        { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
      ],
      viewAllLabel: 'Voir tous les avis',
    },
    quotes: {
      sectionTitle: 'Citations marquantes',
      quotes: [
        {
          id: 'quote-1',
          text: 'Un royaume n\'est pas bâti sur la force mais sur la mémoire de son peuple.',
        },
        {
          id: 'quote-2',
          text: 'La sagesse des ancêtres éclaire les pas de ceux qui gouvernent avec justice.',
        },
        {
          id: 'quote-3',
          text: 'Chaque rivière porte en elle l\'histoire de ceux qui l\'ont traversée.',
        },
        {
          id: 'quote-4',
          text: 'L\'Afrique se souvient, et c\'est dans cette mémoire que naît la liberté.',
        },
        {
          id: 'quote-5',
          text: 'Le pouvoir véritable appartient à ceux qui savent écouter leur peuple.',
        },
      ],
    },
  },
  relatedBooks: {
    sectionTitle: 'Vous pourriez aussi aimer',
    viewAllLabel: 'Voir tout',
    viewAllHref: '/livres?category=patrimoine-africain',
    books: [
      {
        slug: 'l-ame-du-baobab',
        title: 'L\'Âme du Baobab',
        author: 'Kévin B. Mbenza',
        cover: imgRelatedAmeBaoba,
        rating: 4.6,
        reviewCount: 89,
        price: 9.99,
        isFree: false,
      },
      {
        slug: 'paroles-des-anciens',
        title: 'Paroles des anciens',
        author: 'Mwana Ndala',
        cover: imgRelatedParoles,
        rating: 4.7,
        reviewCount: 56,
        price: 8.49,
        isFree: false,
      },
      {
        slug: 'les-contes-de-la-sagesse',
        title: 'Les Contes de la Sagesse',
        author: 'Aicha Lufungula',
        cover: imgRelatedContes,
        rating: 4.9,
        reviewCount: 201,
        price: null,
        isFree: true,
      },
      {
        slug: 'chemins-d-eveil',
        title: 'Chemins d\'éveil',
        author: 'Joshua Kalonji',
        cover: imgRelatedChemins,
        rating: 4.5,
        reviewCount: 73,
        price: 11.49,
        isFree: false,
      },
      {
        slug: 'histoire-du-congo',
        title: 'Histoire du Congo',
        author: 'Pierre M. Kanku',
        cover: imgRelatedHistoire,
        rating: 4.8,
        reviewCount: 142,
        price: 14.99,
        isFree: false,
      },
      {
        slug: 'contes-et-legendes-du-kongo',
        title: 'Contes et légendes du Kongo',
        author: 'Mbuya Kiese',
        cover: imgRelatedLegendes,
        rating: 4.7,
        reviewCount: 95,
        price: null,
        isFree: true,
      },
    ],
  },
  formats: {
    sectionTitle: 'Formats disponibles',
    formats: [
      {
        id: 'epub',
        title: 'EPUB',
        description: 'Lecture adaptative sur tous appareils.',
        icon: iconEpub,
      },
      {
        id: 'pdf',
        title: 'PDF',
        description: 'Mise en page fidèle à l\'édition originale.',
        icon: iconPdfFormat,
      },
      {
        id: 'audio',
        title: 'Audio',
        description: 'Écoutez où que vous soyez.',
        icon: iconAudio,
      },
      {
        id: 'paper',
        title: 'Papier',
        description: 'Livre imprimé livré chez vous.',
        icon: iconBookFormat,
      },
    ],
  },
}

const bookDetailPages: Record<string, BookDetailPageData> = {
  [royaumeKongoDetail.slug]: royaumeKongoDetail,
}

export function getBookDetailPage(slug: string) {
  return bookDetailPages[slug] ?? null
}
