<script setup>
import Collection from "../components/Collection.vue"
</script>

<template>
  <div class="relative">
    <div class="h-[600px] w-full relative">
      <img src="../assets/shoe1.jpg" class="w-full h-full object-cover" />
    </div>
    <div
      class="absolute top-0 left-0 text-white p-4 flex justify-center items-center w-full h-full flex-col "
    >
      <h2 class="text-7xl font-bold uppercase">Latest Arrival</h2>
      <button class="bg-blue-500  text-white px-4 py-2 mt-4">Shop Now</button>
    </div>
  </div>
  <div>
    <Collection />
  </div>
</template>
