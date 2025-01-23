<script setup>
definePageMeta({
  middleware: ['auth']
})

const { logout, isAuthenticated } = useAuth()

let isUserAuthenticated = isAuthenticated.value;

onMounted(() => {
  const localStorageUser = localStorage.getItem('userDetails')

    if (localStorageUser) {
        const userDetails = JSON.parse(localStorageUser)
        isUserAuthenticated = userDetails.isLoggedIn || false
    }

})

</script>

<template>
    <header class="w-full bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center h-16">
                <div class="flex justify-start items-center gap-5">
                    <div class="flex items-center">
                        <NuxtLink :to="`/`">
                            <div class="flex flex-col">
                                <img src="~/assets/images/Brand.png" alt="Logo" class="h-[50px] w-[107px]" />
                            </div>
                        </NuxtLink>
                    </div>

                    <div class="hidden md:flex items-center">
                        <span class="text-gray-600">
                            <span class="mr-2">📞</span>
                            +1 (628) 587-3235
                        </span>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <a href="#" class="hidden md:block text-gray-700 hover:text-gray-900">
                        Top Vendors, Apply Now!
                    </a>
                    <button v-if="isAuthenticated.value"
                        class="p-2 rounded-md flex justify-center items-center bg-slate-100 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        aria-label="Menu">
                        <NuxtLink :to="`/login`">
                            <Icon name="heroicons:bars-3" class="h-6 w-6 mx-2" />
                            <Icon name="heroicons:user" class="h-6 w-6" />
                        </NuxtLink>
                    </button>

                    <button v-else @click="logout"
                        class="p-2 rounded-md flex justify-center items-center bg-slate-100 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        aria-label="Logout">
                        <div class="flex items-center">
                            <Icon name="heroicons:arrow-right-on-rectangle" class="h-6 w-6" />
                            <span class="ml-2">Logout</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>