export interface PublishHeroStat {
  id: string
  value: string
  label: string
}

export interface PublishHeroContent {
  badge: string
  titleBefore: string
  titleHighlight: string
  subtitle: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  stats: PublishHeroStat[]
}

export const publishHeroContent: PublishHeroContent = {
  badge: 'PUBLIEZ VOTRE LIVRE',
  titleBefore: 'Publiez votre livre et touchez des lecteurs partout en',
  titleHighlight: 'Afrique et dans le monde',
  subtitle:
    'Transformez votre manuscrit en livre numérique ou imprimé. Bénéficiez d’outils professionnels, d’une assistance IA et d’un réseau de diffusion conçu pour les auteurs africains.',
  primaryCta: {
    label: 'Publier mon livre',
    href: '/publier/manuscrit',
  },
  secondaryCta: {
    label: 'Découvrir le processus',
    href: '#etapes',
  },
  stats: [
    { id: 'authors', value: '10K+', label: 'Auteurs' },
    { id: 'books', value: '50K+', label: 'Livres publiés' },
    { id: 'readers', value: '1M+', label: 'Lecteurs' },
    { id: 'countries', value: '150+', label: 'Pays' },
  ],
}

export type PublishBenefitIcon =
  | 'file-check'
  | 'globe'
  | 'layers'
  | 'coins'
  | 'shield'
  | 'sparkles'

export type PublishBenefitTone =
  | 'blue'
  | 'green'
  | 'orange'
  | 'violet'
  | 'cyan'
  | 'amber'

export interface PublishBenefit {
  id: string
  title: string
  description: string
  icon: PublishBenefitIcon
  tone: PublishBenefitTone
}

export const publishBenefits: PublishBenefit[] = [
    {
      id: 'publication',
      title: 'Publication simplifiée',
      description: 'Un processus guidé étape par étape.',
      icon: 'file-check',
      tone: 'blue',
    },
    {
      id: 'diffusion',
      title: 'Diffusion étendue',
      description: 'Présence en Afrique et dans le monde.',
      icon: 'globe',
      tone: 'green',
    },
    {
      id: 'formats',
      title: 'Formats multiples',
      description: 'EPUB, PDF, imprimé et audio bientôt.',
      icon: 'layers',
      tone: 'orange',
    },
    {
      id: 'revenus',
      title: 'Revenus transparents',
      description: 'Suivez vos ventes et vos revenus.',
      icon: 'coins',
      tone: 'violet',
    },
    {
      id: 'protection',
      title: 'Protection des œuvres',
      description: 'ISBN, droits d’auteur et sécurité.',
      icon: 'shield',
      tone: 'cyan',
    },
    {
      id: 'ia',
      title: 'Outils IA intégrés',
      description: 'Correction, résumé, traduction et plus.',
      icon: 'sparkles',
      tone: 'amber',
    },
]

export type PublishStepIcon =
  | 'upload'
  | 'edit'
  | 'file-text'
  | 'shield-check'
  | 'cloud-upload'

export type PublishStepTone =
  | 'navy'
  | 'green'
  | 'orange'
  | 'violet'
  | 'cyan'

export interface PublishStep {
  id: string
  number: number
  title: string
  description: string
  details?: string[]
  icon: PublishStepIcon
  tone: PublishStepTone
}

export const publishStepsSection = {
  title: 'Publier un livre en 5 étapes',
  lead: 'Un parcours guidé, de votre manuscrit à la mise en vente.',
  steps: [
    {
      id: 'deposit',
      number: 1,
      title: 'Déposer le manuscrit',
      description: 'Formats acceptés : DOCX, PDF, ODT',
      icon: 'upload',
      tone: 'navy',
    },
    {
      id: 'prepare',
      number: 2,
      title: 'Préparer le livre',
      description: 'Notre plateforme vous aide à :',
      details: [
        'corriger le texte',
        'générer une couverture',
        'structurer la table des matières',
      ],
      icon: 'edit',
      tone: 'green',
    },
    {
      id: 'metadata',
      number: 3,
      title: 'Définir les informations',
      description:
        'Titre, sous-titre, description, catégorie, langue, prix, mots-clés…',
      icon: 'file-text',
      tone: 'orange',
    },
    {
      id: 'validation',
      number: 4,
      title: 'Validation',
      description: 'Contrôle qualité et vérification des métadonnées.',
      icon: 'shield-check',
      tone: 'violet',
    },
    {
      id: 'publish',
      number: 5,
      title: 'Mise en ligne',
      description: 'Le livre devient immédiatement disponible à la vente.',
      icon: 'cloud-upload',
      tone: 'cyan',
    },
  ] satisfies PublishStep[],
}

