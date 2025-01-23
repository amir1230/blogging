<template>
    <article class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <NuxtLink :to="`/post/${article.id}`">
            <div class="relative aspect-[4/3]">
                <!-- <img src="~/assets/images/Img1.png" alt={article.title} fill class="object-cover" /> -->

                <img :src="article.image" :alt="article.title" class="object-cover" />

                <span class="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium text-gray-600 rounded">
                    {{ article.category }}
                </span>
            </div>
            <div class="p-6">
                <time class="text-sm text-gray-500">
                    {{ article.date }}
                </time>

                <h3 class="mt-2 text-xl font-semibold text-gray-900 line-clamp-2">
                    {{ article.title }}
                </h3>

                <p class="mt-3 text-gray-600 line-clamp-3">
                    {{ article.description }}
                </p>
            </div>
        </NuxtLink>
    </article>
</template>

<script setup>
defineProps({
    article: {
        type: Object,
        required: true
    }
})
</script>