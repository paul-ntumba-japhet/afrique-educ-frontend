import imgJeunesse from '~/assets/images/categories/jeunesse.webp'
import imgLitterature from '~/assets/images/categories/litterature-africaine.webp'
import imgScolaires from '~/assets/images/categories/livres-scolaires.webp'
import imgUniversitaires from '~/assets/images/categories/livres-universitaires.webp'
import imgReligion from '~/assets/images/categories/religion-spiritualite.webp'
import imgDeveloppement from '~/assets/images/explorer/tendances/romans_inspirants.png'
import svgBooksStack from '~/assets/images/categories/books-svgrepo-com.svg'
import svgHeadphones from '~/assets/images/categories/headphones-audio-sound-svgrepo-com.svg'
import svgNewspaper from '~/assets/images/categories/newspapers-and-magazines-svgrepo-com.svg'
import svgOpenBook from '~/assets/images/categories/open-book-svgrepo-com.svg'
import svgTablet from '~/assets/images/categories/tablet-material-4-svgrepo-com.svg'
import imgCivilisations from '~/assets/images/categories/civilisations-africaines.webp'
import imgHeros from '~/assets/images/categories/heros-africains.webp'
import imgLangues from '~/assets/images/categories/langues-africaines.webp'
import imgLitteratureCongolaise from '~/assets/images/categories/litterature-congolaise.webp'
import imgRoyaumeKongo from '~/assets/images/categories/royaume-kongo.webp'
import imgTraditions from '~/assets/images/categories/traditions-coutumes.webp'
import imgEcoles from '~/assets/images/categories/ecoles.jpg'
import imgUniversites from '~/assets/images/categories/universites.jpg'
import imgBibliotheques from '~/assets/images/categories/bibliotheques2.jpg'
import imgCentresFormation from '~/assets/images/categories/centre-formation.jpg'
import imgAlainMabanckou from '~/assets/images/categories/alain-mabanckou.jpg'
import imgAlainMabanckouBook from '~/assets/images/categories/alain-mabanckou-book.avif'
import imgScholastiqueMukasonga from '~/assets/images/categories/scholastique-mukasonga.avif'
import imgScholastiqueMukasongaBook from '~/assets/images/categories/scholastique-mukasonga-book.png'
import imgChimamandaAdichie from '~/assets/images/categories/chimamanda-adichie.jpg'
import imgChimamandaBook from '~/assets/images/categories/chimamanda-book.webp'
import imgGaelFaye from '~/assets/images/categories/gael-faye.jfif'
import imgGaelFayeBook from '~/assets/images/categories/gael-faye-book.avif'
import imgHenriLopes from '~/assets/images/categories/henri-lopes.jpg'
import imgHenriLopesBook from '~/assets/images/categories/henri-lopes-book.avif'
import imgTrouvezLivre from '~/assets/images/categories/trouvez-livre.png'

export type MainCategoryIcon =
  | 'GraduationCap'
  | 'BookOpenCheck'
  | 'Feather'
  | 'Baby'
  | 'ShieldCheck'
  | 'BookMarked'

export interface MainCategory {
  title: string
  slug: string
  image: string
  icon: MainCategoryIcon
  iconTone: 'gold' | 'copper' | 'violet' | 'cyan' | 'emerald' | 'amber'
  items: string[]
  href: string
}

export const mainCategories: MainCategory[] = [
  {
    title: 'Livres scolaires',
    slug: 'livres-scolaires',
    image: imgScolaires,
    icon: 'GraduationCap',
    iconTone: 'gold',
    items: ['Primaire', 'Collège', 'Lycée'],
    href: '/categorie/livres-scolaires',
  },
  {
    title: 'Livres universitaires',
    slug: 'livres-universitaires',
    image: imgUniversitaires,
    icon: 'BookOpenCheck',
    iconTone: 'copper',
    items: ['Informatique', 'Médecine', 'Droit', 'Économie'],
    href: '/categorie/livres-universitaires',
  },
  {
    title: 'Littérature africaine',
    slug: 'litterature-africaine',
    image: imgLitterature,
    icon: 'Feather',
    iconTone: 'violet',
    items: ['Romans africains', 'Poésie africaine', 'Théâtre africain', 'Contes et légendes'],
    href: '/categorie/litterature-africaine',
  },
  {
    title: 'Jeunesse',
    slug: 'jeunesse',
    image: imgJeunesse,
    icon: 'Baby',
    iconTone: 'cyan',
    items: ['Albums illustrés', 'Premières lectures', 'Bandes dessinées', 'Livres éducatifs'],
    href: '/categorie/jeunesse',
  },
  {
    title: 'Développement personnel',
    slug: 'developpement-personnel',
    image: imgDeveloppement,
    icon: 'ShieldCheck',
    iconTone: 'emerald',
    items: ['Leadership', 'Productivité', 'Entrepreneuriat', 'Finance personnelle'],
    href: '/categorie/developpement-personnel',
  },
  {
    title: 'Religion et spiritualité',
    slug: 'religion-spiritualite',
    image: imgReligion,
    icon: 'BookMarked',
    iconTone: 'amber',
    items: ['Bible', 'Études bibliques', 'Histoire religieuse', 'Théologie'],
    href: '/categorie/religion-spiritualite',
  },
]

