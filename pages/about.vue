<template>
  <div class="flex flex-col">
    <div class="flex justify-around">
      <div v-for="value in values" :key="value.id" class="text-center w-64 grow">
        <font-awesome-icon :icon="value.icon" class="text-6xl" />
        <p class="mt-8 text-blue-700 dark:text-red-600 text-3xl">{{value.title}}</p>
        <p class="mt-4">{{value.description}}</p>
      </div>
    </div>
    <div class="flex justify-around mt-32">
      <font-awesome-icon v-for="skill in skills" :key="skill.id" :icon="skill.icon" :class="skill.color" class="text-4xl grow" @click="setSelectedSkill(skill.name)"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSkill: '',
      values: [
        {
          icon: ['fas', 'fighter-jet'],
          title: 'Fast',
          description: 'No one likes a slow website especially your users. Fast loading times are essential for a great and lasting impression!'
        },
        {
          icon: ['fas', 'mobile-alt'],
          title: 'Responsive & Accessible',
          description: 'Your design should shine, no matter what medium is used to engage it.'
        },
        {
          icon: ['fas', 'pencil-ruler'],
          title: 'Strong UI / UX',
          description: 'Easy to navigate, and being intuitive to use should be a Priority!'
        }
      ],
      skills: [
        {
          name: 'css',
          color: 'text-blue-600',
          icon: ['fab', 'css3']
        },
        {
          name: 'sass',
          color: 'text-purple-600',
          icon: ['fab', 'sass']
        },
        {
          name: 'vue',
          color: 'text-green-600',
          icon: ['fab', 'vuejs'] 
        },
        {
          name: 'git',
          color: 'text-orange-600',
          icon: ['fab', 'git']
        },
        {
          name: 'node',
          color: 'text-green-500',
          icon: ['fab', 'node']
        }

      ]
    }
  },
  methods: {
    setSelectedSkill: function (skill) {
      this.selectedSkill = skill
    }
  }
}
</script>

<style>

</style>