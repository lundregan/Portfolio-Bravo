<template>
  <nav>
    <div class="flex justify-between pt-1 px-2">
      <div class="flex">
        <DarkmodeToggle />
        <NuxtLink to="/">
          <p class="pl-2 dark:text-purple-600">Lundregan</p>
        </NuxtLink> 
      </div>
      <div class="flex flex-wrap justify-around w-1/2 text-blue-600 dark:text-purple-600 text-md">
        <!-- <NuxtLink to="/" class="mx-2">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink> -->
        <NuxtLink v-for="link in links" :key="link.id" :to="`/${link}`">{{link}}</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        'about',
        'projects',
        'blog',
        'contact'
      ]
    }
  }
}
</script>

<style>

</style>