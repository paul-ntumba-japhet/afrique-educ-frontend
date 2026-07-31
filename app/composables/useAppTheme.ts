export type AppTheme = 'light' | 'dark'

const STORAGE_KEY = 'afric-educ-theme'

export function useAppTheme() {
  const theme = useState<AppTheme>('app-theme', () => 'dark')
  const isDark = computed(() => theme.value === 'dark')

  function applyTheme(value: AppTheme) {
    theme.value = value

    if (!import.meta.client)
      return

    document.documentElement.classList.toggle('dark', value === 'dark')
    window.localStorage.setItem(STORAGE_KEY, value)
  }

  function setLight() {
    applyTheme('light')
  }

  function setDark() {
    applyTheme('dark')
  }

  function toggle() {
    applyTheme(isDark.value ? 'light' : 'dark')
  }

  function initTheme() {
    if (!import.meta.client)
      return

    const stored = window.localStorage.getItem(STORAGE_KEY)
    const resolved: AppTheme = stored === 'light' || stored === 'dark' ? stored : 'dark'
    applyTheme(resolved)
  }

  return {
    theme,
    isDark,
    setLight,
    setDark,
    toggle,
    initTheme,
  }
}