export type ThemeCategoryIcon =
  | 'Cpu'
  | 'ChartNoAxesCombined'
  | 'Microscope'
  | 'Palette'
  | 'Languages'
  | 'Landmark'

export interface ThemeCategory {
  title: string
  slug: string
  icon: ThemeCategoryIcon
  items: string[]
  href: string
}

export const themeCategories: ThemeCategory[] = [
  {
    title: 'Technologie',
    slug: 'technologie',
    icon: 'Cpu',
    items: ['Développement web', 'Intelligence artificielle', 'Cybersécurité', 'Data Science'],
    href: '/categorie/technologie',
  },
  {
    title: 'Business',
    slug: 'business',
    icon: 'ChartNoAxesCombined',
    items: ['Marketing', 'Vente', 'Gestion d\'entreprise'],
    href: '/categorie/business',
  },
  {
    title: 'Sciences',
    slug: 'sciences',
    icon: 'Microscope',
    items: ['Physique', 'Chimie', 'Biologie'],
    href: '/categorie/sciences',
  },
  {
    title: 'Arts',
    slug: 'arts',
    icon: 'Palette',
    items: ['Musique', 'Peinture', 'Photographie'],
    href: '/categorie/arts',
  },
  {
    title: 'Langues',
    slug: 'langues',
    icon: 'Languages',
    items: ['Français', 'Anglais', 'Lingala', 'Swahili'],
    href: '/categorie/langues',
  },
  {
    title: 'Histoire et géographie',
    slug: 'histoire-geographie',
    icon: 'Landmark',
    items: ['Histoire du monde', 'Géographie', 'Atlas'],
    href: '/categorie/histoire-geographie',
  },
]

export interface ReadingFormat {
  title: string
  slug: string
  image: string
  description: string
  href: string
}

export const readingFormats: ReadingFormat[] = [
  {
    title: 'Livres papier',
    slug: 'papier',
    image: svgOpenBook,
    description: 'Commande et livraison à domicile.',
    href: '/catalogue?format=papier',
  },
  {
    title: 'Livres numériques',
    slug: 'numerique',
    image: svgTablet,
    description: 'Lecture sur tous vos appareils.',
    href: '/catalogue?format=numerique',
  },
  {
    title: 'Livres audio',
    slug: 'audio',
    image: svgHeadphones,
    description: 'Écoutez vos livres préférés en mobilité.',
    href: '/catalogue?format=audio',
  },
  {
    title: 'Collections complètes',
    slug: 'collections',
    image: svgBooksStack,
    description: 'Séries, tomes et volumes complets.',
    href: '/catalogue?format=collections',
  },
  {
    title: 'Revues et magazines',
    slug: 'revues',
    image: svgNewspaper,
    description: 'Presse et magazines spécialisés.',
    href: '/catalogue?format=revues',
  },
]

export interface HeritageCategory {
  title: string
  slug: string
  image: string
  href: string
}

export const heritageCategories: HeritageCategory[] = [
  {
    title: 'Histoire du Royaume Kongo',
    slug: 'royaume-kongo',
    image: imgRoyaumeKongo,
    href: '/categorie/patrimoine/royaume-kongo',
  },
  {
    title: 'Civilisations africaines',
    slug: 'civilisations-africaines',
    image: imgCivilisations,
    href: '/categorie/patrimoine/civilisations-africaines',
  },
  {
    title: 'Héros africains',
    slug: 'heros-africains',
    image: imgHeros,
    href: '/categorie/patrimoine/heros-africains',
  },
  {
    title: 'Traditions et coutumes',
    slug: 'traditions-coutumes',
    image: imgTraditions,
    href: '/categorie/patrimoine/traditions-coutumes',
  },
  {
    title: 'Langues africaines',
    slug: 'langues-africaines',
    image: imgLangues,
    href: '/categorie/patrimoine/langues-africaines',
  },
  {
    title: 'Littérature congolaise',
    slug: 'litterature-congolaise',
    image: imgLitteratureCongolaise,
    href: '/categorie/patrimoine/litterature-congolaise',
  },
]

