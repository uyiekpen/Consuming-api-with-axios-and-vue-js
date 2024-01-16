<!-- Card.vue -->
<template>
  <div
    class="h-[280px] w-[270px] m-4 leading-4 rounded-lg shadow-lg p-2 cursor-pointer"
    @click="navigateDetails"
  >
    <div class="mb-2">
      <img
        :src="post.image"
        alt="Product Image"
        class="w-full h-40 object-contain overflow-hidden"
      />
    </div>
    <h1 class="text-[15px] font-semibold mb-2">{{ post.title }}</h1>
    <p class="text-gray-700 ">${{ post.price }}</p>
  </div>
</template>

<script>
import {useRouter} from "vue-router"
export default {


  props: {
    post: {
      type: Object,
      required: true,
    },
  },

  setup(props){

      const router = useRouter()

      const navigateDetails  = () =>{
          router.push(`/product/${props.post.id}`)
      }
      return {
        navigateDetails
      }
  }




};
</script>
