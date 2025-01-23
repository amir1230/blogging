<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SharedHeaderSection />

        <section class="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h2 class="text-2xl font-bold text-gray-900 mb-8">Popular Articles</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PostArticle v-for="post in posts" :key="post.id" :article="post" />
            </div>
        </section>
    </div>
</template>

<script setup>
const { fetchPosts } = useApi()
const posts = ref([])

onMounted(async () => {
    posts.value = await fetchPosts()

    console.log(posts.value)
});
</script>