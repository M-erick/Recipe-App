<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4">
      Ingredients
    </h1>
    <div class="p-8 pb-0">
      <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full mb-3"
        placeholder="Search for Ingredients">
    </div>
    <div v-if="loading">
      <IngredientSkeleton />
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-3">
      <router-link :to="{ name: 'byIngredients', params: { ingredient: ingredient.strIngredient } }"
        v-for="ingredient of computedIngredients" :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer border">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
        <!-- <p>{{ ingredient.strDescription }}</p> -->
      </router-link>
    </div>
  </div>
</template>

<script setup>
import axiosClient from '@/axiosClient';
import { computed, onMounted, ref } from 'vue';
import IngredientSkeleton from '@/components/Animations/IngredientSkeleton.vue';

const ingredients = ref([]);
const keyword = ref('');
const loading = ref(true);

const computedIngredients = computed(() => {
  if (!keyword.value) return ingredients.value;

  return ingredients.value.filter(i =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  setTimeout(() => {
    axiosClient.get(`list.php?i=list`).then(({ data }) => {
      ingredients.value = data.meals;
      loading.value = false;
    });
  }, 2000); 
});
</script>


