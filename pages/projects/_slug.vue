<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex-shrink w-1/2">
      <img :src="`/project-imgs/${project.mainImage}`" alt="">
    </div>
    <nuxt-content :document="project" class="prose mt-8 dark:text-white" />
  </div>
</template>

<script>
export default {
  async asyncData({$content, params, error}) {
    try {
      const project = await $content('projects', params.slug).fetch()

      return { project }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Project Page not found',
      })
    }
    
  }
}
</script>

<style>

</style>