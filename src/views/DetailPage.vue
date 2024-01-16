<template>
  <div class="flex justify-center p-8 ">
    <div class="flex flex-col w-full justify-center">
      <h1 class="text-center text-xl font-bold">Product Details</h1>
      <div class="flex flex-wrap">
        <div class="h-[400px] md:w-[300px] w-[250px] ">
          <img
            :src="Post.image"
            class="w-full h-full object-contain overflow-hidden"
          />
        </div>
        <div class="mt-2 md:p-8 w-[300px] md:w-[700px]">
          <p class="mb-2 capitalize">
            <strong>Title:</strong>
            {{Post.title
            }}
          </p>
          <p class="mb-2">
            <strong>description:</strong>

            {{Post.description
            }}
          </p>
          <p class="mb-2 capitalize">
            <strong>Price:</strong>

            ${{Post.price
            }}
          </p>
          <p class="mb-2 capitalize">
            <strong>category:</strong>

            {{Post.category
            }}
          </p>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from "vue"
import axios from "axios"
import { useRoute } from 'vue-router'

export default {

setup(){
 const Post = ref([])
 const route = useRoute()


 onMounted(async () => {
        try {
            const postId = route.params.id
            console.log(postId)
            const res = await axios.get(`https://fakestoreapi.com/products/${postId}`);
          Post.value = res.data;
          console.log(res.data)
        } catch (error) {
          console.error(error);
        }
      });

 return {
    Post
 }

}

}
</script>