export interface PopularCategory {
  title: string
  slug: string
  href: string
}

export const popularCategories: PopularCategory[] = [
  { title: 'Informatique', slug: 'informatique', href: '/catalogue?categorie=informatique' },
  { title: 'Développement personnel', slug: 'developpement-personnel', href: '/categorie/developpement-personnel' },
  { title: 'Romans africains', slug: 'romans-africains', href: '/catalogue?categorie=romans-africains' },
  { title: 'Entrepreneuriat', slug: 'entrepreneuriat', href: '/catalogue?categorie=entrepreneuriat' },
  { title: 'Préparation aux examens d’État', slug: 'examens-etat', href: '/catalogue?categorie=examens-etat' },
  { title: 'Anglais', slug: 'anglais', href: '/catalogue?categorie=anglais' },
]

export interface InstitutionCategory {
  title: string
  slug: string
  image: string
  description: string
  href: string
}

export const institutionCategories: InstitutionCategory[] = [
  {
    title: 'Écoles',
    slug: 'ecoles',
    image: imgEcoles,
    description: 'Manuels scolaires, ouvrages parascolaires et bibliothèque numérique.',
    href: '/categorie/etablissements/ecoles',
  },
  {
    title: 'Universités',
    slug: 'universites',
    image: imgUniversites,
    description: 'Ouvrages académiques, revues scientifiques et ressources numériques.',
    href: '/categorie/etablissements/universites',
  },
  {
    title: 'Bibliothèques',
    slug: 'bibliotheques',
    image: imgBibliotheques,
    description: 'Catalogues numériques, abonnements et gestion de collections.',
    href: '/categorie/etablissements/bibliotheques',
  },
  {
    title: 'Centres de formation',
    slug: 'centres-formation',
    image: imgCentresFormation,
    description: 'Livres techniques, certifications et formations professionnelles.',
    href: '/categorie/etablissements/centres-formation',
  },
]

export interface AuthorProfile {
  name: string
  slug: string
  role: string
  avatar: string
  book: string
  bookAlt: string
  href: string
}

export const authors: AuthorProfile[] = [
  {
    name: 'Alain Mabanckou',
    slug: 'alain-mabanckou',
    role: 'Auteur congolais',
    avatar: imgAlainMabanckou,
    book: imgAlainMabanckouBook,
    bookAlt: 'Couverture — Alain Mabanckou',
    href: '/catalogue?auteur=alain-mabanckou',
  },
  {
    name: 'Scholastique Mukasonga',
    slug: 'scholastique-mukasonga',
    role: 'Écrivaine rwandaise',
    avatar: imgScholastiqueMukasonga,
    book: imgScholastiqueMukasongaBook,
    bookAlt: 'Couverture — Scholastique Mukasonga',
    href: '/catalogue?auteur=scholastique-mukasonga',
  },
  {
    name: 'Chimamanda Ngozi Adichie',
    slug: 'chimamanda-adichie',
    role: 'Écrivaine nigériane',
    avatar: imgChimamandaAdichie,
    book: imgChimamandaBook,
    bookAlt: 'Couverture — Chimamanda Ngozi Adichie',
    href: '/catalogue?auteur=chimamanda-adichie',
  },
  {
    name: 'Gaël Faye',
    slug: 'gael-faye',
    role: 'Auteur-compositeur franco-rwandais',
    avatar: imgGaelFaye,
    book: imgGaelFayeBook,
    bookAlt: 'Couverture — Gaël Faye',
    href: '/catalogue?auteur=gael-faye',
  },
  {
    name: 'Henri Lopes',
    slug: 'henri-lopes',
    role: 'Écrivain congolais',
    avatar: imgHenriLopes,
    book: imgHenriLopesBook,
    bookAlt: 'Couverture — Henri Lopes',
    href: '/catalogue?auteur=henri-lopes',
  },
]

export interface AdvancedSearchOption {
  value: string
  label: string
}

export interface AdvancedSearchField {
  id: string
  label: string
  param: string
  options: AdvancedSearchOption[]
}

