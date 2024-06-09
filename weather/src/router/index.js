import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import  MealList from '../views/MealList.vue'
import MealsByIngredient from '@/views/MealsByIngredient.vue'
import MealsByLetter from '@/views/MealsByletter.vue'
import MealsByName from '@/views/MealsByName.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/by-name/:name',
      name: 'byName',
      component: MealsByName
    },
    {
      path: '/by-letter/:letter',
      name: 'byLetter',
      component: MealsByLetter
    },
    {
      path: '/by-ingredient/:ingredient',
      name: 'byIngredients',
      component: MealsByIngredient
    },
    
  ]
})

export default router
