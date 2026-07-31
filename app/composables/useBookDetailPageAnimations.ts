export function useBookDetailPageAnimations(rootRef: Ref<HTMLElement | null>) {
  onMounted(async () => {
    if (!rootRef.value)
      return

    await nextTick()

    const sections = rootRef.value.querySelectorAll('.book-detail-scroll-reveal')

    sections.forEach((section) => {
      section.classList.add(
        'book-detail-scroll-reveal--ready',
        'book-detail-scroll-reveal--visible',
      )
    })
  })
}
