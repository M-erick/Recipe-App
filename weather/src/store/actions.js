import axiosClient from '@/axiosClient';

export function searchMeals({commit},keyword){
  axiosClient.get(`search.php?s=${keyword}`)
  .then(({data})=>{
    commit('setSearchedMeals',data.meals)

  })

}
export function searchMealsByLetter({ commit }, letter) {
  console.log('Fetching meals for letter:', letter); 
  axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
      console.log('Fetched data:', data); 
      commit('setMealsByLetter', data.meals);
    })
    .catch(error => {
      console.error('Error fetching meals:', error);
    });
}

export function searchMealsByIngredient({commit},ingredient){
  axiosClient.get(`filter.php?i=${ingredient}`)
  .then(({data})=>{
    commit('setMealsIngredients',data.meals)

  })

}