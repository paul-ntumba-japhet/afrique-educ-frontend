import type {
  BookSelectionMethodId,
  DeliveryConstraintId,
  DeliveryModeId,
  FundingModeId,
  InstitutionTypeOption,
  InstitutionalQuoteDraft,
  PaymentModeId,
  QuoteBillingState,
  QuoteBookSelection,
  QuoteAttachment,
  QuoteConsentState,
  QuoteDeliveryState,
  QuoteQuantityLine,
  QuoteQuantityState,
  QuoteServiceId,
  QuoteServiceOptions,
  QuoteServicesState,
  QuoteStepMeta,
} from '@/types/institutional-quote'
import {
  BadgePercent,
  Banknote,
  BookMarked,
  BookOpen,
  Boxes,
  Building2,
  CircleHelp,
  Coins,
  CreditCard,
  FileText,
  FileUp,
  Globe2,
  GraduationCap,
  Handshake,
  Landmark,
  Library,
  MapPinned,
  Package,
  PackageOpen,
  PencilLine,
  PiggyBank,
  Printer,
  QrCode,
  School,
  Search,
  Smartphone,
  Stamp,
  Store,
  Tags,
  Truck,
  Wallet,
  Warehouse,
} from 'lucide-vue-next'
import type { Component } from 'vue'

export const quoteSteps: QuoteStepMeta[] = [
  {
    id: 'institution',
    number: '01',
    title: 'Votre institution',
    subtitle: 'Informations sur votre organisation et contact',
  },
  {
    id: 'books',
    number: '02',
    title: 'Sélection des livres',
    subtitle: 'Catalogue, import ou description du besoin',
  },
  {
    id: 'quantities',
    number: '03',
    title: 'Quantités et répartition',
    subtitle: 'Volumes par titre et par site',
  },
  {
    id: 'services',
    number: '04',
    title: 'Services complémentaires',
    subtitle: 'Options et personnalisations',
  },
  {
    id: 'delivery',
    number: '05',
    title: 'Livraison et contraintes',
    subtitle: 'Adresses, délais et contraintes',
  },
  {
    id: 'billing',
    number: '06',
    title: 'Budget, facturation et paiement envisagé',
    subtitle: 'Préférences financières',
  },
  {
    id: 'review',
    number: '07',
    title: 'Vérification et envoi',
    subtitle: 'Contrôle final et envoi',
  },
]

export const institutionTypeOptions: (InstitutionTypeOption & { icon: Component })[] = [
  { id: 'library', label: 'Bibliothèque', icon: Library },
  { id: 'primary_school', label: 'École primaire', icon: School },
  { id: 'secondary_school', label: 'École secondaire', icon: BookOpen },
  { id: 'university', label: 'Université', icon: GraduationCap },
  { id: 'training_center', label: 'Centre de formation', icon: BookMarked },
  { id: 'company', label: 'Entreprise', icon: Building2 },
  { id: 'ngo', label: 'ONG', icon: Handshake },
  { id: 'ministry', label: 'Ministère / Administration', icon: Landmark },
  { id: 'bookstore', label: 'Librairie', icon: Store },
  { id: 'other', label: 'Autre organisation', icon: BookOpen },
]

export const quoteCountries = [
  'République démocratique du Congo',
  'Sénégal',
  'Côte d’Ivoire',
  'Cameroun',
  'Gabon',
  'Bénin',
  'Togo',
  'Mali',
  'Burkina Faso',
  'France',
  'Belgique',
  'Canada',
  'Autre',
] as const

export const quoteRegionsByCountry: Record<string, string[]> = {
  'République démocratique du Congo': [
    'Kinshasa',
    'Kongo-Central',
    'Haut-Katanga',
    'Nord-Kivu',
    'Sud-Kivu',
    'Autre',
  ],
  Sénégal: ['Dakar', 'Thiès', 'Saint-Louis', 'Autre'],
  'Côte d’Ivoire': ['Abidjan', 'Bouaké', 'San-Pédro', 'Autre'],
  France: ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Autre'],
  Autre: ['Non applicable'],
}

export function createEmptyBookSelection() {
  return {
    method: null as BookSelectionMethodId | null,
    catalogueQuery: '',
    catalogueFilters: {
      subject: '',
      category: '',
      level: '',
      language: '',
      country: '',
      format: '',
    },
    selectedBooks: [] as { bookId: string, quantity: number }[],
    import: {
      fileName: null as string | null,
      fileSizeLabel: null as string | null,
      rows: [] as {
        isbn: string
        title: string
        author: string
        quantity: number
        publisher: string
        format: string
      }[],
    },
    need: {
      schoolLevel: '',
      subject: '',
      ageRange: '',
      language: '',
      country: '',
      format: '',
      approximateCount: '',
      estimatedBudget: '',
      objectives: [] as string[],
      details: '',
    },
  }
}

export function createEmptyQuantities(): QuoteQuantityState {
  return {
    currency: 'FCFA',
    lines: [],
    selectedLineId: null,
  }
}

