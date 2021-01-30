<template>
  <div class="flex flex-col items-center">
    <div class="text-center">
      <p class="text-4xl dark:text-purple-600">Ethan Lundregan</p>
      <p class="text-gray-800 dark:text-gray-300">A Next Generation Developer</p>
    </div>
    <div class="flex mt-8">
      <NuxtLink to="/projects">
        <button class="text-white bg-blue-600 dark:bg-purple-600 rounded m-2 p-2 shadow-md">View My Work</button>
      </NuxtLink>
      <NuxtLink to="/contact">
        <button class="text-white bg-blue-600 dark:bg-purple-600 rounded m-2 p-2 shadow-md">Get In Touch</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DarkmodeToggle from '~/components/DarkmodeToggle.vue'

export default Vue.extend({
  components: { DarkmodeToggle },})
</script>

<style>

</style>
