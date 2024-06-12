<template>
  <div class="flex p-8 justify-center">

    <div class="relative pt-2 lg:pt-2 ">

      <Carousel :pagination="true" :navigation="false" :timeout="5000" :startAutoplay="true" class="h-screen relative"
        v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in resolvedSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="md:h-[46rem] absolute w-full">
            <img class=" w-screen max-h-full" :src="slide">
          </div>
        </Slide>
      </Carousel>
      <div></div>
      <article class="bg-white   ">
        <div class="border rounded">


          <div class="px-3 pb-2 pt-0 ">
            <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>

          </div>
        </div>
      </article>

      <div class=" rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2">
         <!-- Loop  through the below cards:currently they are static -->
          <HomeLikableCard />
          <HomeLikableCard />
          <HomeLikableCard />
          <HomeLikableCard />
          <HomeLikableCard />
        </div>
      </div>
    </div>
  </div>




</template>
<script setup>
import { computed, ref, onMounted } from 'vue';
import store from '../store';
import axiosClient from '@/axiosClient';
import Slide from '@/components/Slide.vue';
import Carousel from '@/components/Carousel.vue';
import HomeLikableCard from '@/components/HomeLikableCard.vue';

const carouselSlides = ['image', 'image1', 'image3'];
// const slides =  ref([]);


const resolvedSlides = ref([]);

const getSlideImage = (slideName) => {
  // Import the image dynamically using import
  return import(`../assets/${slideName}.png`)
    .then(module => module.default)
    .catch(error => {
      console.error(`Error loading slide image: ${error}`);
      return null;
    });
};

onMounted(async () => {
  const slides = await Promise.all(carouselSlides.map(slide => getSlideImage(slide)));
  // console.log(slides);
  resolvedSlides.value = slides.filter(Boolean);
  const response = await axiosClient('/list.php?i=list')
});

</script>