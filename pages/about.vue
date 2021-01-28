<template>
  <div class="flex justify-around">
    <div
      v-for="domain in domains"
      :key="domain.id"
      class="bg-blue-400 w-1/5 text-center rounded-t-xl rounded-b-xl"  
    >
      <p class="text-2xl">{{domain.title}}</p>
      <div class="bg-gray-100 rounded-t-xl rounded-b-xl pt-8">
          <p v-for="skill in domain.skills" :key="skill.id">{{skill}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      domains: [
        {
          title: 'Front-End',
          skills: ['Vue', 'Nuxt', 'Firebase']
        },
        {
          title: 'Back-End',
          skills: ['Node.js', 'Express', 'websockets']
        },
        {
          title: 'Tools',
          skills: ['Git', 'Figma', 'Typescript']
        }
      ]
    }
  }
}
</script>

<style>

</style>