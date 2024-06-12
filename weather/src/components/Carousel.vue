<template>
  <div class="carousel">
      <slot :currentSlide="currentSlide"></slot>
  
      <!-- navigation -->
      <div v-if="navigationEnabled" class="navigation py-0 px-16 h-full w-full absolute flex justify-center mt-24 md:mt-2 md:items-center space-x-80 ">
          <div class="toggle-page left flex-1 ">
              <i @click="prevSlide" class="fa fa-chevron-left pointer flex justify-center rounded-full  items-center w-6 bg-yellow-400 h-6 text-white "></i>
          </div>
          <div class="toggle-page right  flex-1 md:justify-end ">
              <i @click="nextSlide" class="fa fa-chevron-right pointer flex justify-center items-center w-6 bg-yellow-400 rounded-full h-6 text-white "></i>
  
          </div>
      </div>
      <!-- pagination -->
      <div v-if="paginationEnabled" class="pagination absolute bottom-2/3  flex w-full space-x-4 md:bottom-2 md:-ml-20 md:justify-center  ">
          <span class=" pointer w-2 h-2  rounded-full ml-40 bg-gray-200 -mt-20 md:-mt-56 shadow-black active:bg-yellow-400 " @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index" :class="{ active: index + 1 === currentSlide }">
  
          </span>
      </div>
  
  </div>
  </template>
  
  <script>
  import {
      ref,
      onMounted
  } from "vue"
  export default {
      props:["startAutoPlay", "timeout", 'navigation', 'pagination'],
      setup(props) {
          const currentSlide = ref(1);
          const getSlideCount = ref(null);
          const autoPlayEnabled = ref(props.startAutoPlay == undefined ?true : props.startAutoPlay);
          const timeoutDuration = ref(props.timeout == undefined ? 5000 : props.timeout);
          const paginationEnabled = ref(props.pagination == undefined ?true : props.pagination);
          const navigationEnabled = ref(props.navigation == undefined ?true : props.navigation);
  
  
          //next
          const nextSlide = () => {
              if (currentSlide.value === getSlideCount.value) {
                  currentSlide.value = 1;
                  return
  
              }
              currentSlide.value += 1;
          }
  
          //prev
          const prevSlide = () => {
              if (currentSlide.value === 1) {
                  currentSlide.value = 3;
                  return
  
              }
              currentSlide.value -= 1;
          }
  
          const goToSlide = (index) => {
              currentSlide.value = index + 1;
  
          }
          const autoPlay = () => {
              setInterval(() => {
                  nextSlide()
              }, timeoutDuration.value);
          };
          if (autoPlayEnabled.value) {
              autoPlay();
          }
  
          onMounted(() => {
              getSlideCount.value = document.querySelectorAll('.slides').length;
              console.log('images count' ,getSlideCount.value)
          })
          return {
              currentSlide,
              nextSlide,
              prevSlide,
              getSlideCount,
              goToSlide,
              paginationEnabled,
              navigationEnabled
          };
      }
  
  }
  </script>
  
  <style>
  .active {
      background-color: yellow;
  
  }
  
  </style>