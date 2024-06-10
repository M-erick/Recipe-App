<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">

    </router-link>

    <div class="px-3">
      <h3 class="font-semibold">{{ meal.strMeal }}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut vero mollitia provident possimus.</p>
      <div class="flex items-center justify-between">

        <YouTube :href="meal.strYoutube">YouTube</YouTube>

      </div>
    </div>
  </div>
</template>

<script setup>
import YouTube from '@/components/YouTubeButton.vue';
const loading
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});
</script>

<style></style>