<template>
  <div>

    <header class="bg-white shadow h-16 flex justify-between items-stretch">
      <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5">
        

        <img src="../assets/images/cooks.png"  width="50px" height="50px" alt="">
        
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name:'byName'}" class="inline-flex items-center transition-colors navbar__link-hover h-full ">
          Search Meals
        </router-link>
        <!-- <router-link :to="{name:'byLetter'}" class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100">
         Meals by Letter
        </router-link> -->
        <router-link :to="{name:'ingredients'}" class="inline-flex items-center transition-colors navbar__link-hover h-full ">
         Meals by Ingredients
        </router-link>

      </div>


    </header>
  </div>
  
</template>
<script setup>
</script>
<style scoped>
.navbar__link-hover {
  padding-left:2px;
  padding-right: 2px;
}
.navbar__link-hover:hover{
  color :rgba(76,155,150,255);
}
</style>