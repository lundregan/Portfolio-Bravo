<template>
  <div>
    <font-awesome-icon :icon="[iconStyle, 'lightbulb']" class="text-orange-500 dark:text-gray-500 text-2xl grow" @click="toggleTheme" />
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data () {
    return {
      iconStyle: 'far'
    }
  },
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(theme) {
      this.iconStyle = (theme == 'dark') ? 'far' : 'fas' 
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch("toggleTheme");
    },
  },
};
</script>