import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      htmlAttrs: {
        class: 'dark',
      },
      script: [
        {
          innerHTML: `(function(){try{var t=localStorage.getItem('afric-educ-theme');document.documentElement.classList.toggle('dark',t!=='light');}catch(e){document.documentElement.classList.add('dark');}})();`,
          type: 'text/javascript',
          tagPosition: 'head',
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vueuse/core'],
    },
    server: {
      watch: {
        // Évite des full-reload en boucle quand Nuxt régénère .nuxt pendant le dev
        ignored: ['**/.nuxt/**', '**/.output/**', '**/node_modules/**'],
      },
    },
  },
  modules: ['shadcn-nuxt', '@nuxt/ui'],
  ui: {
    fonts: false,
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  components: [
    {
      path: '~/components/layout',
      pathPrefix: false,
    },
    {
      path: '~/components/navigation',
      pathPrefix: false,
    },
    {
      path: '~/components/home',
      pathPrefix: false,
    },
    {
      path: '~/components/authors',
      pathPrefix: false,
    },
    {
      path: '~/components/authors/profile',
      pathPrefix: false,
    },
    {
      path: '~/components/categories',
      pathPrefix: false,
    },
    {
      path: '~/components/books',
      pathPrefix: false,
    },
    {
      path: '~/components/book-detail',
      pathPrefix: false,
    },
    {
      path: '~/components/publish',
      pathPrefix: false,
    },
    {
      path: '~/components/cart',
      pathPrefix: false,
    },
    {
      path: '~/components/register',
      pathPrefix: false,
    },
    {
      path: '~/components/institutions',
      pathPrefix: false,
    },
    {
      path: '~/components/institutional-quote',
      pathPrefix: false,
    },
    {
      path: '~/components/contact-advisor',
      pathPrefix: false,
    },
    {
      path: '~/components/library-subscriptions',
      pathPrefix: false,
    },
    {
      path: '~/components/legal',
      pathPrefix: false,
    },
    {
      path: '~/components/print-on-demand',
      pathPrefix: false,
    },
  ],
})
