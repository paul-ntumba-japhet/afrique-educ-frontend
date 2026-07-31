import type { AccountCategory, IndividualType, OrganizationType } from '@/data/register-page'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEmail(value: string) {
  return EMAIL_REGEX.test(value.trim())
}

export function validatePassword(value: string) {
  return value.length >= 8
}

export function validateProfileStep(category: AccountCategory | null) {
  if (!category)
    return 'Veuillez sélectionner un profil.'
  return null
}

export function validateIndividualTypeStep(type: IndividualType | null) {
  if (!type)
    return 'Veuillez sélectionner un type de compte.'
  return null
}

export function validateOrganizationTypeStep(type: OrganizationType | null) {
  if (!type)
    return 'Veuillez sélectionner un type d’organisation.'
  return null
}

export function validateIndividualAccountStep(account: {
  firstName: string
  lastName: string
  email: string
  country: string
  password: string
  passwordConfirmation: string
  acceptTerms: boolean
  acceptPrivacy: boolean
}) {
  const errors: Record<string, string> = {}

  if (!account.firstName.trim())
    errors.firstName = 'Le prénom est obligatoire.'
  if (!account.lastName.trim())
    errors.lastName = 'Le nom est obligatoire.'
  if (!account.email.trim())
    errors.email = 'L’email est obligatoire.'
  else if (!validateEmail(account.email))
    errors.email = 'Adresse email invalide.'
  if (!account.country)
    errors.country = 'Le pays est obligatoire.'
  if (!account.password)
    errors.password = 'Le mot de passe est obligatoire.'
  else if (!validatePassword(account.password))
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères.'
  if (account.password !== account.passwordConfirmation)
    errors.passwordConfirmation = 'Les mots de passe ne correspondent pas.'
  if (!account.acceptTerms)
    errors.acceptTerms = 'Vous devez accepter les conditions d’utilisation.'
  if (!account.acceptPrivacy)
    errors.acceptPrivacy = 'Vous devez accepter la politique de confidentialité.'

  return errors
}

export function validateOrganizationAccountStep(account: {
  organizationName: string
  responsibleName: string
  professionalEmail: string
  phone: string
  country: string
  password: string
  passwordConfirmation: string
  acceptTerms: boolean
  acceptPrivacy: boolean
}) {
  const errors: Record<string, string> = {}

  if (!account.organizationName.trim())
    errors.organizationName = 'Le nom de l’organisation est obligatoire.'
  if (!account.responsibleName.trim())
    errors.responsibleName = 'Le nom du responsable est obligatoire.'
  if (!account.professionalEmail.trim())
    errors.professionalEmail = 'L’email professionnel est obligatoire.'
  else if (!validateEmail(account.professionalEmail))
    errors.professionalEmail = 'Adresse email invalide.'
  if (!account.phone.trim())
    errors.phone = 'Le téléphone est obligatoire.'
  if (!account.country)
    errors.country = 'Le pays est obligatoire.'
  if (!account.password)
    errors.password = 'Le mot de passe est obligatoire.'
  else if (!validatePassword(account.password))
    errors.password = 'Le mot de passe doit contenir au moins 8 caractères.'
  if (account.password !== account.passwordConfirmation)
    errors.passwordConfirmation = 'Les mots de passe ne correspondent pas.'
  if (!account.acceptTerms)
    errors.acceptTerms = 'Vous devez accepter les conditions d’utilisation.'
  if (!account.acceptPrivacy)
    errors.acceptPrivacy = 'Vous devez accepter la politique de confidentialité.'

  return errors
}

export function hasValidationErrors(errors: Record<string, string>) {
  return Object.keys(errors).length > 0
}
