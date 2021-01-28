<template>
  <div>
    <font-awesome-icon :icon="['far', 'lightbulb']" class="text-orange-700 dark:text-gray-400 text-2xl grow" @click="toggleTheme" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>