export const publishAiAssistantSection = {
  title: 'Un assistant IA au service de votre créativité',
  imageAlt:
    'Interface de l’assistant IA Afric-Educ : correction intelligente, résumé automatique, traduction multilingue et génération de couverture.',
}

export type EditorialServiceIcon =
  | 'search'
  | 'pencil'
  | 'layout'
  | 'eye'
  | 'barcode'
  | 'printer'

export type EditorialServiceTone =
  | 'blue'
  | 'amber'
  | 'cyan'
  | 'violet'
  | 'green'
  | 'orange'

export interface EditorialService {
  id: string
  title: string
  description: string
  icon: EditorialServiceIcon
  tone: EditorialServiceTone
}

export const publishEditorialServicesSection = {
  title: 'Besoin d’un accompagnement professionnel ?',
  services: [
    {
      id: 'relecture',
      title: 'Relecture éditoriale',
      description: 'Analyse approfondie du manuscrit.',
      icon: 'search',
      tone: 'violet',
    },
    {
      id: 'correction',
      title: 'Correction professionnelle',
      description: 'Correction humaine approfondie.',
      icon: 'pencil',
      tone: 'amber',
    },
    {
      id: 'layout',
      title: 'Mise en page',
      description: 'Version numérique et impression.',
      icon: 'layout',
      tone: 'blue',
    },
    {
      id: 'cover',
      title: 'Création de couverture',
      description: 'Design personnalisé et professionnel.',
      icon: 'eye',
      tone: 'violet',
    },
    {
      id: 'isbn',
      title: 'Attribution ISBN',
      description: 'Obtention d’un identifiant international.',
      icon: 'barcode',
      tone: 'green',
    },
    {
      id: 'print',
      title: 'Impression à la demande',
      description: 'Production uniquement lorsqu’une commande est passée.',
      icon: 'printer',
      tone: 'green',
    },
  ] satisfies EditorialService[],
}

export type PricingPlanCtaVariant = 'outline' | 'primary' | 'navy'

export type PricingPlanTierTone = 'free' | 'premium' | 'pro'

export interface PricingPlan {
  id: string
  name: string
  description: string
  tier: string
  tierTone: PricingPlanTierTone
  priceMonthly: string
  priceAnnual: string
  compareMonthly?: string
  compareAnnual?: string
  billingNoteMonthly: string
  billingNoteAnnual: string
  features: string[]
  featured?: boolean
  cta: {
    label: string
    href: string
    variant: PricingPlanCtaVariant
  }
}

