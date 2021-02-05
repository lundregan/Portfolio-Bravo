<template>
  <div class="flex flex-col justify-between min-h-screen bg-gray-300 dark:bg-gray-900 text-black dark:text-gray-200">
    <Navbar />
    <main id="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark-mode")
        : document.querySelector("html").classList.add("dark-mode");
    }
  }
}
</script>

<style>

</style>
