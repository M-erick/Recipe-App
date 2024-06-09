<template>
  <a class="px-3 py-2   text-white rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors"
    :href="href" 
    target="_blank">
  
    <slot></slot>
    </a>
</template>

<script setup>

const props = defineProps({
  href:String
});
</script>