export const publishPricingSection = {
  title: 'Choisissez votre formule',
  subtitle: 'Des solutions adaptées à chaque auteur',
  billing: {
    monthly: 'Mensuelle',
    annual: 'Annuelle',
    annualHint: 'Économisez 25 % avec l’annuel',
  },
  plans: [
    {
      id: 'starter',
      name: 'Débuter',
      description: 'Idéal pour publier votre premier livre numérique.',
      tier: 'Gratuit',
      tierTone: 'free',
      priceMonthly: '$0',
      priceAnnual: '$0',
      billingNoteMonthly: 'Accès gratuit permanent',
      billingNoteAnnual: 'Accès gratuit permanent',
      features: [
        'Publication numérique',
        'Tableau de bord auteur',
        'Statistiques de base',
        'Support par email',
        'Formats EPUB & PDF',
        'Diffusion sur la plateforme',
      ],
      cta: {
        label: 'Commencer gratuitement',
        href: '/publier/manuscrit',
        variant: 'outline',
      },
    },
    {
      id: 'plus',
      name: 'Auteur Plus',
      description: 'Pour les auteurs qui veulent accélérer leur visibilité.',
      tier: 'Premium',
      tierTone: 'premium',
      priceMonthly: '$17',
      priceAnnual: '$13',
      compareMonthly: '$17',
      compareAnnual: '$17',
      billingNoteMonthly: '/ mois, facturation mensuelle',
      billingNoteAnnual: '/ mois, facturation annuelle',
      featured: true,
      features: [
        'Assistance IA complète',
        'Promotion renforcée',
        'Statistiques avancées',
        'Priorité de validation',
        'Jusqu’à 70% de revenus',
        'Mise en avant catalogue',
      ],
      cta: {
        label: 'Passer Premium',
        href: '/publier/manuscrit?plan=plus',
        variant: 'primary',
      },
    },
    {
      id: 'pro',
      name: 'Auteur Pro',
      description: 'L’accompagnement complet pour une carrière d’auteur.',
      tier: 'Professionnel',
      tierTone: 'pro',
      priceMonthly: '$49',
      priceAnnual: '$37',
      compareMonthly: '$49',
      compareAnnual: '$49',
      billingNoteMonthly: '/ mois, facturation mensuelle',
      billingNoteAnnual: '/ mois, facturation annuelle',
      features: [
        'Accompagnement éditorial',
        'ISBN inclus',
        'Impression à la demande',
        'Support dédié',
        'Jusqu’à 85% de revenus',
        'Diffusion internationale',
      ],
      cta: {
        label: 'Parler à un conseiller',
        href: '/contact',
        variant: 'navy',
      },
    },
  ] satisfies PricingPlan[],
}

export const publishAuthorDashboardSection = {
  title: 'Gardez le contrôle de vos publications',
  imageAlt:
    'Aperçu du tableau de bord auteur Afric-Educ : ventes, téléchargements, revenus et statistiques.',
}

export interface PublishTestimonial {
  id: string
  quote: string
  name: string
  role: string
  location: string
  avatar: string
}

export const publishTestimonialsSection = {
  title: 'Ils ont déjà publié leur livre',
  items: [
    {
      id: 'marc',
      quote:
        '« Grâce à cette plateforme, mon livre est désormais lu dans plusieurs pays africains. »',
      name: 'Marc K.',
      role: 'Auteur',
      location: 'Cameroun',
      avatar: 'marc.webp',
    },
    {
      id: 'aissatou',
      quote:
        '« Les outils IA m’ont permis d’améliorer mon manuscrit en quelques heures seulement. »',
      name: 'Aïssatou D.',
      role: 'Auteure',
      location: 'Sénégal',
      avatar: 'alissatou.webp',
    },
    {
      id: 'jean-paul',
      quote:
        '« J’ai publié mon premier ouvrage sans aucune connaissance technique. »',
      name: 'Jean-Paul L.',
      role: 'Auteur',
      location: 'RD Congo',
      avatar: 'jeanine.webp',
    },
  ] satisfies Omit<PublishTestimonial, 'avatar'>[] & { avatar: string }[],
}

export interface PublishFaqItem {
  id: string
  question: string
  answer: string
}

export const publishFaqSection = {
  title: 'Questions fréquentes',
  items: [
    {
      id: 'rights',
      question: 'Qui conserve les droits d’auteur ?',
      answer:
        'Vous conservez l’intégralité de vos droits d’auteur. Afric-Educ agit comme diffuseur et ne revendique aucune propriété sur votre œuvre.',
    },
    {
      id: 'edit',
      question: 'Puis-je modifier mon livre après publication ?',
      answer:
        'Oui. Vous pouvez mettre à jour le contenu, la couverture ou les métadonnées à tout moment depuis votre tableau de bord auteur.',
    },
    {
      id: 'formats',
      question: 'Quels formats sont acceptés ?',
      answer:
        'Nous acceptons les manuscrits en DOCX, PDF et EPUB. La plateforme génère automatiquement les formats de diffusion numérique.',
    },
    {
      id: 'free',
      question: 'Puis-je publier gratuitement ?',
      answer:
        'Oui. La formule Débuter permet de publier gratuitement votre premier livre numérique avec accès au tableau de bord et aux statistiques de base.',
    },
    {
      id: 'payment',
      question: 'Comment suis-je rémunéré ?',
      answer:
        'Les revenus de vos ventes sont versés mensuellement sur votre compte. Le taux de reversement varie selon votre formule, jusqu’à 85 % pour les auteurs Pro.',
    },
  ] satisfies PublishFaqItem[],
}

