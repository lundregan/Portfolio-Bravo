<template>
  <div class="flex justify-center items-center">
    <div class="bg-gray-200 w-1/2 bg-purple-600 rounded-t-xl text-black">
      <p class="text-center text-white py-1 text-xl">{{blogPost.title}}</p>
      <div class="bg-gray-200 rounded-t-xl p-8">
        <nuxt-content :document="blogPost"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    try {
      const blogPost = await $content('blog', params.slug).fetch()

      return { blogPost }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Blog Post Page not found',
      })
    }
    
  }
}
</script>

<style>

</style>