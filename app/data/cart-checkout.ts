export interface CartCheckoutStep {
  id: string
  label: string
  to: string
}

export const cartCheckoutSteps: CartCheckoutStep[] = [
  { id: 'cart', label: 'Panier', to: '/panier' },
  { id: 'confirmation', label: 'Confirmation', to: '/panier/confirmation' },
  { id: 'payment', label: 'Paiement', to: '/panier/paiement' },
]

export function getCartCheckoutStepIndex(path: string) {
  if (path.startsWith('/panier/paiement'))
    return 3

  if (path.startsWith('/panier/confirmation'))
    return 2

  return 1
}
