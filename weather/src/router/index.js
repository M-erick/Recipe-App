import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import  MealList from '../views/MealList.vue'
import MealsByIngredient from '@/views/MealsByIngredient.vue'
import MealsByLetter from '@/views/MealsByletter.vue'
import MealsByName from '@/views/MealsByName.vue'
import DefaultLayout from '@/components/DefaultLayout.vue';
import GuestLayout from '@/components/GuestLayout.vue'
import MealDetails from '@/views/MealDetails.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:DefaultLayout,
      children:[
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/letter/:letter',
          name: 'byLetter',
          component: MealList
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredients',
          component: MealsByIngredient
        },
        {
          path:'/meal/:id',
          name:'mealDetails',
          component:MealDetails,
        }

      ]


    },
    {  
      path:'/guest',
      component:GuestLayout,
      children:[

      ]

    }
   
    
  ]
})

export default router
