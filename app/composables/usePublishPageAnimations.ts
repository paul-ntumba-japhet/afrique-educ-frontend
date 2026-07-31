export function usePublishPageAnimations(mainRef: Ref<HTMLElement | null>) {
  function ensureSectionsVisible() {
    if (!mainRef.value)
      return

    const sections = mainRef.value.querySelectorAll<HTMLElement>('.publish-section')

    sections.forEach((section) => {
      section.style.removeProperty('opacity')
      section.style.removeProperty('visibility')
      section.style.removeProperty('transform')
    })
  }

  onMounted(async () => {
    await nextTick()
    ensureSectionsVisible()
  })

  return {
    ensureSectionsVisible,
  }
}
