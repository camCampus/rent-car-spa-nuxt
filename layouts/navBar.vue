<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "navBar"
})
</script>

<template>
  <!-- Barre de navigation -->

  <div class="navbar flex justify-end border-b-2 border-colorNuxt-green">
    <div class="navbar-start">
      <a href="#" class=" font-bold text-xl">
        <img class="rounded-t-lg w-30" :src="'/rent-car-logo.png'"  alt="" />
      </a>
    </div>
    <div class="navbar-end max-sm:hidden ml-2">
      <ul class="flex space-x-4">
        <li><NuxtLink class=" hover:text-colorNuxt-green" to="/">Accueil</NuxtLink></li>
        <li><NuxtLink class=" hover:text-colorNuxt-green" to="/about">Qui sommes nous ?</NuxtLink></li>
        <li><NuxtLink class=" hover:text-colorNuxt-green" to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end sm:hidden">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] right-1 p-2 shadow bg-colorBackground rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
<!--    <div class="navbar-end">-->
<!--      <button class="btn btn-ghost btn-circle">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>-->
<!--      </button>-->
<!--      <button class="btn btn-ghost btn-circle">-->
<!--        <div class="indicator">-->
<!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>-->
<!--          <span class="badge badge-xs badge-primary indicator-item"></span>-->
<!--        </div>-->
<!--      </button>-->
<!--    </div>-->
  </div>

</template>

<style scoped>

</style>