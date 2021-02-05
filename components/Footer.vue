<template>
  <footer class="text-center font-serif flex flex-col items-center pt-8">
    <div class="flex justify-around w-64 pb-2">
      <a href="https://twitter.com/lundregan1" target="_blank" class="grow">
        <font-awesome-icon :icon="['fab', 'twitter']" class="text-blue-600 dark:text-blue-500 text-2xl" />
        <p class="text-xs sr-only">Twitter</p>
      </a>
      <a href="https://github.com/lundregan" target="_blank" class="grow">
        <font-awesome-icon :icon="['fab', 'github']" class="text-purple-600 dark:text-purple-500 text-2xl" />
        <p class="text-xs sr-only">Github</p>
      </a>
      <a href="https://linkedin.com/in/elundregan/" target="_blank" class="grow">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-blue-700 dark:text-blue-500 text-2xl" />
        <p class="text-xs sr-only">LinkedIn</p>
      </a>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
.grow {
  transition: all .2s ease-in-out;
}

.grow:hover {
  transform: scale(1.25);
}
</style>