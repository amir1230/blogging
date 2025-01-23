export const useAuth = () => {
    const checkAuth = () => {
      if (import.meta.client) {
        const userDetails = localStorage.getItem('userDetails')
        return userDetails ? JSON.parse(userDetails).isLoggedIn : false
      }
      return false
    }
  
    const isAuthenticated = ref(checkAuth())
  
    const logout = () => {
      if (import.meta.client) {
        localStorage.removeItem('userDetails')
        isAuthenticated.value = false
        navigateTo('/login')
      }
    }
  
    return {
      isAuthenticated,
      logout
    }
  }