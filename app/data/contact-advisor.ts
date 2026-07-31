import type { Component } from 'vue'
import {
  Building2,
  ChevronRight,
  Clock3,
  FileText,
  Handshake,
  Headphones,
  Mail,
  MapPin,
  Package,
  Phone,
  Printer,
  Send,
  ShieldCheck,
  UserRound,
} from 'lucide-vue-next'
import heroImage from '~/assets/images/contact-conseiller/hero.png'
import officeImage from '~/assets/images/contact-conseiller/contact-section.png'

export const contactAdvisorImages = {
  hero: heroImage,
  office: officeImage,
} as const

export const contactAdvisorHeroHighlights = [
  { id: 'response', label: 'Réponse sous 24h', icon: Clock3 },
  { id: 'quote', label: 'Devis gratuit', icon: FileText },
  { id: 'support', label: 'Accompagnement personnalisé', icon: UserRound },
] as const

export const contactAdvisorChannels = [
  {
    id: 'phone',
    title: 'Appelez-nous',
    value: '+243 81 234 56 78',
    detail: 'Lun – Ven · 08h00 – 17h30',
    href: 'tel:+243812345678',
    cta: 'Appeler maintenant',
    icon: Phone,
  },
  {
    id: 'email',
    title: 'Écrivez-nous',
    value: 'institutions@afric-educ.com',
    detail: 'Réponse sous 24 heures ouvrées',
    href: 'mailto:institutions@afric-educ.com',
    cta: 'Envoyer un e-mail',
    icon: Mail,
  },
] as const

export interface ContactAdvisorNeed {
  id: string
  title: string
  description: string
  href: string
  icon: Component
}

export const contactAdvisorNeeds: ContactAdvisorNeed[] = [
  {
    id: 'quote',
    title: 'Demander un devis',
    description: 'Volumes, remises et délais adaptés.',
    href: '/partenaires/bibliotheques/devis',
    icon: FileText,
  },
  {
    id: 'order',
    title: 'Commander des livres',
    description: 'Lots institutionnels et suivi.',
    href: '/partenaires/bibliotheques/commandes',
    icon: Package,
  },
  {
    id: 'catalog',
    title: 'Demander un catalogue',
    description: 'Sélection africaine par niveau.',
    href: 'mailto:institutions@afric-educ.com?subject=Demande%20de%20catalogue',
    icon: Building2,
  },
  {
    id: 'partner',
    title: 'Devenir partenaire',
    description: 'Bibliothèques, écoles, ONG.',
    href: '/partenaires',
    icon: Handshake,
  },
  {
    id: 'pod',
    title: 'Impression à la demande',
    description: 'Tirages courts et moyens.',
    href: '/partenaires/imprimeries/pod',
    icon: Printer,
  },
  {
    id: 'other',
    title: 'Autre demande',
    description: 'Parlez-nous de votre projet.',
    href: '#contact-form',
    icon: Headphones,
  },
]

export const contactAdvisorReasons = [
  {
    id: 'advisor',
    title: 'Conseiller dédié',
    description: 'Un interlocuteur unique pour vos projets institutionnels.',
    icon: Headphones,
  },
  {
    id: 'speed',
    title: 'Réponse sous 24h',
    description: 'Un retour clair et actionnable sur votre demande.',
    icon: Clock3,
  },
  {
    id: 'free',
    title: 'Devis gratuit',
    description: 'Estimation volume sans engagement.',
    icon: FileText,
  },
  {
    id: 'custom',
    title: 'Accompagnement personnalisé',
    description: 'Catalogue, logistique et facturation sur mesure.',
    icon: ShieldCheck,
  },
] as const

export const contactAdvisorOffice = {
  address: {
    title: 'Notre bureau',
    lines: [
      'Avenue de la Liberation, Gombe',
      'Kinshasa, République démocratique du Congo',
    ],
    icon: MapPin,
  },
  hours: {
    title: 'Nos horaires',
    rows: [
      { label: 'Lun – Ven', value: '08h00 – 17h30' },
      { label: 'Samedi', value: '09h00 – 13h00' },
      { label: 'Dimanche', value: 'Fermé' },
    ],
    icon: Clock3,
  },
} as const

export const contactAdvisorFormFields = [
  { id: 'name', label: 'Nom complet', type: 'text', required: true, autocomplete: 'name' },
  { id: 'organization', label: 'Organisation', type: 'text', required: true, autocomplete: 'organization' },
  { id: 'role', label: 'Fonction', type: 'text', required: false, autocomplete: 'organization-title' },
  { id: 'phone', label: 'Téléphone', type: 'tel', required: true, autocomplete: 'tel' },
  { id: 'email', label: 'Adresse e-mail', type: 'email', required: true, autocomplete: 'email' },
] as const

export { Send, ChevronRight, Phone, Mail, ShieldCheck }
