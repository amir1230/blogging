export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
      const userDetails = localStorage.getItem('userDetails')

      if (!userDetails || !JSON.parse(userDetails).isLoggedIn) {
        return navigateTo('/login')
      }
      
    }
  })