export function createEmptyServiceOptions(): QuoteServiceOptions {
  return {
    logoFileName: null,
    logoFileSizeLabel: null,
    placement: 'back-cover',
    printColor: 'dark-green',
    bookCount: null,
    institutionalText: '',
    fontFamily: 'Georgia',
    fontSize: '12',
    packagingStyle: 'branded',
    podFormat: 'broché',
    catalogStandard: 'unimarc',
    trainingFormat: 'onsite',
    notes: '',
  }
}

export function createEmptyServices(): QuoteServicesState {
  return {
    selectedIds: [],
    activeServiceId: null,
    optionsByService: {},
    specificNotes: '',
  }
}

export function createEmptyDelivery(): QuoteDeliveryState {
  return {
    mode: null,
    address: {
      country: '',
      region: '',
      city: '',
      district: '',
      address: '',
      postalCode: '',
      landmark: '',
      contactName: '',
      contactPhone: '',
    },
    constraints: [],
    desiredDate: '',
    deadlineDate: '',
    comments: '',
    sites: [],
  }
}

export function createEmptyBilling(): QuoteBillingState {
  return {
    budget: {
      availability: null,
      currency: 'CDF',
      maxAmount: '',
      range: '',
      fundingModes: [],
      fundingNotes: '',
    },
    billing: {
      legalName: '',
      taxId: '',
      adminReference: '',
      billingAddress: '',
      billingEmail: '',
      officePhone: '',
      paymentContactName: '',
      paymentContactTitle: '',
      paymentContactEmail: '',
    },
    payment: {
      modes: [],
      purchaseOrder: null,
      comments: '',
    },
  }
}

export function createEmptyConsents(): QuoteConsentState {
  return {
    accuracy: false,
    contactAuth: false,
    privacy: false,
    marketing: false,
  }
}

export function createEmptyQuoteDraft(): InstitutionalQuoteDraft {
  return {
    currentStep: 1,
    institutionType: null,
    institution: {
      organizationName: '',
      country: '',
      region: '',
      city: '',
      address: '',
      website: '',
      adminReference: '',
    },
    contact: {
      firstName: '',
      lastName: '',
      jobTitle: '',
      email: '',
      phone: '',
      secondaryPhone: '',
    },
    bookSelection: createEmptyBookSelection(),
    quantities: createEmptyQuantities(),
    services: createEmptyServices(),
    delivery: createEmptyDelivery(),
    billing: createEmptyBilling(),
    consents: createEmptyConsents(),
    attachments: [],
    updatedAt: null,
  }
}

export function normalizeQuoteDraft(draft: InstitutionalQuoteDraft): InstitutionalQuoteDraft {
  const empty = createEmptyQuoteDraft()
  return {
    ...empty,
    ...draft,
    institution: { ...empty.institution, ...draft.institution },
    contact: { ...empty.contact, ...draft.contact },
    bookSelection: {
      ...empty.bookSelection,
      ...draft.bookSelection,
      catalogueFilters: {
        ...empty.bookSelection.catalogueFilters,
        ...draft.bookSelection?.catalogueFilters,
      },
      selectedBooks: draft.bookSelection?.selectedBooks ?? [],
      import: {
        ...empty.bookSelection.import,
        ...draft.bookSelection?.import,
        rows: draft.bookSelection?.import?.rows ?? [],
      },
      need: {
        ...empty.bookSelection.need,
        ...draft.bookSelection?.need,
        objectives: draft.bookSelection?.need?.objectives ?? [],
      },
    },
    quantities: {
      ...empty.quantities,
      ...draft.quantities,
      lines: draft.quantities?.lines ?? [],
    },
    services: {
      ...empty.services,
      ...draft.services,
      selectedIds: draft.services?.selectedIds ?? [],
      optionsByService: draft.services?.optionsByService ?? {},
    },
    delivery: {
      ...empty.delivery,
      ...draft.delivery,
      address: {
        ...empty.delivery.address,
        ...draft.delivery?.address,
      },
      constraints: draft.delivery?.constraints ?? [],
      sites: draft.delivery?.sites ?? [],
    },
    billing: {
      ...empty.billing,
      ...draft.billing,
      budget: {
        ...empty.billing.budget,
        ...draft.billing?.budget,
        fundingModes: draft.billing?.budget?.fundingModes ?? [],
      },
      billing: {
        ...empty.billing.billing,
        ...draft.billing?.billing,
      },
      payment: {
        ...empty.billing.payment,
        ...draft.billing?.payment,
        modes: draft.billing?.payment?.modes ?? [],
      },
    },
    consents: {
      ...empty.consents,
      ...draft.consents,
    },
    attachments: draft.attachments ?? [],
  }
}

function parsePrice(label: string) {
  const n = Number.parseFloat(label.replace(/[^\d,.]/g, '').replace(',', '.'))
  return Number.isFinite(n) ? Math.round(n * 650) : 12000
}

