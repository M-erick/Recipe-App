<template>
  <div class="border rounded shadow group transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer relative">
    <div class="px-3 py-2 relative">
      <router-link to="/">
        <img
          src="https://plus.unsplash.com/premium_photo-1661902745675-11846e4f9a41?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="mealstrMeal"
          class="rounded-xl h-48 w-full object-cover transition-transform duration-300 transform group-hover:scale-105">
      </router-link>
      <i
        class="fas fa-heart absolute top-3 right-4 hover:right-3 bg-white/70 backdrop-blur-sm text-red-500 rounded-full p-2"></i>
    </div>

    <div class="px-3 py-2">
      <h3 class="font-semibold">Lorem ipsum dolor sit amet.</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia.</p>
    </div>
  </div>

</template>