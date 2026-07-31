import type { Component } from 'vue'
import {
  Award,
  BookMarked,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock3,
  Copy,
  Handshake,
  Home,
  Layers,
  MapPin,
  Package,
  PackageCheck,
  Rocket,
  ShieldCheck,
  Sparkles,
  Truck,
  Upload,
} from 'lucide-vue-next'
import sliderCover from '~/assets/images/slider/chemins-eveil-min.png'

export const podWizardSteps = [
  { id: 'book', label: 'Choisir le livre' },
  { id: 'config', label: 'Configuration' },
  { id: 'quantity', label: 'Quantité' },
  { id: 'delivery', label: 'Livraison' },
  { id: 'summary', label: 'Récapitulatif' },
] as const

export const podQuantityTiers = [
  {
    id: 'unit',
    label: 'À l’unité',
    range: '1 exemplaire',
    description: 'Idéal pour un exemplaire personnel, une relecture ou un envoi ciblé.',
    defaultQty: 1,
    unitPriceLabel: '12 500 FCFA',
    delay: '3 à 5 jours ouvrables',
    icon: BookOpen,
  },
  {
    id: 'short',
    label: 'Tirage court',
    range: '2 à 50 exemplaires',
    description: 'Parfait pour un lancement, un atelier ou une distribution limitée.',
    defaultQty: 25,
    unitPriceLabel: '8 900 FCFA',
    delay: '5 à 7 jours ouvrables',
    icon: Copy,
  },
  {
    id: 'medium',
    label: 'Tirage moyen',
    range: '51 à 500 exemplaires',
    description: 'Adapté aux librairies, écoles et commandes institutionnelles.',
    defaultQty: 100,
    unitPriceLabel: '6 400 FCFA',
    delay: '7 à 10 jours ouvrables',
    icon: Layers,
  },
  {
    id: 'bulk',
    label: 'Tirage important',
    range: '501 exemplaires et +',
    description: 'Pour les gros volumes avec un tarif sur devis personnalisé.',
    defaultQty: 501,
    unitPriceLabel: 'Sur devis',
    delay: '10 à 15 jours ouvrables',
    icon: Package,
  },
] as const

export type PodQuantityTierId = typeof podQuantityTiers[number]['id'] | 'custom'

/** Adresses enregistrées du client (mock — remplacées par la BDD plus tard). */
export const podSavedAddresses = [
  {
    id: 'personal',
    label: 'Adresse personnelle',
    name: 'Jean Dupont',
    lines: [
      'Avenue Colonel Mondjiba, n°123',
      'Quartier Basoko, Commune de Ngaliema',
      'Kinshasa, RDC',
    ],
    phone: '+243 81 234 5678',
    icon: Home,
  },
  {
    id: 'professional',
    label: 'Adresse professionnelle',
    name: 'Vertex Academia',
    lines: [
      'Boulevard du 30 Juin, Immeuble Royal',
      'Commune de la Gombe',
      'Kinshasa, RDC',
    ],
    phone: '+243 99 876 5432',
    icon: Building2,
  },
] as const

export type PodSavedAddressId = typeof podSavedAddresses[number]['id']
export type PodAddressSelection = PodSavedAddressId | 'new'

export const podShippingMethods = [
  {
    id: 'standard',
    label: 'Livraison standard',
    description: 'Par transporteur partenaire',
    delay: '2 à 4 jours ouvrables',
    price: 3000,
    priceLabel: '3 000 FCFA',
    icon: Truck,
  },
  {
    id: 'express',
    label: 'Livraison express',
    description: 'Prioritaire (par avion)',
    delay: '1 à 2 jours ouvrables',
    price: 8000,
    priceLabel: '8 000 FCFA',
    icon: Rocket,
  },
  {
    id: 'pickup',
    label: 'Retrait en point relais',
    description: 'À retirer dans un point relais proche',
    delay: '2 à 3 jours ouvrables',
    price: 1500,
    priceLabel: '1 500 FCFA',
    icon: MapPin,
  },
] as const

export type PodShippingMethodId = typeof podShippingMethods[number]['id']

export const POD_DELIVERY_NOTES_MAX = 250

export const podHeroFeatures = [
  { id: 'unit', title: 'Impression', subtitle: 'dès 1 exemplaire', icon: BookOpen },
  { id: 'quality', title: 'Qualité', subtitle: 'professionnelle', icon: Award },
  { id: 'delay', title: 'Délais rapides', subtitle: 'et fiables', icon: Clock3 },
  { id: 'support', title: 'Accompagnement', subtitle: 'personnalisé', icon: Handshake },
] as const

export const podWhyPrint = [
  'Impression à partir d’un seul exemplaire',
  'Devis personnalisé sous 24 à 48 h',
  'Contrôle qualité avant expédition',
  'Tarifs dégressifs selon la quantité',
  'Livraison suivie en RDC et à l’international',
] as const

export const podTrustItems = [
  { id: 'quality', title: 'Qualité garantie', description: 'Contrôle de chaque exemplaire', icon: ShieldCheck },
  { id: 'pay', title: 'Paiement sécurisé', description: 'Transactions protégées', icon: Sparkles },
  { id: 'ship', title: 'Livraison suivie', description: 'Suivi jusqu’à réception', icon: Truck },
  { id: 'sat', title: 'Satisfaction assurée', description: 'Accompagnement dédié', icon: PackageCheck },
] as const

export const podSampleCatalogBook = {
  id: 'horizons-interieurs',
  title: 'Horizons intérieurs',
  author: 'Jean Dupont',
  cover: sliderCover,
  href: '/livres/horizons-interieurs',
  specs: [
    { label: 'Format', value: 'A5' },
    { label: 'Nombre de pages', value: '236' },
    { label: 'Couverture', value: 'Souple (dos carré collé)' },
    { label: 'Fichier intérieur', value: 'Validé', ok: true },
    { label: 'Fichier couverture', value: 'Validé', ok: true },
  ],
}

export const podEstimatorOptions = {
  bookTypes: ['Roman', 'Essai', 'Manuel scolaire', 'Catalogue', 'Livre photo'],
  formats: ['A5', 'A4', 'Poche', 'Carré', 'Format personnalisé'],
  printTypes: ['Recto seul', 'Recto verso'],
  interiors: ['Noir et blanc', 'Couleur'],
  finishes: ['Mat', 'Brillant', 'Soft Touch'],
  papers: [
    'Papier offset (blanc naturel)',
    'Papier bouffant',
    'Papier couché mat',
    'Papier couché brillant',
  ],
  weights: ['80 g/m²', '90 g/m²', '100 g/m²', '120 g/m²', '170 g/m²'],
  bindings: ['Dos carré collé', 'Reliure spirale', 'Agrafée (jusqu’à 48 pages)'],
  covers: ['Souple (dos carré collé)', 'Rigide', 'Souple avec rabats'],
  laminations: ['Aucun', 'Mat', 'Brillant'],
  spotVarnish: ['Aucun', 'Sélectif recto', 'Sélectif recto-verso'],
  endpapers: ['Blanches', 'Crème', 'Colorées'],
  quantities: [1, 10, 25, 50, 100, 250, 500],
  deliveries: ['Kinshasa', 'RDC (hors Kinshasa)', 'Afrique centrale', 'International'],
} as const

export type PodBookSource = 'catalog' | 'personal'
export type PodIcon = Component

export { BookMarked, Upload }