export function buildQuantityLinesFromSelection(selection: QuoteBookSelection): QuoteQuantityLine[] {
  if (selection.method === 'catalogue') {
    return selection.selectedBooks.map((item, index) => {
      const book = catalogueBooksMock.find(entry => entry.id === item.bookId)
      return {
        id: `qty-${item.bookId}-${index}`,
        title: book?.title ?? 'Ouvrage sélectionné',
        author: book?.author ?? '—',
        format: book?.format ?? 'Broché',
        quantity: Math.max(1, item.quantity || 1),
        siteId: deliverySites[0]?.id ?? 'central',
        comment: '',
        coverTone: book?.coverTone ?? '#1a3020',
        unitPrice: book ? parsePrice(book.priceLabel) : 12000,
      }
    })
  }

  if (selection.method === 'import') {
    return selection.import.rows.map((row, index) => ({
      id: `qty-import-${index}-${row.isbn}`,
      title: row.title,
      author: row.author,
      format: row.format || 'Broché',
      quantity: Math.max(1, row.quantity || 1),
      siteId: deliverySites[0]?.id ?? 'central',
      comment: '',
      coverTone: ['#1a3020', '#b88345', '#0f172a', '#065f46'][index % 4],
      unitPrice: 15000,
    }))
  }

  if (selection.method === 'need') {
    const approx = Number.parseInt(selection.need.approximateCount.replace(/\s/g, ''), 10)
    return [{
      id: 'qty-need-1',
      title: 'Sélection proposée selon votre besoin',
      author: 'À confirmer par le conseiller',
      format: selection.need.format || 'Formats mixtes',
      quantity: Number.isFinite(approx) && approx > 0 ? approx : 20,
      siteId: deliverySites[0]?.id ?? 'central',
      comment: selection.need.details.slice(0, 120),
      coverTone: '#1a3020',
      unitPrice: 14000,
    }]
  }

  return quantityDemoLines.map(line => ({ ...line }))
}

export const deliverySites = [
  { id: 'central', label: 'Bibliothèque centrale', city: 'Kinshasa' },
  { id: 'campus-est', label: 'Campus Est', city: 'Kinshasa' },
  { id: 'annexe-sud', label: 'Annexe Sud', city: 'Lubumbashi' },
  { id: 'mediatheque', label: 'Médiathèque scolaire', city: 'Goma' },
] as const

export const quantityDemoLines: QuoteQuantityLine[] = [
  {
    id: 'demo-1',
    title: 'L’Afrique expliquée aux jeunes',
    author: 'Tidiane N’Diaye',
    format: 'Broché, 328 p.',
    quantity: 25,
    siteId: 'central',
    comment: '',
    coverTone: '#1a3020',
    unitPrice: 12000,
  },
  {
    id: 'demo-2',
    title: 'Contes et légendes du fleuve Congo',
    author: 'Amba Kazi-Toure',
    format: 'Relié, 210 p.',
    quantity: 40,
    siteId: 'campus-est',
    comment: 'Priorité jeunesse',
    coverTone: '#b88345',
    unitPrice: 14500,
  },
  {
    id: 'demo-3',
    title: 'Économie du développement africain',
    author: 'Fatou Diop',
    format: 'Broché, 412 p.',
    quantity: 12,
    siteId: 'annexe-sud',
    comment: '',
    coverTone: '#0f172a',
    unitPrice: 19500,
  },
]

export const quantityQuickActions = [
  {
    id: 'same-qty',
    title: 'Appliquer une quantité identique',
    description: 'Uniformisez les volumes sur toutes les lignes.',
  },
  {
    id: 'duplicate',
    title: 'Dupliquer une ligne sélectionnée',
    description: 'Créez une variante pour un autre site.',
  },
  {
    id: 'split-sites',
    title: 'Répartir sur plusieurs sites',
    description: 'Préparez la distribution multi-adresses.',
  },
  {
    id: 'import-qty',
    title: 'Importer les quantités depuis Excel',
    description: 'Mettez à jour les volumes en masse.',
  },
] as const

export const quantityTips = {
  title: 'Conseils',
  items: [
    'Vérifiez les quantités avant de passer aux services.',
    'Utilisez la répartition pour anticiper la livraison multi-sites.',
    'Les commentaires aident le conseiller à affiner le devis.',
    'L’estimation provisoire évoluera avec les remises volume.',
  ],
} as const

export const complementaryServices: {
  id: QuoteServiceId
  title: string
  description: string
  icon: Component
}[] = [
  {
    id: 'packaging',
    title: 'Emballage personnalisé',
    description: 'Cartons et étiquettes aux couleurs de votre institution.',
    icon: Boxes,
  },
  {
    id: 'pod',
    title: 'Impression à la demande',
    description: 'Tirages complémentaires selon vos volumes et délais.',
    icon: Printer,
  },
  {
    id: 'logo',
    title: 'Personnalisation avec logo',
    description: 'Ajoutez votre identité visuelle sur les ouvrages.',
    icon: Stamp,
  },
  {
    id: 'exlibris',
    title: 'Ex-libris',
    description: 'Plaques ou stickers d’appartenance pour votre fonds.',
    icon: BookMarked,
  },
  {
    id: 'stamp',
    title: 'Tampon de bibliothèque',
    description: 'Marquage officiel pour sécuriser votre collection.',
    icon: Tags,
  },
  {
    id: 'isbn',
    title: 'ISBN institutionnel',
    description: 'Référencement adapté à vos procédures d’acquisition.',
    icon: FileText,
  },
  {
    id: 'labeling',
    title: 'Étiquetage et codification',
    description: 'Codes-barres, cotes et étiquettes prêtes à ranger.',
    icon: QrCode,
  },
  {
    id: 'catalog',
    title: 'Catalogue bibliographique',
    description: 'Fiches MARC / UNIMARC pour intégration rapide.',
    icon: Library,
  },
  {
    id: 'digital',
    title: 'Livres numériques',
    description: 'Versions numériques en complément du papier.',
    icon: BookOpen,
  },
  {
    id: 'training',
    title: 'Formation des bibliothécaires',
    description: 'Sessions pour valoriser et gérer votre nouveau fonds.',
    icon: GraduationCap,
  },
]

