import type { CartFormat } from '@/data/cart-page'
import {
  cartDemoLines,
  cartPromoCode,
  cartPromoDiscount,
  cartPublisherBySlug,
  cartShippingFee,
  cartTaxAmount,
} from '@/data/cart-page'

export interface CartLine {
  id: string
  slug: string
  title: string
  author: string
  publisher: string
  format: CartFormat
  unitPrice: number
  quantity: number
  coverImage: string
}

export interface AddToCartPayload {
  slug: string
  title: string
  author: string
  price: number
  coverImage: string
  format?: CartFormat
  publisher?: string
}

const CART_SUCCESS_MESSAGE = 'Le produit a été ajouté au panier'

function createLineId(slug: string, format: CartFormat) {
  return `${slug}-${format}`
}

function formatMoney(value: number) {
  return `${value.toFixed(2).replace('.', ',')} $`
}

export function useCart() {
  const lines = useState<CartLine[]>('cart-lines', () =>
    cartDemoLines.map(line => ({ ...line })),
  )
  const promoApplied = useState('cart-promo-applied', () => true)
  const selectedPayment = useState<string | null>('cart-payment', () => null)
  const paymentError = useState('cart-payment-error', () => false)

  const itemCount = computed(() =>
    lines.value.reduce((total, line) => total + line.quantity, 0),
  )

  const bookCountLabel = computed(() => {
    const count = lines.value.length
    return `${count} livre${count > 1 ? 's' : ''}`
  })

  const hasPaperBooks = computed(() =>
    lines.value.some(line => line.format === 'paper'),
  )

  const subtotal = computed(() =>
    lines.value.reduce((total, line) => total + line.unitPrice * line.quantity, 0),
  )

  const discount = computed(() => (promoApplied.value ? cartPromoDiscount : 0))

  const shipping = computed(() => (hasPaperBooks.value ? cartShippingFee : 0))

  const tax = computed(() => (lines.value.length > 0 ? cartTaxAmount : 0))

  const total = computed(() =>
    Math.max(0, subtotal.value - discount.value + shipping.value + tax.value),
  )

  function addItem(payload: AddToCartPayload) {
    const format = payload.format ?? 'ebook'
    const id = createLineId(payload.slug, format)
    const existing = lines.value.find(line => line.id === id)

    if (existing) {
      existing.quantity += 1
    }
    else {
      lines.value.push({
        id,
        slug: payload.slug,
        title: payload.title,
        author: payload.author,
        publisher: payload.publisher ?? cartPublisherBySlug[payload.slug] ?? 'Afric-Educ',
        format,
        unitPrice: payload.price,
        quantity: 1,
        coverImage: payload.coverImage,
      })
    }

    const toast = useToast()
    toast.add({
      title: CART_SUCCESS_MESSAGE,
      color: 'success',
      icon: 'i-lucide-shopping-cart',
    })
  }

  function removeLine(id: string) {
    lines.value = lines.value.filter(line => line.id !== id)
  }

  function incrementQuantity(id: string) {
    const line = lines.value.find(entry => entry.id === id)
    if (line)
      line.quantity += 1
  }

  function decrementQuantity(id: string) {
    const line = lines.value.find(entry => entry.id === id)
    if (!line)
      return

    if (line.quantity <= 1)
      removeLine(id)
    else
      line.quantity -= 1
  }

  function applyPromoCode(code: string) {
    if (code.trim().toUpperCase() === cartPromoCode) {
      promoApplied.value = true
      const toast = useToast()
      toast.add({
        title: 'Code promo appliqué',
        description: `Remise de ${formatMoney(cartPromoDiscount)} activée.`,
        color: 'success',
      })
      return true
    }

    const toast = useToast()
    toast.add({
      title: 'Code promo invalide',
      color: 'error',
    })
    return false
  }

  function selectPayment(id: string) {
    selectedPayment.value = id
    paymentError.value = false
  }

  function validatePaymentSelection() {
    if (selectedPayment.value) {
      paymentError.value = false
      return true
    }

    paymentError.value = true

    const toast = useToast()
    toast.add({
      title: 'Mode de paiement requis',
      description: 'Veuillez sélectionner un mode de paiement avant de continuer.',
      color: 'error',
    })

    return false
  }

  return {
    lines,
    itemCount,
    bookCountLabel,
    hasPaperBooks,
    subtotal,
    discount,
    shipping,
    tax,
    total,
    promoApplied,
    selectedPayment,
    paymentError,
    addItem,
    removeLine,
    incrementQuantity,
    decrementQuantity,
    applyPromoCode,
    selectPayment,
    validatePaymentSelection,
    formatMoney,
  }
}
