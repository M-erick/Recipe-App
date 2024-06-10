<template v-for="n in 10" :key="n">
  <div class="block bg-white rounded p-3 mb-3 shadow">
    <AnimatedPlaceholder class="h-6 w-1/2 mb-2" />
    <!-- <AnimatedPlaceholder class="h-4 w-full" /> -->
  </div>
</template>
<script setup>
import AnimatedPlaceholder from '@/components/AnimatedPlacehoder.vue';
</script>
