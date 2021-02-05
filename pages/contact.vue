<template>
  <div class="flex flex-col items-center pt-4">
      <div class="text-center border-t-4 border-b-4 border-blue-600 dark:border-purple-600 rounded-xl px-2 py-4">
          <p class="text-2xl dark:text-white">STATUS</p>
          <p class="text-4xl text-green-600">AVAILABLE</p>
          <p class="text-gray-700 dark:text-gray-500">I am Currently taking on new projects</p>
      </div>
      
      <div class="mt-16">
        <div class="flex flex-wrap w-full">
          <div class="flex flex-col mx-2 flex-grow">
            <label for="" class="text-center dark:text-white">Name</label>
            <input v-model="name" type="text" class="bg-gray-100 p-2 rounded shadow text-black" />
          </div>
          <div class="flex flex-col mx-2 flex-grow">
            <label for="" class="text-center dark:text-white">Email</label>
            <input v-model="email" type="text" class="bg-gray-100 p-2 rounded shadow text-black" />
          </div>
        </div>
        <div class="flex flex-col mx-2 mt-8">
          <label for="" class="text-center dark:text-white">How Can I help?</label>
          <textarea v-model="message" name="" id="" cols="30" rows="10" class="bg-gray-100 p-2 rounded shadow text-black"></textarea>
        </div>
        <button class="bg-blue-600 dark:bg-purple-600 text-white float-right rounded shadow-xl m-2 mt-8 p-2 w-32" @click="sendMail()">Send</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMail: function () {
      this.$axios.post("/api/contact", {
        name: this.name,
        email: this.email,
        message: this.message  
      })

      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style>

</style>