// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Për GitHub Pages të tipit "user/repo", vendos NUXT_APP_BASE_URL=/repo-name/
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'favicon-96x96.png' },
        { rel: 'shortcut icon', href: 'favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
        { rel: 'manifest', href: 'site.webmanifest' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false,
      failOnError: false
    }
  }
})
