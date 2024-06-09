<template>
  <div>

    <div class="p-8 pb-0">

      <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full"
        placeholder="Search for Meals" @change="searchMeals">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
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
    </div>
  </div>

</template>

<script setup>
import store from '@/store';
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import YouTube from '@/components/YouTubeButton.vue';
const route = useRoute();
const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch('searchMeals', keyword.value)
}
onMounted(() => {
  keyword.value = route.params.name;
  searchMeals();

})

</script>

<style></style>