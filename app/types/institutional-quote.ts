export type QuoteStepId =
  | 'institution'
  | 'books'
  | 'quantities'
  | 'services'
  | 'delivery'
  | 'billing'
  | 'review'

export type InstitutionTypeId =
  | 'library'
  | 'primary_school'
  | 'secondary_school'
  | 'university'
  | 'training_center'
  | 'company'
  | 'ngo'
  | 'ministry'
  | 'bookstore'
  | 'other'

export interface QuoteInstitutionInfo {
  organizationName: string
  country: string
  region: string
  city: string
  address: string
  website: string
  adminReference: string
}

export interface QuoteContactPerson {
  firstName: string
  lastName: string
  jobTitle: string
  email: string
  phone: string
  secondaryPhone: string
}

export type BookSelectionMethodId = 'catalogue' | 'import' | 'need'

export interface QuoteCatalogueBook {
  id: string
  title: string
  author: string
  isbn: string
  format: string
  priceLabel: string
  availability: 'in_stock' | 'on_order' | 'limited'
  subject: string
  category: string
  level: string
  language: string
  country: string
  coverTone: string
}

export interface QuoteSelectedCatalogueItem {
  bookId: string
  quantity: number
}

export interface QuoteImportedRow {
  isbn: string
  title: string
  author: string
  quantity: number
  publisher: string
  format: string
}

export interface QuoteImportState {
  fileName: string | null
  fileSizeLabel: string | null
  rows: QuoteImportedRow[]
}

export interface QuoteNeedDescription {
  schoolLevel: string
  subject: string
  ageRange: string
  language: string
  country: string
  format: string
  approximateCount: string
  estimatedBudget: string
  objectives: string[]
  details: string
}

export interface QuoteBookSelection {
  method: BookSelectionMethodId | null
  catalogueQuery: string
  catalogueFilters: {
    subject: string
    category: string
    level: string
    language: string
    country: string
    format: string
  }
  selectedBooks: QuoteSelectedCatalogueItem[]
  import: QuoteImportState
  need: QuoteNeedDescription
}

export interface QuoteQuantityLine {
  id: string
  title: string
  author: string
  format: string
  quantity: number
  siteId: string
  comment: string
  coverTone: string
  unitPrice: number
}

export interface QuoteQuantityState {
  currency: 'FCFA' | 'EUR'
  lines: QuoteQuantityLine[]
  selectedLineId: string | null
}

export type QuoteServiceId =
  | 'packaging'
  | 'pod'
  | 'logo'
  | 'exlibris'
  | 'stamp'
  | 'isbn'
  | 'labeling'
  | 'catalog'
  | 'digital'
  | 'training'

export interface QuoteServiceOptions {
  logoFileName: string | null
  logoFileSizeLabel: string | null
  placement: string
  printColor: string
  bookCount: number | null
  institutionalText: string
  fontFamily: string
  fontSize: string
  packagingStyle: string
  podFormat: string
  catalogStandard: string
  trainingFormat: string
  notes: string
}

export interface QuoteServicesState {
  selectedIds: QuoteServiceId[]
  activeServiceId: QuoteServiceId | null
  optionsByService: Partial<Record<QuoteServiceId, QuoteServiceOptions>>
  specificNotes: string
}

export type DeliveryModeId =
  | 'single'
  | 'multi'
  | 'partner'
  | 'pickup'
  | 'international'

export type DeliveryConstraintId =
  | 'reception_service'
  | 'daytime_only'
  | 'truck_access'
  | 'ground_floor'
  | 'handling'
  | 'split_delivery'
  | 'appointment'
  | 'other'

export interface QuoteDeliveryAddress {
  country: string
  region: string
  city: string
  district: string
  address: string
  postalCode: string
  landmark: string
  contactName: string
  contactPhone: string
}

export interface QuoteDeliverySite {
  id: string
  name: string
  address: string
  bookCount: number
  contact: string
  isPrimary: boolean
}

export interface QuoteDeliveryState {
  mode: DeliveryModeId | null
  address: QuoteDeliveryAddress
  constraints: DeliveryConstraintId[]
  desiredDate: string
  deadlineDate: string
  comments: string
  sites: QuoteDeliverySite[]
}

export type BudgetAvailabilityId =
  | 'maximum'
  | 'indicative'
  | 'flexible'
  | 'to_define'

export type BudgetCurrencyId = 'CDF' | 'FCFA' | 'EUR' | 'USD'

export type FundingModeId =
  | 'own_funds'
  | 'public'
  | 'donor'
  | 'education_project'
  | 'other'

export type PaymentModeId =
  | 'bank_transfer'
  | 'card'
  | 'mobile_money'
  | 'purchase_order'
  | 'partner'
  | 'installments'
  | 'to_define'

export type PurchaseOrderRequirementId =
  | 'yes'
  | 'no'
  | 'sometimes'
  | 'unknown'

export interface QuoteBudgetInfo {
  availability: BudgetAvailabilityId | null
  currency: BudgetCurrencyId
  maxAmount: string
  range: string
  fundingModes: FundingModeId[]
  fundingNotes: string
}

export interface QuoteBillingInfo {
  legalName: string
  taxId: string
  adminReference: string
  billingAddress: string
  billingEmail: string
  officePhone: string
  paymentContactName: string
  paymentContactTitle: string
  paymentContactEmail: string
}

export interface QuotePaymentPreferences {
  modes: PaymentModeId[]
  purchaseOrder: PurchaseOrderRequirementId | null
  comments: string
}

export interface QuoteBillingState {
  budget: QuoteBudgetInfo
  billing: QuoteBillingInfo
  payment: QuotePaymentPreferences
}

export interface QuoteConsentState {
  accuracy: boolean
  contactAuth: boolean
  privacy: boolean
  marketing: boolean
}

export interface QuoteAttachment {
  id: string
  name: string
  sizeLabel: string
  source: 'import' | 'logo' | 'upload'
}

export interface QuoteSubmissionSummary {
  references: number
  quantity: number
  services: number
  deliveryAddresses: number
  estimateLabel: string
  currency: string
}

export interface QuoteSubmissionSnapshot {
  reference: string
  email: string
  organizationName: string
  submittedAt: string
  summary: QuoteSubmissionSummary
}

export interface InstitutionalQuoteDraft {
  currentStep: number
  institutionType: InstitutionTypeId | null
  institution: QuoteInstitutionInfo
  contact: QuoteContactPerson
  bookSelection: QuoteBookSelection
  quantities: QuoteQuantityState
  services: QuoteServicesState
  delivery: QuoteDeliveryState
  billing: QuoteBillingState
  consents: QuoteConsentState
  attachments: QuoteAttachment[]
  updatedAt: string | null
}

export interface QuoteStepMeta {
  id: QuoteStepId
  number: string
  title: string
  subtitle: string
}

export interface InstitutionTypeOption {
  id: InstitutionTypeId
  label: string
}
