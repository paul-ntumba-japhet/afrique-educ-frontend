export function useBooksTheme() {
  const { isDark, setLight, setDark } = useAppTheme()

  return {
    isDark,
    setLight,
    setDark,
  }
}
