/**
 * Design tokens Afric-Educ — Digital African Renaissance
 * @see docs/structure_graphique.pdf
 */

/** Option A — Luxe africain moderne (palette principale) */
export const colors = {
  deepBlack: '#0B0F19',
  softGold: '#D4A85A',
  ivory: '#F5F1E8',
  nightBlue: '#111827',
  copper: '#B76E3C',
} as const

/** Option B — Futurisme IA éditorial (accents) */
export const colorsAi = {
  anthracite: '#111111',
  pureWhite: '#FFFFFF',
  violet: '#7C3AED',
  cyan: '#06B6D4',
  deepGray: '#1F2937',
} as const

export const fonts = {
  heading: '"Clash Display", "Satoshi", system-ui, sans-serif',
  sans: '"Inter", system-ui, sans-serif',
  editorial: '"Cormorant Garamond", Georgia, serif',
} as const

export const shadows = {
  soft: '0 1px 2px rgba(11, 15, 25, 0.04), 0 4px 12px rgba(11, 15, 25, 0.06)',
  elevated: '0 4px 6px rgba(11, 15, 25, 0.04), 0 12px 32px rgba(11, 15, 25, 0.08)',
  floating: '0 8px 16px rgba(11, 15, 25, 0.06), 0 24px 48px rgba(11, 15, 25, 0.12)',
  glowGold: '0 0 0 1px rgba(212, 168, 90, 0.2), 0 8px 32px rgba(212, 168, 90, 0.15)',
  glowAi: '0 0 0 1px rgba(124, 58, 237, 0.2), 0 8px 40px rgba(6, 182, 212, 0.12)',
} as const

export const gradients = {
  hero: 'var(--gradient-hero)',
  mesh: 'var(--gradient-mesh)',
  gold: 'var(--gradient-gold)',
  ai: 'var(--gradient-ai)',
  glass: 'var(--gradient-glass)',
} as const
