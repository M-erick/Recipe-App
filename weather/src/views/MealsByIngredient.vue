<template>
  <div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import store from '@/store';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Meals from '@/components/Meals.vue';
const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);

});
</script>

<style></style>