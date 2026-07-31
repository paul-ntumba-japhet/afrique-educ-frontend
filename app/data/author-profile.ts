import type { Component } from 'vue'
import {
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Languages,
  Link2,
  MapPin,
  MessageSquare,
  Mic,
  Newspaper,
  Play,
  Star,
  Users,
  Video,
} from 'lucide-vue-next'
import auteur1 from '~/assets/images/auteurs/auteur-1-min.jpg'
import auteur4 from '~/assets/images/auteurs/auteur-4-min.jpg'
import auteur6 from '~/assets/images/auteurs/auteur-6-min.jpg'
import auteur9 from '~/assets/images/auteurs/auteur-9-min.jpg'
import cameraImage from '~/assets/images/miche/camera.jpeg'
import portraitHero from '~/assets/images/miche/michee_2.jpeg'
import portraitAbout from '~/assets/images/miche/michee_6.jpeg'
import interviewImage from '~/assets/images/miche/michee_3.jpeg'
import podcastImage from '~/assets/images/miche/michee_8.jpeg'
import coverAmeBaoba from '~/assets/images/slider/ame-baoba-min.png'
import coverChemins from '~/assets/images/slider/chemins-eveil-min.png'
import coverEconomie from '~/assets/images/slider/comprendre-economie-min.png'
import coverContes from '~/assets/images/slider/contes-legendes-du-congo-min.png'
import coverEtoiles from '~/assets/images/slider/etoiles-inongo-min.png'
import coverSagesse from '~/assets/images/slider/les-contes-de-la-sagesse-min.png'
import coverIa from '~/assets/images/slider/ia-min.png'
import coverParoles from '~/assets/images/slider/paroles-des-anciens-min.png'
import coverRoyaume from '~/assets/images/slider/royaume-kongo-min.png'

export interface AuthorProfileNavLink {
  id: string
  label: string
  href: string
  icon: Component
}

export interface AuthorProfileFact {
  id: string
  label: string
  value: string
  href?: string
  icon: Component
}

export interface AuthorProfileBook {
  id: string
  title: string
  slug: string
  cover: string
  year: string
  rating: string
  reviews: string
  price: string
  genre: 'roman' | 'histoire' | 'essai' | 'religion' | 'gratuit'
  badge?: string
}

export const authorProfileSlug = 'maisa-michee-makengo'

export const authorProfileNavLinks: AuthorProfileNavLink[] = [
  { id: 'apercu', label: 'Aperçu', href: '#apercu', icon: Users },
  { id: 'apropos', label: 'À propos', href: '#apropos', icon: BookOpen },
  { id: 'livres', label: 'Livres', href: '#livres', icon: BookOpen },
  { id: 'collections', label: 'Collections', href: '#livres', icon: Newspaper },
  { id: 'articles', label: 'Articles & Interviews', href: '#medias', icon: Newspaper },
  { id: 'evenements', label: 'Événements', href: '#parcours', icon: CalendarDays },
  { id: 'recompenses', label: 'Récompenses', href: '#apercu', icon: Award },
  { id: 'avis', label: 'Avis des lecteurs', href: '#avis', icon: MessageSquare },
  { id: 'videos', label: 'Vidéos', href: '#medias', icon: Video },
  { id: 'podcasts', label: 'Podcasts', href: '#medias', icon: Mic },
  { id: 'communaute', label: 'Communauté', href: '#newsletter', icon: Users },
  { id: 'faq', label: 'Questions fréquentes', href: '/auteurs#auteurs-insights', icon: MessageSquare },
  { id: 'galerie', label: 'Galerie', href: '#apropos', icon: Play },
]

