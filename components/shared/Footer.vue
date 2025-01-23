<template>
    <footer class="bg-gray-50 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div class="mb-6 md:mb-0">
                    <div class="flex items-center">
                        <NuxtLink :to="`/`">
                            <div class="flex flex-col">
                                <img src="~/assets/images/Brand.png" alt="Logo" class="h-[50px] w-[107px]" />
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <nav class="flex flex-col md:flex-row gap-4 md:gap-8 mb-6 md:mb-0">
                    <NuxtLink :to="`/about`" class="text-gray-600 hover:text-gray-900">
                        About Us
                    </NuxtLink>
                    <NuxtLink :to="`/corporate-event`" class="text-gray-600 hover:text-gray-900">
                        Corporate Events
                    </NuxtLink>
                    <NuxtLink :to="`/personal-event`" class="text-gray-600 hover:text-gray-900">
                        Personal Events
                    </NuxtLink>
                    <NuxtLink :to="`/services`" class="text-gray-600 hover:text-gray-900">
                        List Your Service
                    </NuxtLink>
                    <NuxtLink :to="`/how-it-works`" class="text-gray-600 hover:text-gray-900">
                        How it Works
                    </NuxtLink>
                </nav>

                <div class="flex flex-col gap-2">
                    <h3 class="font-semibold text-gray-900">Contacts</h3>
                    <a href="mailto:contact@eventsinminutes.com" class="text-gray-600 hover:text-gray-900">
                        contact@eventsinminutes.com
                    </a>
                    <a href="tel:+16285873235" class="text-gray-600 hover:text-gray-900">
                        +1 (628) 587-3235
                    </a>
                </div>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
                <div class="flex gap-4 mb-4 md:mb-0">
                    <a href="#" class="text-gray-500 hover:text-gray-700 text-sm">
                        Privacy Policy
                    </a>
                    <span class="text-gray-300">•</span>
                    <a href="#" class="text-gray-500 hover:text-gray-700 text-sm">
                        Terms & Conditions
                    </a>
                </div>
                <div class="text-gray-500 text-sm">2024 - © All rights Reserved - Events in Minutes</div>
            </div>
        </div>
    </footer>
</template>