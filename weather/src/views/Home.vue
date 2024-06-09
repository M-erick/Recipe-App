

<template>
  <div class="flex p-8 justify-center">

   
    

  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '@/axiosClient';
 
onMounted(async()=>{
  const response = await axiosClient('/list.php?i=list')
 });
</script>