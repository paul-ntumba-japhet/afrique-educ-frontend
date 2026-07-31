import type { Component } from 'vue'
import {
  BookUser,
  Briefcase,
  Building2,
  ChartColumnIncreasing,
  CircleCheck,
  GraduationCap,
  Handshake,
  Heart,
  Megaphone,
  MessageCircleMore,
  MessagesSquare,
  Network,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Truck,
  Users,
} from 'lucide-vue-next'
import heroImage from '~/assets/images/partenariat/hero.png'
import collaboration1 from '~/assets/images/partenariat/collaborations/collaboration-1.png'
import collaboration2 from '~/assets/images/partenariat/collaborations/collaboration-2.png'
import collaboration3 from '~/assets/images/partenariat/collaborations/collaboration-3.png'
import collaboration4 from '~/assets/images/partenariat/collaborations/collaboration-4.png'

export const partnershipHero = {
  eyebrow: 'Devenir partenaire',
  titleBefore: 'Construisons ensemble l’avenir du',
  titleHighlight: 'livre en Afrique',
  lead:
    'Rejoignez un réseau d’acteurs engagés pour rendre les livres plus accessibles, soutenir les auteurs et développer de nouvelles opportunités dans l’édition, l’éducation et la distribution.',
  primaryCta: {
    label: 'Proposer un partenariat',
    href: '#partenariat-proposition',
  },
  secondaryCta: {
    label: 'Découvrir les formes de partenariat',
    href: '#formes-partenariat',
  },
  image: heroImage,
  imageAlt:
    'Poignée de main professionnelle autour d’une pile de livres, symbole de partenariat éditorial',
} as const

export const partnershipGoals = {
  title: 'Un partenariat construit autour d’objectifs communs',
  intro:
    'Nous collaborons avec des organisations qui partagent notre ambition : renforcer l’accès au livre, soutenir la création africaine et créer des opportunités durables pour les lecteurs, les auteurs et les institutions.',
  items: [
    {
      id: 'diffusion',
      title: 'Diffusion élargie',
      description: 'Rendre les ouvrages plus visibles et accessibles auprès de nouveaux publics.',
      icon: Users,
    },
    {
      id: 'education',
      title: 'Impact éducatif',
      description: 'Soutenir l’apprentissage, la lecture et la transmission des savoirs.',
      icon: GraduationCap,
    },
    {
      id: 'collaboration',
      title: 'Collaboration durable',
      description: 'Construire des relations de long terme fondées sur la confiance et la valeur partagée.',
      icon: Handshake,
    },
  ],
} as const

export const partnershipCollaborators = {
  title: 'Avec qui pouvons-nous collaborer ?',
  items: [
    {
      id: 'publishers',
      title: 'Maisons d’édition',
      description:
        'Distribuez vos catalogues, développez votre visibilité et accédez à de nouveaux lecteurs.',
      icon: BookUser,
    },
    {
      id: 'bookstores',
      title: 'Librairies et distributeurs',
      description:
        'Intégrez notre réseau de distribution et facilitez l’accès aux livres dans plusieurs villes et régions.',
      icon: Store,
    },
    {
      id: 'schools',
      title: 'Établissements scolaires et universitaires',
      description:
        'Développez des programmes de lecture, constituez des bibliothèques et commandez des ouvrages adaptés à vos apprenants.',
      icon: GraduationCap,
    },
    {
      id: 'companies',
      title: 'Entreprises et institutions',
      description:
        'Soutenez des projets éducatifs, financez des bibliothèques ou proposez des livres à vos collaborateurs et communautés.',
      icon: Building2,
    },
    {
      id: 'associations',
      title: 'Organisations et associations',
      description:
        'Mettez en œuvre des campagnes de lecture, des dons de livres et des projets à impact social.',
      icon: Users,
    },
    {
      id: 'printers',
      title: 'Imprimeurs et prestataires logistiques',
      description:
        'Participez à l’impression, au contrôle qualité, au stockage et à la livraison des ouvrages.',
      icon: Truck,
    },
  ],
} as const

