<template>
  <div>
    <AnimatedPlaceholder class="h-10 mb-5" />
      <AnimatedPlaceholder class="h-64 mb-5" />
      <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
        <AnimatedPlaceholder class="h-6 w-24" />
        <AnimatedPlaceholder class="h-6 w-24" />
        <AnimatedPlaceholder class="h-6 w-24" />
      </div>
      <div class="my-3">
        <AnimatedPlaceholder class="h-48" />
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 class="text-2xl font-semibold mb-2">Ingredient</h2>
          <ul>
            <template v-for="n in 10" :key="n">
              <AnimatedPlaceholder class="h-4 mb-2" />
            </template>
          </ul>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-2">Measures</h2>
          <ul>
            <template v-for="n in 10" :key="n">
              <AnimatedPlaceholder class="h-4 mb-2" />
            </template>
          </ul>
        </div>
      </div>
      <div class="mt-4 flex gap-2">
        <AnimatedPlaceholder class="h-10 w-32" />
        <AnimatedPlaceholder class="h-10 w-32" />
      </div>
  </div>
  
</template>

<script setup>
import AnimatedPlaceholder from '@/components/AnimatedPlacehoder.vue';


</script>

