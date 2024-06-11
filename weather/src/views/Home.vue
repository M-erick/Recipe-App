<template>
  <div class="flex p-8 justify-center">

    <div class="relative pt-2 lg:pt-2 ">

      <article class="bg-white  mt-2 ml-3 mr-3 mb-3   group   cursor-pointer border">

        <div class="relative  ">
          <img class="max-h-80  w-full object-cover  "
            src="https://plus.unsplash.com/premium_photo-1661902745675-11846e4f9a41?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="">



        </div>


        <div>
        </div>
      </article>
      <article class="bg-white  p-6  ">


        <div class="border rounded">


          <div class="px-3 py-2 ">
            <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>

          </div>
        </div>

        <div>
        </div>
      </article>

      <div class=" rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2">

          <div
            class="border rounded shadow group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative">
            <div class="px-3 py-2 relative">
              <router-link to="/">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661902745675-11846e4f9a41?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="mealstrMeal"
                  class="rounded-xl h-48 w-full object-cover transition-transform duration-300 transform group-hover:scale-105">
              </router-link>
              <i class="fas fa-heart absolute top-3 right-4 hover:right-3 bg-white/70 backdrop-blur-sm text-red-500 rounded-full p-2"></i>
            </div>

            <div class="px-3 py-2">
              <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>
            </div>
          </div>
          <div class="border rounded shadow group transform hover:-translate-y-2 hover:shadow-2xl  cursor-pointer ">
            <div class="px-3 py-2">

              <router-link to="/">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661902745675-11846e4f9a41?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="mealstrMeal"
                  class="rounded-xl h-48 w-full object-cover  transition-transform duration-300 transform group-hover:scale-105">
              </router-link>


            </div>

            <div class="px-3 py-2 ">
              <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>




</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '@/axiosClient';

onMounted(async () => {
  const response = await axiosClient('/list.php?i=list')
});
</script>