export const servicePlacementOptions = [
  { value: 'cover', label: 'Couverture' },
  { value: 'back-cover', label: '4e de couverture (dos)' },
  { value: 'inside-cover', label: 'Contreplat' },
  { value: 'title-page', label: 'Page de titre' },
] as const

export const servicePrintColorOptions = [
  { value: 'dark-green', label: 'Vert foncé', swatch: '#1a3020' },
  { value: 'black', label: 'Noir', swatch: '#111827' },
  { value: 'navy', label: 'Bleu marine', swatch: '#1e3a5f' },
  { value: 'gold', label: 'Or institutionnel', swatch: '#b88345' },
] as const

export const serviceFontOptions = ['Georgia', 'Times New Roman', 'Garamond', 'Arial', 'Lato'] as const

export const serviceFontSizeOptions = ['10', '11', '12', '14', '16'] as const

export const serviceTips = {
  title: 'Bon à savoir',
  items: [
    'Les services sélectionnés peuvent influencer les délais et le montant final.',
    'Votre conseiller confirmera la faisabilité technique pour chaque option.',
    'Les fichiers (logo, spécimens) pourront être finalisés après le devis.',
  ],
} as const

export const deliveryModes: {
  id: DeliveryModeId
  title: string
  description: string
  icon: Component
}[] = [
  {
    id: 'single',
    title: 'Livraison à une adresse',
    description: 'Livraison à un seul site',
    icon: Truck,
  },
  {
    id: 'multi',
    title: 'Livraison à plusieurs sites',
    description: 'Répartition sur plusieurs adresses',
    icon: MapPinned,
  },
  {
    id: 'partner',
    title: 'Retrait dans un point partenaire',
    description: 'Retrait dans nos points de distribution',
    icon: PackageOpen,
  },
  {
    id: 'pickup',
    title: 'Enlèvement par votre institution',
    description: 'Vous organisez l’enlèvement',
    icon: Warehouse,
  },
  {
    id: 'international',
    title: 'Livraison internationale',
    description: 'Hors de votre pays',
    icon: Globe2,
  },
]

export const deliveryConstraintOptions: {
  id: DeliveryConstraintId
  label: string
}[] = [
  { id: 'reception_service', label: 'Service de réception disponible' },
  { id: 'daytime_only', label: 'Livraison en journée uniquement' },
  { id: 'truck_access', label: 'Accès facile pour camion' },
  { id: 'ground_floor', label: 'Livraison au rez-de-chaussée' },
  { id: 'handling', label: 'Besoin de manutention' },
  { id: 'split_delivery', label: 'Livraison fractionnée possible' },
  { id: 'appointment', label: 'Prise de rendez-vous' },
  { id: 'other', label: 'Autre contrainte' },
]

export const quoteDistrictsByCity: Record<string, string[]> = {
  Kinshasa: ['Gombe', 'Lingwala', 'Kalamu', 'Ngaliema', 'Limete', 'Autre'],
  Lubumbashi: ['Kampemba', 'Kenya', 'Annexe', 'Autre'],
  Goma: ['Goma', 'Karisimbi', 'Autre'],
  Dakar: ['Plateau', 'Almadies', 'Médina', 'Autre'],
  Abidjan: ['Plateau', 'Cocody', 'Yopougon', 'Autre'],
}

export const deliveryTips = {
  title: 'Bon à savoir',
  items: [
    'Une adresse précise accélère la confirmation des délais et des frais.',
    'Signalez les contraintes d’accès (camion, étages, horaires) dès maintenant.',
    'La répartition multi-sites peut être affinée avec votre conseiller.',
  ],
} as const

export const budgetAvailabilityOptions = [
  { id: 'maximum' as const, label: 'Budget maximum' },
  { id: 'indicative' as const, label: 'Budget indicatif' },
  { id: 'flexible' as const, label: 'Budget flexible' },
  { id: 'to_define' as const, label: 'À définir' },
]

export const budgetCurrencyOptions = [
  { id: 'CDF' as const, label: 'CDF — Franc congolais', suffix: 'CDF' },
  { id: 'FCFA' as const, label: 'FCFA — Franc CFA', suffix: 'FCFA' },
  { id: 'EUR' as const, label: 'EUR — Euro', suffix: '€' },
  { id: 'USD' as const, label: 'USD — Dollar américain', suffix: '$' },
]

