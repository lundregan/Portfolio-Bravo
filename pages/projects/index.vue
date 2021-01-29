<template>
  <div class="w-screen flex">
    <!-- <div class="flex m-8">
      <div class="flex-shrink m-2">
        <img src="project-imgs/desmoscorp.png" alt="Mock Website for Fake Video Game Company" class="">
      </div>
      <div class="flex-shrink m-2">
        <img src="project-imgs/hexoggle.png" alt="Hex Tile Based Puzzle Game Website">
      </div>
    </div> -->
    <div v-for="project in projects" :key="project.id" class="flex-shrink">
      <NuxtLink :to="`projects/${project.link}`">
      <p>{{project.title}}</p>
      <img :src="`/project-imgs/${project.mainImage}`" alt="">
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