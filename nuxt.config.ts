// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Për GitHub Pages të tipit "user/repo", vendos NUXT_APP_BASE_URL=/repo-name/
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  },
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: false,
      failOnError: false
    }
  }
})