export const fundingModeOptions: {
  id: FundingModeId
  label: string
  icon: Component
}[] = [
  { id: 'own_funds', label: 'Fonds propres', icon: PiggyBank },
  { id: 'public', label: 'Financement public', icon: Landmark },
  { id: 'donor', label: 'Bailleur de fonds', icon: Handshake },
  { id: 'education_project', label: 'Projet éducatif', icon: GraduationCap },
  { id: 'other', label: 'Autre', icon: CircleHelp },
]

export const paymentModeOptions: {
  id: PaymentModeId
  label: string
  icon: Component
}[] = [
  { id: 'bank_transfer', label: 'Virement bancaire', icon: Landmark },
  { id: 'card', label: 'Carte bancaire', icon: CreditCard },
  { id: 'mobile_money', label: 'Mobile Money', icon: Smartphone },
  { id: 'purchase_order', label: 'Bon de commande', icon: FileText },
  { id: 'partner', label: 'Paiement par partenaire', icon: Handshake },
  { id: 'installments', label: 'Paiement échelonné', icon: BadgePercent },
  { id: 'to_define', label: 'À déterminer', icon: CircleHelp },
]

export const purchaseOrderOptions = [
  { id: 'yes' as const, label: 'Oui, un bon de commande est requis' },
  { id: 'no' as const, label: 'Non, pas de bon de commande' },
  { id: 'sometimes' as const, label: 'Selon le montant / le marché' },
  { id: 'unknown' as const, label: 'Je ne sais pas encore' },
]

export const billingTips = {
  title: 'Bon à savoir',
  items: [
    'Ces informations restent confidentielles et servent uniquement à préparer le devis.',
    'Aucun paiement n’est effectué à cette étape.',
    'Votre conseiller pourra adapter la facturation à vos procédures internes.',
  ],
} as const

export const consentOptions: {
  id: keyof QuoteConsentState
  label: string
  required: boolean
}[] = [
  {
    id: 'accuracy',
    label: 'Je confirme que les informations fournies sont exactes et à jour.',
    required: true,
  },
  {
    id: 'contactAuth',
    label: 'J’autorise Afric-Educ à me contacter concernant cette demande de devis.',
    required: true,
  },
  {
    id: 'privacy',
    label: 'J’accepte la politique de confidentialité et le traitement de mes données.',
    required: true,
  },
  {
    id: 'marketing',
    label: 'Je souhaite recevoir des informations sur les nouveautés et offres institutionnelles (facultatif).',
    required: false,
  },
]

export const reviewTips = {
  title: 'Avant d’envoyer',
  items: [
    'Vérifiez chaque section : vous pouvez encore modifier les informations.',
    'Un accusé de réception avec numéro de référence vous sera envoyé par e-mail.',
    'Votre conseiller reviendra vers vous avec une proposition détaillée.',
  ],
} as const

export interface QuoteReviewCardData {
  step: number
  title: string
  icon: Component
  lines: string[]
  listItems?: string[]
  listExpandLabel?: string
}

function formatDateLabel(value: string) {
  if (!value)
    return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime()))
    return value
  return date.toLocaleDateString('fr-FR')
}

function formatAmountLabel(amount: string, currency: string) {
  const raw = amount.replace(/\s/g, '')
  if (!raw)
    return null
  const n = Number.parseFloat(raw.replace(',', '.'))
  if (!Number.isFinite(n))
    return `${amount} ${currency}`
  return `${Math.round(n).toLocaleString('fr-FR')} ${currency}`
}

export function buildQuoteAttachments(draft: InstitutionalQuoteDraft): QuoteAttachment[] {
  const items: QuoteAttachment[] = []
  const importFile = draft.bookSelection.import
  if (importFile.fileName) {
    items.push({
      id: 'import-file',
      name: importFile.fileName,
      sizeLabel: importFile.fileSizeLabel ?? '—',
      source: 'import',
    })
  }
  const logoOpts = draft.services.optionsByService.logo
  if (logoOpts?.logoFileName) {
    items.push({
      id: 'logo-file',
      name: logoOpts.logoFileName,
      sizeLabel: logoOpts.logoFileSizeLabel ?? '—',
      source: 'logo',
    })
  }
  for (const file of draft.attachments) {
    if (!items.some(item => item.name === file.name && item.source === file.source))
      items.push(file)
  }
  return items
}