export const advancedSearchFields: AdvancedSearchField[] = [
  {
    id: 'category',
    label: 'Catégorie',
    param: 'categorie',
    options: [
      { value: '', label: 'Catégorie' },
      { value: 'litterature-africaine', label: 'Littérature africaine' },
      { value: 'livres-scolaires', label: 'Livres scolaires' },
      { value: 'livres-universitaires', label: 'Livres universitaires' },
      { value: 'jeunesse', label: 'Jeunesse' },
      { value: 'developpement-personnel', label: 'Développement personnel' },
    ],
  },
  {
    id: 'author',
    label: 'Auteur',
    param: 'auteur',
    options: [
      { value: '', label: 'Auteur' },
      { value: 'alain-mabanckou', label: 'Alain Mabanckou' },
      { value: 'scholastique-mukasonga', label: 'Scholastique Mukasonga' },
      { value: 'chimamanda-adichie', label: 'Chimamanda Ngozi Adichie' },
      { value: 'gael-faye', label: 'Gaël Faye' },
      { value: 'henri-lopes', label: 'Henri Lopes' },
    ],
  },
  {
    id: 'language',
    label: 'Langue',
    param: 'langue',
    options: [
      { value: '', label: 'Langue' },
      { value: 'francais', label: 'Français' },
      { value: 'anglais', label: 'Anglais' },
      { value: 'lingala', label: 'Lingala' },
      { value: 'swahili', label: 'Swahili' },
    ],
  },
  {
    id: 'country',
    label: 'Pays',
    param: 'pays',
    options: [
      { value: '', label: 'Pays' },
      { value: 'congo', label: 'Congo' },
      { value: 'rdc', label: 'RDC' },
      { value: 'rwanda', label: 'Rwanda' },
      { value: 'senegal', label: 'Sénégal' },
      { value: 'nigeria', label: 'Nigeria' },
    ],
  },
  {
    id: 'format',
    label: 'Format',
    param: 'format',
    options: [
      { value: '', label: 'Format' },
      { value: 'papier', label: 'Livre papier' },
      { value: 'numerique', label: 'Livre numérique' },
      { value: 'audio', label: 'Livre audio' },
    ],
  },
  {
    id: 'price',
    label: 'Prix',
    param: 'prix',
    options: [
      { value: '', label: 'Prix' },
      { value: '0-10', label: 'Moins de 10 €' },
      { value: '10-25', label: '10 € – 25 €' },
      { value: '25-50', label: '25 € – 50 €' },
      { value: '50+', label: 'Plus de 50 €' },
    ],
  },
  {
    id: 'access',
    label: 'Gratuit / Payant',
    param: 'acces',
    options: [
      { value: '', label: 'Gratuit / Payant' },
      { value: 'gratuit', label: 'Gratuit' },
      { value: 'payant', label: 'Payant' },
    ],
  },
  {
    id: 'publication',
    label: 'Date de publication',
    param: 'publication',
    options: [
      { value: '', label: 'Date de publication' },
      { value: '2024', label: '2024' },
      { value: '2023', label: '2023' },
      { value: '2020-2022', label: '2020 – 2022' },
      { value: '2010-2019', label: '2010 – 2019' },
      { value: 'avant-2010', label: 'Avant 2010' },
    ],
  },
]

export type FinalCtaActionIcon = 'Search' | 'FilePlus' | 'PenLine'

export interface FinalCtaAction {
  label: string
  href: string
  icon: FinalCtaActionIcon
  variant: 'primary' | 'outline'
}

export interface FinalCtaContent {
  title: string
  description: string
  image: string
  imageAlt: string
  actions: FinalCtaAction[]
}

export const finalCtaContent: FinalCtaContent = {
  title: 'Vous ne trouvez pas votre livre ?',
  description: 'Recherchez parmi des milliers d\'ouvrages ou demandez l\'ajout d\'un livre rare à notre catalogue.',
  image: imgTrouvezLivre,
  imageAlt: 'Livre ouvert éclairé par une lumière dorée',
  actions: [
    {
      label: 'Rechercher un livre',
      href: '/catalogue',
      icon: 'Search',
      variant: 'primary',
    },
    {
      label: 'Demander un livre',
      href: '/contact?objet=demande-livre',
      icon: 'FilePlus',
      variant: 'outline',
    },
    {
      label: 'Publier mon livre',
      href: '/publier',
      icon: 'PenLine',
      variant: 'outline',
    },
  ],
}

export type TrustBarIcon = 'Truck' | 'ShieldCheck' | 'Headphones' | 'LibraryBig'

export interface TrustBarItem {
  icon: TrustBarIcon
  title: string
  subtitle: string
}

export const trustBarItems: TrustBarItem[] = [
  {
    icon: 'Truck',
    title: 'Livraison rapide',
    subtitle: 'dans toute la RDC',
  },
  {
    icon: 'ShieldCheck',
    title: 'Paiement sécurisé',
    subtitle: '100% fiable',
  },
  {
    icon: 'Headphones',
    title: 'Support client',
    subtitle: 'disponible 24/7',
  },
  {
    icon: 'LibraryBig',
    title: '+10 000 livres',
    subtitle: 'disponibles',
  },
]
