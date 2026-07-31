export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export interface LegalPageMeta {
  title: string
  shortTitle: string
  description: string
  updatedAt: string
  effectiveAt: string
}

export interface LegalRelatedLink {
  label: string
  href: string
}
