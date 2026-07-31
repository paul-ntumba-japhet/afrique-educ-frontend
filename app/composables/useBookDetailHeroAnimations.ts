import gsap from 'gsap'

export function useBookDetailHeroAnimations(rootRef: Ref<HTMLElement | null>) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    if (!rootRef.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return

    ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from('.book-detail-hero__breadcrumbs', { autoAlpha: 0, y: 16, duration: 0.5 })
        .from('.book-cover', { autoAlpha: 0, y: 32, scale: 0.96, duration: 0.7 }, '-=0.2')
        .from('.book-detail-hero__info > *', { autoAlpha: 0, y: 24, duration: 0.5, stagger: 0.08 }, '-=0.35')
        .from('.book-detail-hero__badges-card', { autoAlpha: 0, x: 20, duration: 0.55 }, '-=0.4')
        .from('.book-detail-hero__badge-row', { autoAlpha: 0, y: 10, duration: 0.35, stagger: 0.08 }, '-=0.35')
        .from('.book-detail-hero__meta', { autoAlpha: 0, y: 16, duration: 0.45 }, '-=0.15')
    }, rootRef.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
