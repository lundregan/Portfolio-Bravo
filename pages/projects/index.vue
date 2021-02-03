<template>
  <div class="w-screen flex flex-wrap justify-center">
    <div v-for="project in projects" :key="project.id" class="lg:w-1/3 m-4">
      <NuxtLink :to="`projects/${project.link}`">
        <img :src="`/project-imgs/${project.mainImage}`" :alt="project.description">
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const projects = await $content('projects').sortBy('createdAt').fetch()

    return { projects }
  }
}
</script>

<style>

</style>