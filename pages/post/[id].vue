 <template>
    <article class="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <NuxtLink :to="`/`" class="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
            <Icon name="heroicons:arrow-left" class="h-4 w-4 mr-2" />
            Back to Articles
        </NuxtLink>

        <header class="mb-8">
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span class="inline-flex items-center">
                    <Icon name="heroicons:calendar" class="h-4 w-4 mr-1" />
                    January 24, 2024
                </span>
                <span class="inline-flex items-center">
                    <Icon name="heroicons:user" class="h-4 w-4 mr-1" />
                    By John Smith
                </span>
            </div>
            <h1 class="text-4xl font-bold text-gray-900 mb-4">
                How to Plan a Successful Team-Building Retreat for Your Company
            </h1>
            <div class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                Corporate Events
            </div>
        </header>

        <div class="relative aspect-[16/9] mb-8 rounded-xl overflow-hidden">
            <img src="~/assets/images/Img1.png" alt="Team building retreat participants collaborating" fill
                class="object-cover" priority />


        </div>

        <div class="prose prose-lg max-w-none">
            <p class="lead text-xl text-gray-600 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.
            </p>

            <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4">Planning Your Team Building Event</h2>

            <p class="text-gray-600 mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo.
            </p>

            <ul class="list-disc list-inside space-y-3 text-gray-600 mb-6">
                <li>Choose the right venue for your team size</li>
                <li>Plan activities that encourage collaboration</li>
                <li>Consider dietary restrictions and preferences</li>
                <li>Include both structured and free time</li>
            </ul>

            <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-4">Making It Memorable</h2>

            <p class="text-gray-600 mb-6">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit
                amet.
            </p>

            <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-8">
                "The best team-building activities are those that create lasting memories and strengthen relationships
                between
                team members."
            </blockquote>

            <p class="text-gray-600">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex
                ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur.
            </p>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <div class="flex gap-4">
                <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Share on Twitter
                </button>
                <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    Share on LinkedIn
                </button>
            </div>
        </div>
    </article>
</template> 





  