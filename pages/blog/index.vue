<template>
  <div class="flex flex-col items-center">
    <div class="mb-16">
      <p class="text-center text-xl font-semibold">Search</p>
      <input type="text" class="p-2 text-black self-center shadow-md" v-model="searchQuery" />
    </div>
    <div class="w-1/2">
      <div v-for="post in posts" :key="post.id" class="bg-gray-100 p-2 shadow-xl text-black my-8">
        <NuxtLink :to="`blog/${post.link}`">
          <div class="flex justify-between">
            <p class="text-blue-700 dark:text-purple-600 text-2xl">{{post.title}}</p>
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
  data () {
    return {
      searchQuery: '',
      posts: []
    }
  },

  async mounted () {
    this.loadAllPosts()
  },

  watch: {
    async searchQuery( searchQuery ) {
      if(!searchQuery) {
        this.loadAllPosts()
      }else{
        this.posts = await this.$content('blog').sortBy('createdAt').limit(6).search(searchQuery).fetch()
      }
    }
  },

  methods: {
    async loadAllPosts () {
      this.posts = await this.$content('blog').sortBy('createdAt').fetch()
    }
  }
}
</script>

<style>

</style>