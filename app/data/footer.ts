export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterSocialLink {
  id: string
  label: string
  href: string
}

/** Colonnes de navigation du footer */
export const footerColumns: FooterColumn[] = [
  {
    title: 'Découvrir',
    links: [
      { label: 'Catalogue', href: '/livres' },
      { label: 'Catégories', href: '/categories' },
      { label: 'Auteurs', href: '/auteurs' },
      { label: 'Publier', href: '/publier' },
      { label: 'Packs & abonnements', href: '/partenaires/bibliotheques/abonnements' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Contact', href: '/partenaires/services/contact' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Partenaires', href: '/partenaires' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Conditions générales d’utilisation', href: '/legal/cgu' },
      { label: 'Politique de confidentialité', href: '/legal/confidentialite' },
      { label: 'Politique de cookies', href: '/legal/cookies' },
      { label: 'Conditions de vente', href: '/legal/conditions-de-vente' },
      { label: 'Politique de remboursement', href: '/legal/remboursement' },
      { label: 'Droits d’auteur / DMCA', href: '/legal/dmca' },
    ],
  },
]

export const footerSocialLinks: FooterSocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { id: 'x', label: 'X', href: 'https://x.com/' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/' },
]

export const footerContact = {
  email: 'contact@afric-educ.com',
  support: 'support@afric-educ.com',
  tagline: 'Lire, publier et transmettre le savoir africain.',
}
