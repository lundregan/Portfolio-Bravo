<template>
  <div class="flex justify-center items-center">
    <div class="mx-4 bg-gray-200 w-full lg:w-1/2 bg-blue-600 dark:bg-purple-600 rounded-t-xl text-black mb-8">
      <p class="text-center text-white py-1 text-xl">{{blogPost.title}}</p>
      <div class="bg-gray-200 rounded-t-xl p-8 flex justify-center">
        <nuxt-content :document="blogPost" class="prose text-center text-sm lg:text-base"/>
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