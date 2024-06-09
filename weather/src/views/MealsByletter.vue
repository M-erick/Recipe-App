<template>
  <div>

    <div class="flex  justify-center gap-2 mt-2">
      <router-link v-for="letter of letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter">
        {{ letter }}
      </router-link>

    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">

      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>

</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import store from '@/store';
import MealItem from '@/components/MealItem.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const meals = computed(()=>store.state.mealsbyLetter);

watch(route, () => {

  store.dispatch('searchMealsByLetter', route.params.letter);

})
onMounted(()=>{
store.dispatch('searchMealsByLetter',route.params.letter);

});
</script>

