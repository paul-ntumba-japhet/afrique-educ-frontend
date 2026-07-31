import type { BookItem, SortValue } from '@/composables/useBooksMock'
import { mockBooksCatalog } from '@/composables/useBooksMock'

const PAGE_SIZE = 12

export interface BooksFiltersState {
  categories: string[]
  formats: string[]
  availability: string[]
  priceMax: number
}

export function useBooksCatalog() {
  const route = useRoute()
  const router = useRouter()

  const allBooks = useState<BookItem[]>('books-catalog-page-livres-v3', () => mockBooksCatalog)
  const viewMode = useState<'grid' | 'list'>('books-view-mode', () => 'grid')
  const isLoading = useState('books-loading', () => false)
  const hasError = useState('books-error', () => false)
  const favorites = useState<number[]>('books-favorites', () => [])
  const mobileFiltersOpen = useState('books-mobile-filters', () => false)

  const filters = computed<BooksFiltersState>(() => ({
    categories: parseList(route.query.category),
    formats: parseList(route.query.format),
    availability: parseList(route.query.availability),
    priceMax: Number(route.query.priceMax ?? 50),
  }))

  const searchQuery = computed(() => String(route.query.search ?? ''))
  const sortBy = computed<SortValue>(() => (route.query.sort as SortValue) || 'relevance')
  const typeFilter = computed(() => String(route.query.type ?? ''))
  const currentPage = computed(() => Math.max(1, Number(route.query.page ?? 1)))

  const filteredBooks = computed(() => {
    let results = [...allBooks.value]

    const search = searchQuery.value.trim().toLowerCase()
    if (search) {
      results = results.filter(book =>
        book.title.toLowerCase().includes(search)
        || book.author.toLowerCase().includes(search),
      )
    }

    if (typeFilter.value === 'gratuits') {
      results = results.filter(book => book.isFree)
    }

    if (filters.value.categories.length) {
      results = results.filter(book =>
        filters.value.categories.includes(book.categorySlug),
      )
    }

    if (filters.value.formats.length) {
      results = results.filter(book =>
        filters.value.formats.some(format =>
          book.formats.some(bookFormat => bookFormat.toLowerCase() === format),
        ),
      )
    }

    if (filters.value.availability.length) {
      results = results.filter(book =>
        filters.value.availability.includes(book.availability),
      )
    }

    results = results.filter((book) => {
      if (book.isFree)
        return true
      if (book.price == null)
        return true
      return book.price <= filters.value.priceMax
    })

    switch (sortBy.value) {
      case 'newest':
        return results.sort((a, b) => b.id - a.id)
      case 'popular':
        return results.sort((a, b) => b.reviews - a.reviews)
      case 'price-asc':
        return results.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
      case 'price-desc':
        return results.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
      case 'rating':
        return results.sort((a, b) => b.rating - a.rating)
      default:
        return results
    }
  })

  const totalCount = computed(() => filteredBooks.value.length)
  const totalPages = computed(() => Math.max(1, Math.ceil(totalCount.value / PAGE_SIZE)))

  const paginatedBooks = computed(() => {
    const page = Math.min(currentPage.value, totalPages.value)
    const start = (page - 1) * PAGE_SIZE
    return filteredBooks.value.slice(start, start + PAGE_SIZE)
  })

  const activeQuickFilter = computed(() => {
    if (typeFilter.value === 'gratuits')
      return 'gratuits'
    return filters.value.categories[0] ?? ''
  })

  function parseList(value: unknown): string[] {
    if (!value)
      return []
    return String(value).split(',').map(item => item.trim()).filter(Boolean)
  }

  function updateQuery(patch: Record<string, string | undefined>, resetPage = true) {
    const query: Record<string, string> = {}

    for (const [key, value] of Object.entries(route.query)) {
      if (typeof value === 'string')
        query[key] = value
    }

    for (const [key, value] of Object.entries(patch)) {
      if (value === undefined || value === '')
        delete query[key]
      else
        query[key] = value
    }

    if (resetPage)
      delete query.page

    router.push({ path: '/livres', query })
  }

  function setSearch(value: string) {
    updateQuery({ search: value.trim() || undefined })
  }

  function setSort(value: SortValue) {
    updateQuery({ sort: value === 'relevance' ? undefined : value })
  }

  function setQuickFilter(param: 'category' | 'type', value: string) {
    if (param === 'type') {
      updateQuery({
        type: value === typeFilter.value ? undefined : value,
        category: undefined,
      })
      return
    }

    updateQuery({
      category: value === filters.value.categories[0] ? undefined : value,
      type: undefined,
    })
  }

  function toggleFilterGroup(group: 'categories' | 'formats' | 'availability', value: string) {
    const current = [...filters.value[group]]
    const index = current.indexOf(value)
    if (index >= 0)
      current.splice(index, 1)
    else
      current.push(value)

    const key = group === 'categories' ? 'category' : group === 'formats' ? 'format' : 'availability'
    updateQuery({ [key]: current.length ? current.join(',') : undefined })
  }

  function setPriceMax(value: number) {
    updateQuery({ priceMax: value >= 50 ? undefined : String(value) })
  }

  function resetFilters() {
    router.push({ path: '/livres' })
  }

  function setPage(page: number) {
    updateQuery({ page: page <= 1 ? undefined : String(page) }, false)
  }

  function toggleFavorite(id: number) {
    const current = favorites.value
    if (current.includes(id))
      favorites.value = current.filter(item => item !== id)
    else
      favorites.value = [...current, id]
  }

  function isFavorite(id: number) {
    return favorites.value.includes(id)
  }

  function clearError() {
    hasError.value = false
  }

  function setViewMode(mode: 'grid' | 'list') {
    viewMode.value = mode
  }

  return {
    allBooks,
    filteredBooks,
    paginatedBooks,
    totalCount,
    totalPages,
    currentPage,
    searchQuery,
    sortBy,
    typeFilter,
    filters,
    activeQuickFilter,
    viewMode,
    isLoading,
    hasError,
    mobileFiltersOpen,
    PAGE_SIZE,
    setSearch,
    setSort,
    setQuickFilter,
    toggleFilterGroup,
    setPriceMax,
    resetFilters,
    setPage,
    toggleFavorite,
    isFavorite,
    setViewMode,
    clearError,
  }
}
