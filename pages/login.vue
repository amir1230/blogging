<script setup>
const router = useRouter()

const formData = ref({
    email: '',
    password: '',
    rememberMe: false
})


const handleSubmit = async () => {
    try {
        if (process.client) { 
            let email = "admin@admin.com";
            let password = "admin";

            if(formData.value.email !== email || formData.value.password !== password) {
                alert('Invalid email or password')
                return
            }

            localStorage.setItem('userDetails', JSON.stringify({
                email: formData.value.email,
                rememberMe: formData.value.rememberMe,
                isLoggedIn: true
            }))
        }

        await navigateTo('/admin/dashboard')
    } catch (error) {
        console.error('Login error:', error)
    }
}

onMounted(() => {
  const { isAuthenticated } = useAuth()
  onMounted(() => {
    console.log(isAuthenticated.value)
  if (isAuthenticated.value) {
    navigateTo('/admin/dashboard')
  }
})
})

</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="lucide:mail" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input id="email-address" v-model="formData.email" type="email" autocomplete="email"
                                required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address" />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Icon name="lucide:lock" class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </div>
                            <input id="password" v-model="formData.password" type="password"
                                autocomplete="current-password" required
                                class="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Password" />
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" v-model="formData.rememberMe" type="checkbox"
                            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
