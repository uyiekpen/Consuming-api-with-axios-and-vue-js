<!-- YourCollectionComponent.vue -->
<template>
  <section class="flex  justify-center">
    <div class="flex flex-col justify-center items-center p-8">
      <h1 class="text-3xl font-bold">Collection</h1>

      <div v-if="isLoading" class="text-gray-700 mt-4">Loading...</div>

      <div v-else>
        <div class="flex flex-wrap justify-evenly">
          <Card v-for="post in Post" :key="post.id" :post="post" />
        </div>
      </div>

      <button
        class="bg-blue-500 text-white px-4 py-2 mt-4"
        @click="navigateToAll"
        :disabled="isLoading || Post.length === 0"
      >
        See all Products
      </button>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Card from "@/components/Card.vue";
import {useRouter} from 'vue-router'


export default {
  components: {
    Card,
  },
  setup() {
    const Post = ref([]);
    const isLoading = ref(true);

    const router = useRouter();

    const navigateToAll = () => {
    router.push("/product")
}


    onMounted(async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products?limit=4");
        Post.value = res.data;
        console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      Post,
      isLoading,
      navigateToAll
    };
  },
};
</script>