export function buildReviewCards(draft: InstitutionalQuoteDraft): QuoteReviewCardData[] {
  const typeLabel = institutionTypeOptions.find(item => item.id === draft.institutionType)?.label
  const institutionLines = [
    draft.institution.organizationName || 'Institution non renseignée',
    [draft.institution.address, draft.institution.city, draft.institution.country].filter(Boolean).join(', '),
    draft.institution.adminReference ? `Réf. : ${draft.institution.adminReference}` : null,
    typeLabel ? `Type : ${typeLabel}` : null,
  ].filter(Boolean) as string[]

  const contactName = [draft.contact.firstName, draft.contact.lastName].filter(Boolean).join(' ')
  if (contactName || draft.contact.email || draft.contact.phone) {
    institutionLines.push(
      [contactName, draft.contact.email, draft.contact.phone].filter(Boolean).join(' · '),
    )
  }

  const method = bookSelectionMethods.find(item => item.id === draft.bookSelection.method)
  const refCount = draft.quantities.lines.length
    || (draft.bookSelection.method === 'catalogue'
      ? draft.bookSelection.selectedBooks.length
      : draft.bookSelection.method === 'import'
        ? draft.bookSelection.import.rows.length
        : draft.bookSelection.need.details.trim() ? 1 : 0)
  const bookLines = [
    `${refCount} référence${refCount > 1 ? 's' : ''} sélectionnée${refCount > 1 ? 's' : ''}`,
    method ? `Méthode : ${method.title}` : 'Méthode non choisie',
  ]
  if (draft.bookSelection.method === 'import' && draft.bookSelection.import.fileName)
    bookLines.push(draft.bookSelection.import.fileName)
  if (draft.bookSelection.method === 'need' && draft.bookSelection.need.approximateCount)
    bookLines.push(`Volume approximatif : ${draft.bookSelection.need.approximateCount}`)

  const totalQty = draft.quantities.lines.reduce((sum, line) => sum + line.quantity, 0)
  const sites = new Set(draft.quantities.lines.map(line => line.siteId).filter(Boolean))
  const siteCount = draft.delivery.mode === 'multi'
    ? Math.max(draft.delivery.sites.length, sites.size, 1)
    : Math.max(sites.size, 1)
  const quantityLines = [
    `${totalQty.toLocaleString('fr-FR')} exemplaire${totalQty > 1 ? 's' : ''} au total`,
    `${refCount} référence${refCount > 1 ? 's' : ''}`,
    `${siteCount} site${siteCount > 1 ? 's' : ''} de livraison`,
  ]

  const selectedServices = complementaryServices.filter(service =>
    draft.services.selectedIds.includes(service.id),
  )
  const serviceTitles = selectedServices.map(service => service.title)
  const serviceLines: string[] = []
  if (!selectedServices.length)
    serviceLines.push('Aucun service complémentaire')
  if (draft.services.specificNotes.trim())
    serviceLines.push('Notes spécifiques renseignées')

  const mode = deliveryModes.find(item => item.id === draft.delivery.mode)
  const deliveryLines: string[] = []
  if (mode)
    deliveryLines.push(mode.title)
  if (draft.delivery.mode === 'multi' && draft.delivery.sites.length) {
    const primary = draft.delivery.sites.find(site => site.isPrimary) ?? draft.delivery.sites[0]
    deliveryLines.push(primary.name)
    deliveryLines.push(`${draft.delivery.sites.length} site${draft.delivery.sites.length > 1 ? 's' : ''}`)
  }
  else if (draft.delivery.address.address || draft.delivery.address.city) {
    deliveryLines.push(
      [draft.delivery.address.address, draft.delivery.address.city, draft.delivery.address.country]
        .filter(Boolean)
        .join(', '),
    )
  }
  const desired = formatDateLabel(draft.delivery.desiredDate)
  if (desired)
    deliveryLines.push(`Date souhaitée : ${desired}`)
  const constraints = deliveryConstraintOptions
    .filter(item => draft.delivery.constraints.includes(item.id))
    .map(item => item.label)
  if (constraints.length)
    deliveryLines.push(constraints.slice(0, 3).join(' · '))
  if (!deliveryLines.length)
    deliveryLines.push('Livraison non renseignée')

  const budget = draft.billing.budget
  const billingLines: string[] = []
  const amount = formatAmountLabel(budget.maxAmount || budget.range, budget.currency)
  if (amount)
    billingLines.push(`Budget : ${amount}`)
  billingLines.push(`Devise : ${budget.currency}`)
  const funding = fundingModeOptions
    .filter(item => budget.fundingModes.includes(item.id))
    .map(item => item.label)
  if (funding.length)
    billingLines.push(`Financement : ${funding.join(', ')}`)
  const payments = paymentModeOptions
    .filter(item => draft.billing.payment.modes.includes(item.id))
    .map(item => item.label)
  if (payments.length)
    billingLines.push(`Paiement : ${payments.join(', ')}`)
  if (draft.billing.billing.legalName)
    billingLines.push(`Facturation : ${draft.billing.billing.legalName}`)
  if (!billingLines.length)
    billingLines.push('Préférences financières à préciser')

  const visibleServices = serviceTitles
  const hiddenCount = Math.max(0, serviceTitles.length - 4)

  return [
    {
      step: 1,
      title: '1. Votre institution',
      icon: Building2,
      lines: institutionLines,
    },
    {
      step: 2,
      title: '2. Sélection des livres',
      icon: BookOpen,
      lines: bookLines,
    },
    {
      step: 3,
      title: '3. Quantités et répartition',
      icon: Package,
      lines: quantityLines,
    },
    {
      step: 4,
      title: '4. Services complémentaires',
      icon: Stamp,
      lines: serviceLines,
      listItems: visibleServices,
      listExpandLabel: hiddenCount > 0
        ? `Voir ${hiddenCount} autre${hiddenCount > 1 ? 's' : ''} service${hiddenCount > 1 ? 's' : ''}`
        : undefined,
    },
    {
      step: 5,
      title: '5. Livraison et contraintes',
      icon: Truck,
      lines: deliveryLines,
    },
    {
      step: 6,
      title: '6. Budget, facturation et paiement',
      icon: Wallet,
      lines: billingLines,
    },
  ]
}

