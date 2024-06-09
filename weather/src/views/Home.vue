

<template>
  <div class="flex p-8 justify-center">

   
    <div class="flex  justify-center gap-2 mt-2">
       <router-link v-for="letter of letters" :to="{name:'byLetter',params:{letter}}" :key="letter " >
        {{ letter }}

       </router-link>

    </div>

  </div>
</template>
<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '@/axiosClient';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
 
onMounted(async()=>{
  const response = await axiosClient('/list.php?i=list')
 });
</script>