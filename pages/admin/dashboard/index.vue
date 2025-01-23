<!-- 
<template>
    <div>
        <h1>
            welcome to the dashboard
        </h1>
    </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})
</script> -->



<template>
    <div>
        <h1>Welcome to the Dashboard</h1>
        <div class="mx-auto text-center my-[400px]">
            <button @click="navigateToCreatePost" class="w-[20%]  bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Create Post</button>
        </div>
        
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToCreatePost() {
    router.push('/admin/create-post');
}
</script>