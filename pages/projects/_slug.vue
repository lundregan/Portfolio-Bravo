<template>
  <div>
    <img :src="`/project-imgs/${project.mainImage}`" alt="">
    <h1>{{ project.title }}</h1>
    <nuxt-content :document="project" />
    <p>{{project.mainImage}}</p>
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