export const publishFinalCtaSection = {
  title: 'Votre histoire mérite d’être lue',
  subtitle:
    'Publiez aujourd’hui et rejoignez la nouvelle génération d’auteurs africains.',
  imageAlt: 'Pile de livres, encre et plume sur fond sombre',
  primaryCta: {
    label: 'Publier mon livre',
    href: '/publier/manuscrit',
  },
  secondaryCta: {
    label: 'Contacter un conseiller',
    href: '/contact',
  },
}

export interface AuthorRankingEntry {
  rank: number
  name: string
  metric: string
  avatar: string
}

export type AuthorRankingTabId = 'sales' | 'new' | 'trends'

export const publishGrowthWidgetsSection = {
  calculator: {
    title: 'Calculateur de revenus',
    priceLabel: 'Prix du livre (€)',
    salesLabel: 'Nombre de ventes',
    resultLabel: 'Revenu auteur estimé',
    footnote: 'Estimation basée sur la formule Premium',
    defaultPrice: 10,
    defaultSales: 500,
    royaltyRate: 0.5,
    currency: '$',
  },
  africaMap: {
    title: 'Carte de diffusion africaine',
    imageAlt: 'Carte de l’Afrique montrant la diffusion des livres',
    countries: [
      { name: 'Côte d’Ivoire', readers: '12 540' },
      { name: 'Sénégal', readers: '8 430' },
      { name: 'Cameroun', readers: '6 210' },
      { name: 'RDC', readers: '5 180' },
      { name: 'France (Diaspora)', readers: '4 320' },
    ],
    cta: { label: 'Voir tous les pays', href: '/diffusion' },
  },
  ranking: {
    title: 'Classement des auteurs',
    tabs: [
      { id: 'sales' as const, label: 'Top ventes' },
      { id: 'new' as const, label: 'Nouveaux auteurs' },
      { id: 'trends' as const, label: 'Tendances' },
    ],
    lists: {
      sales: [
        { rank: 1, name: 'Aïssatou D.', metric: '1 250 abonnés', avatar: 'alissatou.webp' },
        { rank: 2, name: 'Marc K.', metric: '980 abonnés', avatar: 'marc.webp' },
        { rank: 3, name: 'Jean-Paul L.', metric: '760 abonnés', avatar: 'jeanine.webp' },
      ],
      new: [
        { rank: 1, name: 'Fatou N.', metric: '420 abonnés', avatar: 'alissatou.webp' },
        { rank: 2, name: 'Ibrahim S.', metric: '310 abonnés', avatar: 'marc.webp' },
        { rank: 3, name: 'Clarisse A.', metric: '280 abonnés', avatar: 'jeanine.webp' },
      ],
      trends: [
        { rank: 1, name: 'Patrick L.', metric: '+320 %', avatar: 'marc.webp' },
        { rank: 2, name: 'Aminata K.', metric: '+280 %', avatar: 'alissatou.webp' },
        { rank: 3, name: 'David O.', metric: '+195 %', avatar: 'jeanine.webp' },
      ],
    } satisfies Record<AuthorRankingTabId, AuthorRankingEntry[]>,
    cta: { label: 'Voir le classement complet', href: '/classement-auteurs' },
  },
  schools: {
    title: 'Programme Écoles & Universités',
    description:
      'Proposez vos manuels scolaires et ouvrages académiques aux établissements partenaires.',
    cta: { label: 'En savoir plus', href: '/ecoles-universites' },
    imageAlt: 'Étudiants en classe utilisant des manuels numériques',
  },
  library: {
    title: 'Bibliothèque Numérique Africaine',
    description:
      'Un patrimoine de savoirs africains accessible partout, pour tous les lecteurs.',
    cta: { label: 'Découvrir la bibliothèque', href: '/bibliotheque' },
    imageAlt: 'Livre ouvert symbolisant la bibliothèque numérique africaine',
  },
}
