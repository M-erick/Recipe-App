<template>
  <div class="border rounded shadow group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative">
    <div class="px-3 py-2 relative">
      <router-link to="/">
        <img
          src="../assets/fishSoup.jpeg"
          alt="mealstrMeal"
          class="rounded-xl h-48 w-full object-cover transition-transform duration-300 transform group-hover:scale-105">
      </router-link>
      <i @click="likeItem"
        :class="{
          'fas fa-heart absolute top-3 right-4  bg-white/70 backdrop-blur-sm text-red-500 rounded-full p-2': like,

          'fas fa-heart absolute top-3 right-4  bg-white/70 backdrop-blur-sm like-default rounded-full p-2': !like
        }"></i>
    </div>

    <div class="px-3 py-2">
      <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>
    </div>
  </div>

</template>
<script setup>
import { ref } from "vue"

const like = ref(false);
const likeItem = ()=>{
  like.value = !like.value;

}
</script>
<style scoped>
.like-default{
  color :rgba(76,155,150,255);

}
</style>