export const authorProfile = {
  slug: authorProfileSlug,
  name: 'Maïsa Michée Makengo',
  roles: 'Romancier — Historien — Conférencier',
  country: 'RDC',
  flagSrc: 'https://flagcdn.com/w40/cd.png',
  verified: true,
  portrait: portraitHero,
  portraitAbout,
  quote: 'L\'histoire n\'est pas ce qui est passé, mais ce qui nous construit et ce que nous léguons.',
  bio: 'Né à Kinshasa, Maïsa Michée Makengo explore dans ses romans et essais les mémoires familiales, les royautés oubliées et les tensions entre tradition et modernité. Traduit en plusieurs langues, il anime des conférences à travers l\'Afrique et la diaspora.',
  heroStats: [
    { id: 'rating', value: '4.9/5', label: '2,3k avis', icon: Star },
    { id: 'readers', value: '235K', label: 'lecteurs', icon: Users },
    { id: 'books', value: '18', label: 'livres publiés', icon: BookOpen },
    { id: 'awards', value: '12', label: 'récompenses', icon: Award },
    { id: 'satisfaction', value: '98%', label: 'satisfaction', icon: Star },
  ],
  metrics: [
    { id: 'books', value: '18', label: 'Livres publiés' },
    { id: 'readers', value: '235K', label: 'Lecteurs' },
    { id: 'downloads', value: '650K', label: 'Téléchargements' },
    { id: 'rating', value: '4.9', label: 'Note moyenne' },
    { id: 'countries', value: '24', label: 'Pays' },
    { id: 'followers', value: '18K', label: 'Abonnés' },
  ],
  facts: [
    { id: 'nation', label: 'Nationalité', value: 'Congolaise (RDC)', icon: MapPin },
    { id: 'langs', label: 'Langues', value: 'Français, Lingala, Anglais', icon: Languages },
    { id: 'job', label: 'Profession', value: 'Romancier & conférencier', icon: BookOpen },
    { id: 'publisher', label: 'Maison d\'édition', value: 'Mwinda Press', icon: Building2 },
    { id: 'first', label: 'Premier livre', value: 'Les Héritiers du Royaume (2012)', icon: CalendarDays },
    { id: 'last', label: 'Dernière publication', value: 'Le Souffle des Origines (2025)', icon: CalendarDays },
    { id: 'web', label: 'Site web', value: 'maisamakengo.com', href: 'https://maisamakengo.com', icon: Link2 },
  ] satisfies AuthorProfileFact[],
  timeline: [
    { year: '2008', label: 'Premier manuscrit' },
    { year: '2012', label: 'Premier livre publié' },
    { year: '2016', label: 'Publication internationale' },
    { year: '2020', label: 'Prix littéraire africain' },
    { year: '2025', label: '18 ouvrages au catalogue' },
  ],
  bookFilters: [
    { id: 'all', label: 'Tous' },
    { id: 'roman', label: 'Romans' },
    { id: 'histoire', label: 'Histoire' },
    { id: 'essai', label: 'Essais' },
    { id: 'religion', label: 'Religion' },
    { id: 'gratuit', label: 'Gratuits' },
  ],
  books: [
    {
      id: '1',
      title: 'Les Héritiers du Royaume',
      slug: 'les-heritiers-du-royaume',
      cover: coverRoyaume,
      year: '2012',
      rating: '4.8',
      reviews: '1.2k',
      price: '4,99 $',
      genre: 'roman',
    },
    {
      id: '2',
      title: 'Contes & Légendes du Congo',
      slug: 'contes-legendes-du-congo',
      cover: coverContes,
      year: '2014',
      rating: '4.7',
      reviews: '980',
      price: 'Gratuit',
      genre: 'gratuit',
    },
    {
      id: '3',
      title: 'Les Étoiles d\'Inongo',
      slug: 'etoiles-inongo',
      cover: coverEtoiles,
      year: '2016',
      rating: '4.9',
      reviews: '2.1k',
      price: '5,49 $',
      genre: 'histoire',
    },
    {
      id: '4',
      title: 'Chemins de l\'Éveil',
      slug: 'chemins-eveil',
      cover: coverChemins,
      year: '2018',
      rating: '4.6',
      reviews: '740',
      price: '3,99 $',
      genre: 'essai',
    },
    {
      id: '5',
      title: 'Paroles des Anciens',
      slug: 'paroles-des-anciens',
      cover: coverParoles,
      year: '2020',
      rating: '4.8',
      reviews: '1.5k',
      price: '4,49 $',
      genre: 'histoire',
    },
    {
      id: '6',
      title: 'L\'Âme du Baobab',
      slug: 'ame-baoba',
      cover: coverAmeBaoba,
      year: '2022',
      rating: '4.9',
      reviews: '1.8k',
      price: '5,99 $',
      genre: 'roman',
    },
    {
      id: '7',
      title: 'Les Contes de la Sagesse',
      slug: 'les-contes-de-la-sagesse',
      cover: coverSagesse,
      year: '2023',
      rating: '4.7',
      reviews: '890',
      price: 'Gratuit',
      genre: 'gratuit',
    },
    {
      id: '8',
      title: 'Comprendre l\'Économie',
      slug: 'comprendre-economie',
      cover: coverEconomie,
      year: '2024',
      rating: '4.5',
      reviews: '620',
      price: '6,49 $',
      genre: 'essai',
    },
    {
      id: '9',
      title: 'Le Souffle des Origines',
      slug: 'le-souffle-des-origines',
      cover: coverRoyaume,
      year: '2025',
      rating: '5.0',
      reviews: '410',
      price: '5,99 $',
      genre: 'roman',
      badge: 'Nouveau',
    },
  ] satisfies AuthorProfileBook[],
  upcomingBook: {
    title: 'L\'Ombre des Royaumes',
    cover: coverIa,
    release: 'Novembre 2027',
    href: '/livres',
  },
  media: {
    interview: {
      title: 'Comment l\'histoire inspire mes romans',
      excerpt: 'Une conversation sur la mémoire, l\'écriture et le devoir de transmission.',
      image: interviewImage,
      href: '#',
      cta: 'Lire l\'article',
    },
    video: {
      title: 'Rencontre avec Maïsa Michée Makengo',
      image: cameraImage,
      href: '#',
      cta: 'Voir la vidéo',
    },
    podcast: {
      title: 'L\'écriture comme héritage',
      image: podcastImage,
      href: '#',
      cta: 'Écouter',
    },
  },
  reviews: [
    {
      id: '1',
      name: 'Amina K.',
      date: 'il y a 3 jours',
      avatar: auteur1,
      rating: 5,
      text: 'Une plume lumineuse. Chaque page renoue avec nos racines sans jamais tomber dans la nostalgie facile.',
    },
    {
      id: '2',
      name: 'Jean-Paul M.',
      date: 'il y a 1 semaine',
      avatar: auteur4,
      rating: 5,
      text: 'Les Héritiers du Royaume m\'a tenu en haleine. Une histoire africaine moderne, exigeante et accessible.',
    },
    {
      id: '3',
      name: 'Sarah L.',
      date: 'il y a 2 semaines',
      avatar: auteur6,
      rating: 5,
      text: 'Des personnages vivants, une documentation solide. Je recommande à tous les amoureux de littérature.',
    },
    {
      id: '4',
      name: 'Didier T.',
      date: 'il y a 1 mois',
      avatar: auteur9,
      rating: 4,
      text: 'Une voix essentielle pour la jeunesse congolaise. J\'attends déjà le prochain ouvrage avec impatience.',
    },
  ],
} as const

export function getAuthorProfile(slug: string) {
  if (slug === authorProfile.slug)
    return authorProfile
  return null
}
