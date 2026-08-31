// Home page ("/") pa parametra kthen "në ndërtim"; çdo rrugë tjetër ose çdo query param kthen 410 Gone
export default defineNuxtRouteMiddleware((to) => {
  const isHome = to.path === '/'
  const hasQuery = Object.keys(to.query).length > 0

  if (!isHome || hasQuery) {
    throw createError({ statusCode: 410, statusMessage: 'Gone', fatal: true })
  }
})
