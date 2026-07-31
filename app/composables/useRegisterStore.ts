import type {
  AccountCategory,
  IndividualType,
  OrganizationType,
} from '@/data/register-page'
import { registerProgressSteps } from '@/data/register-page'

export interface RegisterAccountFields {
  firstName: string
  lastName: string
  organizationName: string
  responsibleName: string
  email: string
  professionalEmail: string
  phone: string
  country: string
  city: string
  website: string
  password: string
  passwordConfirmation: string
  acceptTerms: boolean
  acceptPrivacy: boolean
}

export interface RegisterAuthorFields {
  penName: string
  mainWritingLanguage: string
  mainBookCategory: string
}

function createEmptyAccount(): RegisterAccountFields {
  return {
    firstName: '',
    lastName: '',
    organizationName: '',
    responsibleName: '',
    email: '',
    professionalEmail: '',
    phone: '',
    country: '',
    city: '',
    website: '',
    password: '',
    passwordConfirmation: '',
    acceptTerms: false,
    acceptPrivacy: false,
  }
}

export const registerStore = reactive({
  currentStep: 1,
  accountCategory: null as AccountCategory | null,
  individualType: null as IndividualType | null,
  organizationType: null as OrganizationType | null,
  account: createEmptyAccount(),
  author: {
    penName: '',
    mainWritingLanguage: '',
    mainBookCategory: '',
  } satisfies RegisterAuthorFields,
  reader: {
    interests: [] as string[],
  },
  documents: [] as File[],
  isSubmitting: false,
  verificationStatus: null as 'pending' | 'approved' | null,

  get totalSteps() {
    return this.accountCategory === 'organization' ? 6 : 5
  },

  get progressLabels() {
    return this.accountCategory === 'organization'
      ? [...registerProgressSteps.organization]
      : [...registerProgressSteps.individual]
  },

  get isOrganization() {
    return this.accountCategory === 'organization'
  },

  get isAuthorProfile() {
    return this.individualType === 'author' || this.individualType === 'reader_author'
  },

  get isReaderProfile() {
    return this.individualType === 'reader' || this.individualType === 'reader_author'
  },

  get currentStepKey() {
    if (this.currentStep === 1)
      return 'profile'
    if (this.currentStep === 2)
      return this.isOrganization ? 'organization-type' : 'individual-type'
    if (this.currentStep === 3)
      return 'account'
    if (this.currentStep === 4)
      return this.isOrganization ? 'organization-info' : 'preferences'
    if (this.currentStep === 5)
      return this.isOrganization ? 'documents' : 'success'
    return 'success'
  },

  setAccountCategory(value: AccountCategory) {
    this.accountCategory = value
    if (value === 'individual')
      this.organizationType = null
    else
      this.individualType = null
  },

  setIndividualType(value: IndividualType) {
    this.individualType = value
  },

  setOrganizationType(value: OrganizationType) {
    this.organizationType = value
  },

  toggleInterest(interest: string) {
    const index = this.reader.interests.indexOf(interest)
    if (index >= 0)
      this.reader.interests.splice(index, 1)
    else
      this.reader.interests.push(interest)
  },

  addDocuments(files: FileList | File[]) {
    this.documents = [...this.documents, ...Array.from(files)]
  },

  removeDocument(index: number) {
    this.documents.splice(index, 1)
  },

  nextStep() {
    if (this.currentStep < this.totalSteps)
      this.currentStep += 1
  },

  previousStep() {
    if (this.currentStep > 1)
      this.currentStep -= 1
  },

  reset() {
    this.currentStep = 1
    this.accountCategory = null
    this.individualType = null
    this.organizationType = null
    this.account = createEmptyAccount()
    this.author = {
      penName: '',
      mainWritingLanguage: '',
      mainBookCategory: '',
    }
    this.reader = { interests: [] }
    this.documents = []
    this.isSubmitting = false
    this.verificationStatus = null
  },

  async submitRegistration() {
    this.isSubmitting = true
    try {
      if (this.isOrganization)
        this.verificationStatus = 'pending'

      await new Promise(resolve => setTimeout(resolve, 600))
      this.nextStep()
    }
    finally {
      this.isSubmitting = false
    }
  },
})

export function useRegisterStore() {
  return registerStore
}
