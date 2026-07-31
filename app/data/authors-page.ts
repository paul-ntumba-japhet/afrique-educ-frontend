import type { Component } from 'vue'
import {
  Award,
  BadgeCheck,
  BookMarked,
  Bookmark,
  Building2,
  Feather,
  Globe,
  Languages,
  Mic,
  PenLine,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-vue-next'
import auteur1 from '~/assets/images/auteurs/auteur-1-min.jpg'
import auteur2 from '~/assets/images/auteurs/auteur-2-min.jpg'
import auteur3 from '~/assets/images/auteurs/auteur-3-min.jpg'
import auteur4 from '~/assets/images/auteurs/auteur-4-min.jpg'
import auteur5 from '~/assets/images/auteurs/auteur-5-min.jpg'
import auteur6 from '~/assets/images/auteurs/auteur-6-min.jpg'
import auteur7 from '~/assets/images/auteurs/auteur-7-min.jpg'
import auteur8 from '~/assets/images/auteurs/auteur-8-min.jpg'

export interface AuthorsAsideLink {
  id: string
  label: string
  href: string
  icon: Component
}

export interface AuthorsHeroStat {
  id: string
  value: string
  label: string
  icon: Component
}

export const authorsAsidePrimaryLinks: AuthorsAsideLink[] = [
  { id: 'all', label: 'Tous les auteurs', href: '/auteurs', icon: Users },
  { id: 'popular', label: 'Populaires', href: '/auteurs?filtre=populaires', icon: TrendingUp },
  { id: 'verified', label: 'Vérifiés', href: '/auteurs?filtre=verifies', icon: BadgeCheck },
  { id: 'new', label: 'Nouveaux', href: '/auteurs?filtre=nouveaux', icon: Sparkles },
  { id: 'self', label: 'Autodidactes', href: '/auteurs?filtre=autodidactes', icon: PenLine },
  { id: 'publishers', label: 'Maisons d\'édition', href: '/maisons-edition', icon: Building2 },
  { id: 'awards', label: 'Lauréats', href: '/auteurs?filtre=laureats', icon: Award },
  { id: 'follow', label: 'À suivre', href: '/auteurs?filtre=a-suivre', icon: Bookmark },
]

export const authorsAsideTaxonomyLinks: AuthorsAsideLink[] = [
  { id: 'country', label: 'Par pays', href: '/auteurs?vue=pays', icon: Globe },
  { id: 'language', label: 'Par langue', href: '/auteurs?vue=langue', icon: Languages },
  { id: 'genre', label: 'Par genre', href: '/auteurs?vue=genre', icon: BookMarked },
]

export const authorsAsideActionLinks: AuthorsAsideLink[] = [
  { id: 'interviews', label: 'Interviews', href: '/auteurs/portraits', icon: Mic },
  { id: 'become', label: 'Devenir auteur', href: '/publier', icon: Feather },
]

export const authorsAsideQuote = {
  text: 'Les livres sont les fenêtres par lesquelles l\'âme s\'évade.',
  author: 'Ahmadou Kourouma',
} as const

export const authorsHeroStats: AuthorsHeroStat[] = [
  { id: 'authors', value: '12 500+', label: 'Auteurs', icon: Users },
  { id: 'countries', value: '84', label: 'Pays', icon: Globe },
  { id: 'books', value: '86 000+', label: 'Livres', icon: BookMarked },
  { id: 'satisfaction', value: '4,9/5', label: 'Satisfaction lecteurs', icon: Star },
]

export const authorsSearchCountries = [
  { value: '', label: 'Pays' },
  { value: 'cd', label: 'RDC' },
  { value: 'sn', label: 'Sénégal' },
  { value: 'ci', label: 'Côte d’Ivoire' },
  { value: 'cm', label: 'Cameroun' },
  { value: 'ng', label: 'Nigeria' },
  { value: 'za', label: 'Afrique du Sud' },
] as const

export const authorsSearchLanguages = [
  { value: '', label: 'Langue' },
  { value: 'fr', label: 'Français' },
  { value: 'en', label: 'Anglais' },
  { value: 'lingala', label: 'Lingala' },
  { value: 'swahili', label: 'Swahili' },
  { value: 'kikongo', label: 'Kikongo' },
  { value: 'tshiluba', label: 'Tshiluba' },
] as const

export const authorsSearchGenres = [
  { value: '', label: 'Genre littéraire' },
  { value: 'roman', label: 'Roman' },
  { value: 'poesie', label: 'Poésie' },
  { value: 'essai', label: 'Essai' },
  { value: 'theatre', label: 'Théâtre' },
  { value: 'jeunesse', label: 'Jeunesse' },
] as const

export const authorsSearchPublishers = [
  { value: '', label: 'Maison d\'édition' },
  { value: 'independant', label: 'Indépendant' },
  { value: 'africaine', label: 'Maison africaine' },
  { value: 'internationale', label: 'Internationale' },
] as const

export const authorsSearchIndependence = [
  { value: '', label: 'Indépendant' },
  { value: 'oui', label: 'Oui' },
  { value: 'non', label: 'Non' },
] as const

export const authorsSearchSortOptions = [
  { value: 'popularite', label: 'Popularité' },
  { value: 'nouveautes', label: 'Nouveautés' },
  { value: 'nom', label: 'Nom A–Z' },
  { value: 'livres', label: 'Nombre de livres' },
] as const

export type AuthorsQuickFilterId = 'verified' | 'popular' | 'new'

export const authorsQuickFilters: {
  id: AuthorsQuickFilterId
  label: string
  icon: Component
}[] = [
  { id: 'verified', label: 'Vérifié', icon: BadgeCheck },
  { id: 'popular', label: 'Auteur populaire', icon: Star },
  { id: 'new', label: 'Nouvel auteur', icon: Sparkles },
]

export type AuthorsDiscoverBadge = 'verified' | 'popular'

export interface AuthorsDiscoverAuthor {
  id: string
  name: string
  slug: string
  avatar: string
  flag: string
  country: string
  role: string
  badge: AuthorsDiscoverBadge
  books: string
  readers: string
  followers: string
  rating: string
  reviews: string
  quote: string
}

export const authorsDiscoverList: AuthorsDiscoverAuthor[] = [
  {
    id: '1',
    name: 'Maïsa Michée Makengo',
    slug: 'maisa-michee-makengo',
    avatar: auteur1,
    flag: '🇨🇩',
    country: 'RDC',
    role: 'Romancier • Historien',
    badge: 'verified',
    books: '12',
    readers: '235K',
    followers: '18K',
    rating: '4.9/5',
    reviews: '2.2K',
    quote: 'Écrire, c\'est lutter contre l\'oubli.',
  },
  {
    id: '2',
    name: 'Fatou Diome',
    slug: 'fatou-diome',
    avatar: auteur2,
    flag: '🇸🇳',
    country: 'Sénégal',
    role: 'Romancière',
    badge: 'popular',
    books: '8',
    readers: '180K',
    followers: '12K',
    rating: '4.8/5',
    reviews: '1.8K',
    quote: 'La liberté se trouve dans les mots.',
  },
  {
    id: '3',
    name: 'Alain Mabanckou',
    slug: 'alain-mabanckou',
    avatar: auteur3,
    flag: '🇨🇬',
    country: 'Congo',
    role: 'Romancier • Poète',
    badge: 'verified',
    books: '15',
    readers: '210K',
    followers: '15K',
    rating: '4.7/5',
    reviews: '3.1K',
    quote: 'L\'Afrique s\'écrit au présent.',
  },
  {
    id: '4',
    name: 'Chimamanda Ngozi Adichie',
    slug: 'chimamanda-ngozi-adichie',
    avatar: auteur4,
    flag: '🇳🇬',
    country: 'Nigeria',
    role: 'Romancière • Essayiste',
    badge: 'popular',
    books: '10',
    readers: '320K',
    followers: '25K',
    rating: '4.9/5',
    reviews: '4.5K',
    quote: 'Nos histoires valent d\'être racontées.',
  },
  {
    id: '5',
    name: 'Léonora Miano',
    slug: 'leonora-miano',
    avatar: auteur5,
    flag: '🇨🇲',
    country: 'Cameroun',
    role: 'Romancière',
    badge: 'verified',
    books: '9',
    readers: '95K',
    followers: '8K',
    rating: '4.6/5',
    reviews: '920',
    quote: 'La mémoire est un territoire à conquérir.',
  },
  {
    id: '6',
    name: 'Boubacar Boris Diop',
    slug: 'boubacar-boris-diop',
    avatar: auteur6,
    flag: '🇸🇳',
    country: 'Sénégal',
    role: 'Romancier • Journaliste',
    badge: 'popular',
    books: '14',
    readers: '140K',
    followers: '11K',
    rating: '4.7/5',
    reviews: '1.4K',
    quote: 'Écrire pour que le silence cède.',
  },
  {
    id: '7',
    name: 'Scholastique Mukasonga',
    slug: 'scholastique-mukasonga',
    avatar: auteur7,
    flag: '🇷🇼',
    country: 'Rwanda',
    role: 'Romancière • Témoin',
    badge: 'verified',
    books: '7',
    readers: '88K',
    followers: '7K',
    rating: '4.8/5',
    reviews: '1.1K',
    quote: 'Se souvenir, c\'est déjà résister.',
  },
  {
    id: '8',
    name: 'Ngũgĩ wa Thiong\'o',
    slug: 'ngugi-wa-thiongo',
    avatar: auteur8,
    flag: '🇰🇪',
    country: 'Kenya',
    role: 'Romancier • Dramaturge',
    badge: 'popular',
    books: '20',
    readers: '410K',
    followers: '32K',
    rating: '4.9/5',
    reviews: '5.2K',
    quote: 'Décoloniser l\'esprit par la langue.',
  },
]

export interface AuthorsRankingItem {
  rank: number
  name: string
  slug: string
  avatar: string
  variation: number
  reads: string
  books: string
}

export const authorsMostReadList: AuthorsRankingItem[] = [
  {
    rank: 1,
    name: 'Chimamanda Ngozi Adichie',
    slug: 'chimamanda-ngozi-adichie',
    avatar: auteur4,
    variation: 0,
    reads: '250 000',
    books: '10',
  },
  {
    rank: 2,
    name: 'Maïsa Michée Makengo',
    slug: 'maisa-michee-makengo',
    avatar: auteur1,
    variation: 3,
    reads: '198 400',
    books: '12',
  },
  {
    rank: 3,
    name: 'Alain Mabanckou',
    slug: 'alain-mabanckou',
    avatar: auteur3,
    variation: -1,
    reads: '176 200',
    books: '15',
  },
  {
    rank: 4,
    name: 'Fatou Diome',
    slug: 'fatou-diome',
    avatar: auteur2,
    variation: 2,
    reads: '152 800',
    books: '8',
  },
  {
    rank: 5,
    name: 'Ngũgĩ wa Thiong\'o',
    slug: 'ngugi-wa-thiongo',
    avatar: auteur8,
    variation: -2,
    reads: '141 050',
    books: '20',
  },
]

export interface AuthorsCountryItem {
  id: string
  name: string
  flag: string
  authorsCount: string
  active?: boolean
}

export const authorsTopCountries: AuthorsCountryItem[] = [
  { id: 'cd', name: 'RDC', flag: '🇨🇩', authorsCount: '1 248', active: true },
  { id: 'cm', name: 'Cameroun', flag: '🇨🇲', authorsCount: '886' },
  { id: 'ci', name: 'Côte d\'Ivoire', flag: '🇨🇮', authorsCount: '842' },
  { id: 'sn', name: 'Sénégal', flag: '🇸🇳', authorsCount: '766' },
  { id: 'ml', name: 'Mali', flag: '🇲🇱', authorsCount: '642' },
  { id: 'tn', name: 'Tunisie', flag: '🇹🇳', authorsCount: '513' },
  { id: 'fr', name: 'France', flag: '🇫🇷', authorsCount: '498' },
  { id: 'ca', name: 'Canada', flag: '🇨🇦', authorsCount: '376' },
]

export interface AuthorsFaqItem {
  id: string
  question: string
  answer: string
}

export const authorsFaqItems: AuthorsFaqItem[] = [
  {
    id: 'become',
    question: 'Comment devenir auteur sur Afric-Educ ?',
    answer:
      'Créez votre compte, puis complétez votre espace auteur depuis la page Publier. Vous pourrez renseigner votre profil, importer votre manuscrit et soumettre votre livre en quelques étapes.',
  },
  {
    id: 'cost',
    question: 'Combien coûte la publication d\'un livre ?',
    answer:
      'La publication de votre premier livre numérique peut être gratuite. Des formules payantes débloquent des outils avancés (promotion, formats supplémentaires, accompagnement éditorial).',
  },
  {
    id: 'free',
    question: 'Puis-je publier gratuitement sur Afric-Educ ?',
    answer:
      'Oui. La formule d\'entrée permet de publier gratuitement votre premier livre et d\'accéder au tableau de bord avec les statistiques essentielles.',
  },
  {
    id: 'sell',
    question: 'Comment vendre mon livre sur la plateforme ?',
    answer:
      'Une fois votre livre validé, il est listé dans le catalogue Afric-Educ. Les lecteurs peuvent l\'acheter ou le lire selon le format choisi ; vos ventes apparaissent dans votre espace auteur.',
  },
  {
    id: 'revenue',
    question: 'Comment sont calculés les revenus ?',
    answer:
      'Les revenus correspondent au prix de vente moins la commission plateforme. Le taux de reversement dépend de votre formule, jusqu\'à 85 % pour les auteurs Pro, avec un versement mensuel.',
  },
  {
    id: 'country',
    question: 'Afric-Educ est-il disponible dans mon pays ?',
    answer:
      'Afric-Educ est conçu pour l\'Afrique et la diaspora. La lecture et la publication sont disponibles dans de nombreux pays ; les options de paiement peuvent varier selon la région.',
  },
]
