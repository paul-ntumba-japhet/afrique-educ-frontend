import { usePreferredReducedMotion } from '@vueuse/core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Ref } from 'vue'

export function useCategoriesPageAnimations(root: Ref<HTMLElement | null>) {
  const prefersReducedMotion = usePreferredReducedMotion()
  let ctx: gsap.Context | null = null

  function init() {
    if (typeof window === 'undefined' || prefersReducedMotion.value === 'reduce' || !root.value)
      return

    gsap.registerPlugin(ScrollTrigger)

    ctx = gsap.context(() => {
      const revealElements = gsap.utils.toArray<HTMLElement>(
        '.categories-scroll-reveal',
        root.value!,
      )

      if (revealElements.length) {
        gsap.set(revealElements, { autoAlpha: 0, y: 28 })

        revealElements.forEach((element) => {
          ScrollTrigger.create({
            trigger: element,
            start: 'top 88%',
            once: true,
            onEnter: () => {
              gsap.to(element, {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                ease: 'power3.out',
              })
            },
          })
        })
      }

      gsap.utils.toArray<HTMLElement>('.categories-animate-section', root.value!).forEach((section) => {
        const cards = section.querySelectorAll<HTMLElement>('.category-card')
        if (!cards.length)
          return

        gsap.set(cards, { autoAlpha: 0, y: 40 })

        ScrollTrigger.create({
          trigger: section,
          start: 'top 82%',
          once: true,
          onEnter: () => {
            gsap.to(cards, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: 'power3.out',
            })
          },
        })
      })
    }, root.value)

    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
  }

  function cleanup() {
    ctx?.revert()
    ctx = null
  }

  return {
    init,
    cleanup,
  }
}