export function computeQuoteTotals(draft: InstitutionalQuoteDraft) {
  const references = draft.quantities.lines.length
    || (draft.bookSelection.method === 'catalogue'
      ? draft.bookSelection.selectedBooks.length
      : draft.bookSelection.method === 'import'
        ? draft.bookSelection.import.rows.length
        : draft.bookSelection.need.details.trim() ? 1 : 0)

  const quantity = draft.quantities.lines.length
    ? draft.quantities.lines.reduce((sum, line) => sum + line.quantity, 0)
    : draft.bookSelection.method === 'catalogue'
      ? draft.bookSelection.selectedBooks.reduce((sum, item) => sum + item.quantity, 0)
      : draft.bookSelection.method === 'import'
        ? draft.bookSelection.import.rows.reduce((sum, row) => sum + row.quantity, 0)
        : Number.parseInt(draft.bookSelection.need.approximateCount.replace(/\s/g, ''), 10) || 0

  const services = draft.services.selectedIds.length

  let deliveryAddresses = 0
  if (draft.delivery.mode === 'multi')
    deliveryAddresses = Math.max(draft.delivery.sites.length, 1)
  else if (draft.delivery.mode)
    deliveryAddresses = 1

  const estimate = draft.quantities.lines.reduce(
    (sum, line) => sum + line.quantity * line.unitPrice,
    0,
  )
  const currency = draft.billing.budget.currency
    || draft.quantities.currency
    || 'FCFA'
  const estimateLabel = estimate > 0
    ? formatProvisionalEstimate(estimate, currency)
    : '—'

  return {
    references,
    quantity,
    services,
    deliveryAddresses,
    estimate,
    estimateLabel,
    currency,
  }
}

/** unitPrice lines are stored in FCFA; convert for display when needed. */
export function formatProvisionalEstimate(amountFcfa: number, currency: string) {
  const suffix = budgetCurrencyOptions.find(item => item.id === currency)?.suffix
    ?? (currency === 'EUR' ? '€' : currency)

  if (currency === 'EUR')
    return `${Math.round(amountFcfa / 650).toLocaleString('fr-FR')} ${suffix}`
  if (currency === 'USD')
    return `${Math.round(amountFcfa / 600).toLocaleString('fr-FR')} ${suffix}`

  return `${amountFcfa.toLocaleString('fr-FR')} ${suffix}`
}

export function createQuoteReference() {
  const now = new Date()
  const y = now.getFullYear()
  const m = String(now.getMonth() + 1).padStart(2, '0')
  const d = String(now.getDate()).padStart(2, '0')
  const seq = String(Math.floor(Math.random() * 90000) + 10000)
  return `DEV-${y}-${m}-${d}-${seq}`
}

export const confirmationNextSteps = [
  {
    id: 'analyse',
    title: 'Analyse de votre demande',
    description: 'Notre équipe institutions examine vos besoins et vos contraintes.',
  },
  {
    id: 'response',
    title: 'Réponse personnalisée',
    description: 'Vous recevez une proposition adaptée sous 24 à 48 h ouvrées.',
  },
  {
    id: 'support',
    title: 'Accompagnement dédié',
    description: 'Un conseiller reste disponible pour affiner votre devis.',
  },
] as const

export const bookSelectionMethods: {
  id: BookSelectionMethodId
  letter: string
  title: string
  description: string
  icon: Component
}[] = [
  {
    id: 'catalogue',
    letter: 'A',
    title: 'Rechercher dans le catalogue',
    description: 'Parcourez les références disponibles et ajoutez-les à votre demande.',
    icon: Search,
  },
  {
    id: 'import',
    letter: 'B',
    title: 'Importer une liste',
    description: 'Déposez un fichier Excel, CSV ou Word contenant vos ouvrages.',
    icon: FileUp,
  },
  {
    id: 'need',
    letter: 'C',
    title: 'Décrire un besoin',
    description: 'Expliquez votre besoin : nous vous proposerons une sélection adaptée.',
    icon: PencilLine,
  },
]

export const catalogueFilterOptions = {
  subject: ['Histoire', 'Littérature', 'Sciences', 'Économie', 'Jeunesse', 'Langues'],
  category: ['Essai', 'Roman', 'Manuel', 'Documentaire', 'Poésie', 'Album'],
  level: ['Primaire', 'Collège', 'Lycée', 'Université', 'Grand public'],
  language: ['Français', 'Anglais', 'Arabe', 'Portugais', 'Lingala', 'Wolof'],
  country: ['RDC', 'Sénégal', 'Côte d’Ivoire', 'Cameroun', 'Mali', 'France'],
  format: ['Broché', 'Relié', 'Poche', 'Numérique', 'Grand format'],
} as const

