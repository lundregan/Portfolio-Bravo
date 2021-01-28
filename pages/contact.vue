<template>
  <div class="flex flex-col items-center">
      <div class="text-center border-t-4 border-b-4 border-blue-600 rounded-xl px-2 py-4">
          <p class="text-2xl">STATUS</p>
          <p class="text-4xl text-green-600">AVAILABLE</p>
          <p class="text-gray-700">I am Currently taking on new projects</p>
      </div>
      
      <div class="mt-16">
        <div class="flex flex-wrap w-full">
          <div class="flex flex-col mx-2 flex-grow">
            <label for="" class="text-center">Name</label>
            <input type="text" class="bg-gray-100 p-2 rounded shadow" />
          </div>
          <div class="flex flex-col mx-2 flex-grow">
            <label for="" class="text-center">Email</label>
            <input type="text" class="bg-gray-100 p-2 rounded shadow" />
          </div>
        </div>
        <div class="flex flex-col mx-2 mt-8">
          <label for="" class="text-center">How Can I help?</label>
          <textarea name="" id="" cols="30" rows="10" class="bg-gray-100 p-2 rounded shadow"></textarea>
        </div>
        <button class="bg-blue-600 text-white float-right rounded shadow-xl m-2 mt-8 p-2 w-32">Send</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>