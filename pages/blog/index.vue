<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-1/2">
      <div v-for="post in posts" :key="post.id" class="bg-gray-100 p-2 shadow-md text-black">
        <NuxtLink :to="`blog/${post.link}`">
          <div class="flex justify-between">
            <p>{{post.title}}</p>
            <p class="italic">{{post.date}}</p>
          </div>
          <p class="p-2">{{post.synopsis}}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('blog').sortBy('createdAt').fetch()

    return { posts }
  }
}
</script>

<style>

</style>