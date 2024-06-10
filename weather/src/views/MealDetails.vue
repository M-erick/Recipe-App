<template>
  <div class="max-w-[800px] mx-auto p-8">
    <div v-if="loading">
      <MealDetailsSkeleton/>
    </div>

    <div v-else>
      <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
      <img class="max-w-[100%]" :src="meal.strMealThumb" :alt="meal.strMeal">

      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <div>
          <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
        </div>
        <div>
          <strong class="font-bold">Area:</strong>{{ meal.strArea }}
        </div>
        <div>
          <strong class="font-bold">Tags:</strong>{{ meal.strTags }}
        </div>
      </div>

      <div class="my-3">
        {{ meal.strInstructions }}
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredient</h2>
          <ul>
            <template v-for="(el, ind) in new Array(20)">
              <li v-if="meal[`strIngredient${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="(el, ind) in new Array(20)">
              <li v-if="meal[`strMeasure${ind + 1}`]">
                {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
              </li>
            </template>
          </ul>
        </div>
        <div class="mt-4">
          <YouTubeButton :href="meal.strYoutube">Go to YouTube</YouTubeButton>
          <a class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors" :href="meal.strSource" target="_blank">
            View Original Source
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import YouTubeButton from '@/components/YouTubeButton.vue';
import axiosClient from '@/axiosClient';
import MealDetailsSkeleton from '@/components/Animations/MealDetailSkeleton.vue';

const route = useRoute();
const meal = ref({});
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
      .then(({ data }) => {
        if (data.meals && data.meals.length > 0) {
          meal.value = data.meals[0];
          loading.value = false;
        }
      });
  }, 2000);
});
</script>

