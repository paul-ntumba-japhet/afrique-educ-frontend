import { usePreferredReducedMotion } from '@vueuse/core'
import gsap from 'gsap'

interface HeroAnimationTargets {
  section: HTMLElement
  backdropImage: HTMLElement | null
  particles: HTMLElement[]
  floatingBooks: HTMLElement[]
}

export function useCategoriesHeroAnimations() {
  const prefersReducedMotion = usePreferredReducedMotion()
  let ctx: gsap.Context | null = null

  function init(targets: HeroAnimationTargets) {
    if (typeof window === 'undefined' || prefersReducedMotion.value === 'reduce')
      return

    ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

      timeline
        .from(targets.section.querySelector('.categories-hero__breadcrumb'), {
          opacity: 0,
          y: 16,
          duration: 0.6,
        })
        .from(targets.section.querySelector('.categories-hero__title'), {
          opacity: 0,
          y: 24,
          duration: 0.75,
        }, '-=0.35')
        .from(targets.section.querySelector('.categories-hero__subtitle'), {
          opacity: 0,
          y: 20,
          duration: 0.65,
        }, '-=0.45')
        .from(targets.section.querySelector('.categories-hero__search'), {
          opacity: 0,
          y: 20,
          duration: 0.65,
        }, '-=0.4')

      if (targets.backdropImage) {
        gsap.from(targets.backdropImage, {
          opacity: 0,
          scale: 1.04,
          duration: 1.2,
          ease: 'power2.out',
        })

        gsap.to(targets.backdropImage, {
          y: -10,
          rotation: 0.5,
          duration: 6,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 1.2,
        })
      }

      targets.floatingBooks.forEach((book, index) => {
        gsap.from(book, {
          opacity: 0,
          y: 24,
          rotation: index === 0 ? -6 : 8,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.45 + index * 0.12,
        })

        gsap.to(book, {
          y: index === 0 ? -14 : -10,
          rotation: index === 0 ? -4 : 5,
          duration: 4.5 + index,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 1.4 + index * 0.3,
        })
      })

      targets.particles.forEach((particle, index) => {
        gsap.set(particle, { opacity: 0 })

        gsap.to(particle, {
          opacity: gsap.utils.random(0.15, 0.45),
          duration: 1.2,
          delay: 0.8 + index * 0.05,
          ease: 'power1.out',
        })

        gsap.to(particle, {
          y: gsap.utils.random(-18, -8),
          x: gsap.utils.random(-6, 6),
          duration: gsap.utils.random(3.5, 5.5),
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: gsap.utils.random(0, 1.5),
        })
      })
    }, targets.section)
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
