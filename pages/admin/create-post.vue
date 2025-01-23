<!-- <template>
    <div>
      <h1>Create a New Post</h1>
      <form @submit.prevent="createPost">
        <div>
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="title" required />
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea id="content" v-model="content" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const title = ref('');
  const content = ref('');
  const router = useRouter();
  
  async function createPost() {
    const newPost = { title: title.value, content: content.value, id: Date.now() };
  
    try {
      // Save the post to db.json using a local API
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      }
    );
    console.log(response, "RRRRR")

  
      if (response.ok) {
        alert('Post created successfully!');
        router.push('/');
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred');
    }
  }
  </script>
   -->



   <template>
    <div class="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold mb-6">Create a New Post</h1>
      <form @submit.prevent="createPost" class="space-y-4">
        <!-- Title -->
        <div>
          <label for="title" class="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            v-model="title"
            placeholder="Enter the title"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <!-- Category -->
        <div>
          <label for="category" class="block text-gray-700 font-semibold mb-2">Category</label>
          <input
            type="text"
            id="category"
            v-model="category"
            placeholder="Enter the category"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <!-- Date -->
        <div>
          <label for="date" class="block text-gray-700 font-semibold mb-2">Date</label>
          <input
            type="date"
            id="date"
            v-model="date"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <!-- Description -->
        <div>
          <label for="description" class="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            id="description"
            v-model="description"
            placeholder="Enter a brief description"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <!-- Image -->
        <div>
          <label for="image" class="block text-gray-700 font-semibold mb-2">Image URL</label>
          <input
            type="text"
            id="image"
            v-model="image"
            placeholder="Enter the image URL"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Post
        </button>
      </form>
    </div>
  </template>
  
  <script setup>

definePageMeta({
    middleware: 'auth'
})

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const title = ref('');
  const category = ref('');
  const date = ref('');
  const description = ref('');
  const image = ref('');
  const router = useRouter();
  
  async function createPost() {
    const newPost = {
      id: Date.now(),
      title: title.value,
      category: category.value,
      date: date.value,
      description: description.value,
      image: image.value,
    };
  
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
  
      if (response.ok) {
        alert('Post created successfully!');
        router.push('/');
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      alert('An error occurred');
    }
  }
  </script>
  