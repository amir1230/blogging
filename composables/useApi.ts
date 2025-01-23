export const useApi = () => {
    const config = useRuntimeConfig()
  
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/posts')
        return await response.json()
      } catch (error) {
        console.error('Error fetching posts:', error)
        throw error
      }
    }
  
    const createPost = async (post: any) => {
      try {
        const response = await fetch('http://localhost:3001/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(post)
        })
        return await response.json()
      } catch (error) {
        console.error('Error creating post:', error)
        throw error
      }
    }
  
    return {
      fetchPosts,
      createPost
    }
  }