<template>
  <nav>
    <div class="flex justify-between pt-1 px-2">
      <div class="flex">
        <a class="skip-link skip-to-content-link p-1" href="#main">Skip to Main</a>
        <DarkmodeToggle />
        <NuxtLink to="/">
          <h1 class="pl-2 dark:text-purple-600">Lundregan</h1>
        </NuxtLink> 
      </div>
      <div class="flex flex-wrap justify-around w-1/2 text-blue-600 dark:text-purple-600 text-md">
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
.skip-to-content-link {
  height: 30px;
  left: 50%;
  position: absolute;
  transform: translateY(-100%);
  transition: transform linear 0.3s;
}

.skip-to-content-link:focus {
  transform: translateY(0%);
  @apply bg-gray-800
}
</style>