export const partnershipForms = {
  title: 'Des collaborations adaptées à chaque organisation',
  items: [
    {
      id: 'distribution',
      title: 'Distribution et commercialisation',
      description:
        'Mise en vente de catalogues, référencement d’ouvrages, distribution locale et développement de nouveaux marchés.',
      image: collaboration1,
      imageAlt: 'Mains tenant un ouvrage, symbole de distribution éditoriale',
      icon: Briefcase,
    },
    {
      id: 'education',
      title: 'Éducation et accès à la lecture',
      description:
        'Création de bibliothèques, programmes scolaires, clubs de lecture et fourniture d’ouvrages aux établissements.',
      image: collaboration2,
      imageAlt: 'Élève en train d’écrire dans un cahier',
      icon: GraduationCap,
    },
    {
      id: 'logistics',
      title: 'Impression et logistique',
      description:
        'Impression à la demande, production de lots, stockage, préparation des commandes et livraison.',
      image: collaboration3,
      imageAlt: 'Opérateur logistique dans un entrepôt',
      icon: Truck,
    },
    {
      id: 'impact',
      title: 'Sponsoring et impact social',
      description:
        'Financement de campagnes de lecture, dons de livres, événements culturels et initiatives communautaires.',
      image: collaboration4,
      imageAlt: 'Enfants souriants en train de lire ensemble',
      icon: Heart,
    },
  ],
} as const

export const partnershipValue = {
  title: 'Une collaboration créatrice de valeur',
  items: [
    {
      id: 'ecosystem',
      title: 'Un accès à un écosystème spécialisé',
      description:
        'Rejoignez un réseau d’acteurs du livre, de l’éducation et de la distribution déjà engagés sur le terrain.',
      icon: Network,
    },
    {
      id: 'visibility',
      title: 'Une visibilité renforcée',
      description:
        'Gagnez en exposition auprès des lecteurs, des institutions et des partenaires stratégiques.',
      icon: Megaphone,
    },
    {
      id: 'solutions',
      title: 'Des solutions adaptées',
      description:
        'Construisez un partenariat modulable selon vos objectifs, votre public et votre capacité d’action.',
      icon: SlidersHorizontal,
    },
    {
      id: 'impact',
      title: 'Un impact mesurable',
      description:
        'Suivez des résultats concrets : diffusion, lecture, portée des campagnes et valeur créée ensemble.',
      icon: ChartColumnIncreasing,
    },
  ],
} as const

export const partnershipSteps = {
  title: 'Comment démarrer ?',
  items: [
    {
      id: 'presentation',
      step: 1,
      title: 'Présentation de votre organisation',
      description:
        'Vous renseignez votre activité, vos objectifs et le type de partenariat recherché.',
    },
    {
      id: 'review',
      step: 2,
      title: 'Étude de la proposition',
      description:
        'Notre équipe analyse la pertinence, la faisabilité et les modalités de collaboration.',
    },
    {
      id: 'definition',
      step: 3,
      title: 'Définition du partenariat',
      description:
        'Nous précisons les responsabilités, les ressources, les objectifs et le calendrier.',
    },
    {
      id: 'launch',
      step: 4,
      title: 'Lancement de la collaboration',
      description:
        'Le partenariat est validé, suivi et évalué selon les objectifs convenus.',
    },
  ],
} as const

export const partnershipProposal = {
  title: 'Parlez-nous de votre projet',
  submitLabel: 'Envoyer ma proposition',
  privacyLabel: 'J’accepte la Politique de confidentialité',
  privacyHref: '/confidentialite',
  fileHint: 'PDF, PPT ou DOC (20 Mo max)',
  countries: [
    'République démocratique du Congo',
    'République du Congo',
    'Cameroun',
    'Gabon',
    'Sénégal',
    'Côte d’Ivoire',
    'Autre',
  ],
  organizationTypes: [
    'Maison d’édition',
    'Librairie / distributeur',
    'Établissement scolaire',
    'Établissement universitaire',
    'Entreprise / institution',
    'Organisation / association',
    'Imprimeur / logisticien',
    'Autre',
  ],
  partnershipTypes: [
    'Distribution et commercialisation',
    'Éducation et accès à la lecture',
    'Impression et logistique',
    'Sponsoring et impact social',
    'Autre / multi-volets',
  ],
  aside: {
    title: 'Votre proposition sera étudiée avec attention',
    ctaLabel: 'Contacter directement un conseiller',
    ctaHref: '/partenaires/services/contact',
    items: [
      {
        id: 'reply',
        label: 'Réponse initiale après analyse du dossier',
        icon: MessageCircleMore,
      },
      {
        id: 'privacy',
        label: 'Informations traitées de manière confidentielle',
        icon: ShieldCheck,
      },
      {
        id: 'commitment',
        label: 'Aucun engagement avant validation des modalités',
        icon: CircleCheck,
      },
      {
        id: 'meeting',
        label: 'Possibilité d’organiser une réunion avec un conseiller',
        icon: MessagesSquare,
      },
    ],
  },
} as const

export type PartnershipIcon = Component