export const catalogueBooksMock: QuoteCatalogueBook[] = [
  {
    id: 'bk-1',
    title: 'L’Afrique expliquée aux jeunes',
    author: 'Tidiane N’Diaye',
    isbn: '978-2-07-012345-6',
    format: 'Broché',
    priceLabel: '18,50 €',
    availability: 'in_stock',
    subject: 'Histoire',
    category: 'Essai',
    level: 'Lycée',
    language: 'Français',
    country: 'Sénégal',
    coverTone: '#1a3020',
  },
  {
    id: 'bk-2',
    title: 'Contes et légendes du fleuve Congo',
    author: 'Amba Kazi-Toure',
    isbn: '978-2-330-045678-9',
    format: 'Relié',
    priceLabel: '22,00 €',
    availability: 'in_stock',
    subject: 'Littérature',
    category: 'Album',
    level: 'Primaire',
    language: 'Français',
    country: 'RDC',
    coverTone: '#b88345',
  },
  {
    id: 'bk-3',
    title: 'Économie du développement africain',
    author: 'Fatou Diop',
    isbn: '978-2-13-098765-4',
    format: 'Broché',
    priceLabel: '29,90 €',
    availability: 'on_order',
    subject: 'Économie',
    category: 'Essai',
    level: 'Université',
    language: 'Français',
    country: 'Sénégal',
    coverTone: '#0f172a',
  },
  {
    id: 'bk-4',
    title: 'Mathématiques actives — Cycle 3',
    author: 'Collectif pédagogique',
    isbn: '978-2-401-112233-4',
    format: 'Grand format',
    priceLabel: '16,40 €',
    availability: 'in_stock',
    subject: 'Sciences',
    category: 'Manuel',
    level: 'Primaire',
    language: 'Français',
    country: 'Côte d’Ivoire',
    coverTone: '#1d4ed8',
  },
  {
    id: 'bk-5',
    title: 'Poèmes pour demain',
    author: 'Léonora Miano',
    isbn: '978-2-07-278901-2',
    format: 'Poche',
    priceLabel: '9,90 €',
    availability: 'limited',
    subject: 'Littérature',
    category: 'Poésie',
    level: 'Grand public',
    language: 'Français',
    country: 'Cameroun',
    coverTone: '#7c2d12',
  },
  {
    id: 'bk-6',
    title: 'Sciences de la vie et de la Terre',
    author: 'Ibrahim Konaté',
    isbn: '978-2-7011-556677-8',
    format: 'Broché',
    priceLabel: '24,50 €',
    availability: 'in_stock',
    subject: 'Sciences',
    category: 'Manuel',
    level: 'Collège',
    language: 'Français',
    country: 'Mali',
    coverTone: '#065f46',
  },
]

export const importRecommendedColumns = [
  'ISBN (recommandé)',
  'Titre du livre *',
  'Auteur',
  'Quantité *',
  'Éditeur',
  'Format',
] as const

export const importPreviewMockRows = [
  {
    isbn: '978-2-07-012345-6',
    title: 'L’Afrique expliquée aux jeunes',
    author: 'Tidiane N’Diaye',
    quantity: 25,
    publisher: 'Gallimard',
    format: 'Broché',
  },
  {
    isbn: '978-2-330-045678-9',
    title: 'Contes et légendes du fleuve Congo',
    author: 'Amba Kazi-Toure',
    quantity: 40,
    publisher: 'Présence Africaine',
    format: 'Relié',
  },
  {
    isbn: '978-2-13-098765-4',
    title: 'Économie du développement africain',
    author: 'Fatou Diop',
    quantity: 12,
    publisher: 'PUF',
    format: 'Broché',
  },
  {
    isbn: '978-2-401-112233-4',
    title: 'Mathématiques actives — Cycle 3',
    author: 'Collectif pédagogique',
    quantity: 60,
    publisher: 'Hatier Afrique',
    format: 'Grand format',
  },
]

export const needObjectiveOptions = [
  'Enrichir le fonds documentaire',
  'Soutenir les programmes scolaires',
  'Recherche et études',
  'Animation culturelle',
  'Formation professionnelle',
  'Lecture publique / jeunesse',
] as const

export const bookSelectionTips: Record<BookSelectionMethodId, { title: string, items: string[] }> = {
  catalogue: {
    title: 'Conseil',
    items: [
      'Utilisez les filtres pour cibler rapidement les niveaux et matières.',
      'Ajoutez d’abord les titres prioritaires : les quantités se précisent à l’étape suivante.',
      'Le prix indicatif est une estimation hors remises volume.',
    ],
  },
  import: {
    title: 'Conseils pour l’import',
    items: [
      'Privilégiez un fichier avec en-têtes clairs (ISBN, Titre, Quantité…).',
      'Un ISBN valide accélère le rapprochement catalogue.',
      'Vous pourrez corriger les lignes après import.',
      'Formats acceptés : Excel, CSV, PDF ou DOCX.',
    ],
  },
  need: {
    title: 'Conseils pour décrire votre besoin',
    items: [
      'Précisez le public et le niveau scolaire visés.',
      'Indiquez un volume et un budget approximatifs.',
      'Mentionnez les contraintes (langue, format, délais).',
      'Plus la description est claire, plus la proposition sera pertinente.',
    ],
  },
}

export const quoteValueProps = [
  {
    id: 'response',
    label: 'Réponse sous 24 à 48 heures',
  },
  {
    id: 'free',
    label: 'Devis sans engagement',
  },
  {
    id: 'advisor',
    label: 'Accompagnement par un conseiller',
  },
] as const
