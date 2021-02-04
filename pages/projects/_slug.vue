<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex-shrink w-1/2">
      <img :src="`/project-imgs/${project.mainImage}`" alt="">
      <div class="flex justify-between w-around w-full text-white">
        <a :href="project.linkLive" target="_blank" class="bg-blue-600 dark:bg-purple-600 p-2 shadow w-1/3 text-center">
          Live
        </a>
        <a :href="project.linkSource" target="_blank" class="bg-blue-600 dark:bg-purple-600 p-2 shadow w-1/3 text-center">
          Source
        </a>
      </div>
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