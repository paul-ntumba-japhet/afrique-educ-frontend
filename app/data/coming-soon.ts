export const COMING_SOON_LAUNCH_AT = new Date('2026-09-04T00:00:00')

export const comingSoonCopy = {
  badge: 'Préparation en cours',
  titleBefore: 'Le futur du livre en',
  titleAccent: 'Afrique',
  titleAfter: 'commence bientôt.',
  lead:
    'Publiez, diffusez, lisez et imprimez vos livres. Une plateforme complète, conçue pour les auteurs, les éditeurs et les lecteurs d’Afrique francophone.',
  launchLabel: 'Lancement officiel',
  launchDate: '4 septembre 2026',
  cta: 'Recevoir l’accès anticipé',
  waitlistCount: 4126,
  waitlistLabel: '4 126 personnes attendent le lancement',
  quote: '« Parce que chaque livre mérite de trouver ses lecteurs. »',
} as const

export const comingSoonFeatures = [
  { id: 'publication', label: 'Publication', icon: 'book-open' },
  { id: 'lecture', label: 'Lecture', icon: 'book-marked' },
  { id: 'pod', label: 'Impression à la demande', icon: 'printer' },
  { id: 'ia', label: 'IA', icon: 'sparkles' },
  { id: 'partenaires', label: 'Partenaires', icon: 'handshake' },
] as const

export const comingSoonAudiences = [
  { id: 'editeurs', label: "Maisons d'édition", icon: 'building-2' },
  { id: 'universites', label: 'Universités', icon: 'graduation-cap' },
  { id: 'bibliotheques', label: 'Bibliothèques', icon: 'landmark' },
  { id: 'associations', label: 'Associations', icon: 'users' },
  { id: 'auteurs', label: 'Auteurs', icon: 'pen-tool' },
] as const

export type ComingSoonUnit = 'days' | 'hours' | 'minutes' | 'seconds'

export const comingSoonUnits: { key: ComingSoonUnit, label: string }[] = [
  { key: 'days', label: 'Jours' },
  { key: 'hours', label: 'Heures' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Secondes' },
]
