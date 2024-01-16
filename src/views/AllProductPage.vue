<!-- YourCollectionComponent.vue -->
<template>
  <section class="flex  justify-center">
    <div class="flex flex-col justify-center items-center p-8">
      <h1 class="text-3xl font-bold">Collection</h1>
      <div class="p-3">
        <input class="px-2 py-2 border rounded-md outline-none" v-model="search" tpe="text" placeholder="search...."/>
        <button @click="filterProducts" class="bg-blue-500  text-white px-4 py-2 mt-4 ml-1 rounded-md">Search</button>
    </div>
      <div v-if="isLoading" class="text-gray-700 mt-4">Loading...</div>

      <div v-else>
        <div class="flex flex-wrap justify-evenly">
          <Card v-for="post in Post" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import Card from "@/components/Card.vue"; // Adjust the path based on your project structure

export default {
  components: {
    Card,
  },
  setup() {
    const Post = ref([]);
    const isLoading = ref(true);
    
    const search = ref("");
    const filteredPosts = ref([]);

    const filterProducts = () => {
      const filtered = Post.value.filter(post =>
        post.name
      );
      filteredPosts.value = filtered;
    };

    onMounted(async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        Post.value = res.data;
        console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });

    watch(search, () => {
      filterProducts();

    });

    return {
      Post,
      isLoading,
      search,
      filteredPosts,
    };
  },
};
</script>
