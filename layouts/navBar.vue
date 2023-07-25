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

        <NuxtLink class=" hover:text-colorNuxt-green" to="/"><img class="rounded-t-lg w-30" :src="'/rent-car-logo.png'"  alt="" />
        </NuxtLink>

    </div>
    <div class="navbar-end max-sm:hidden mx-6">
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
          <li><NuxtLink class=" hover:text-colorNuxt-green" to="/">Accueil</NuxtLink></li>
          <li><NuxtLink class=" hover:text-colorNuxt-green" to="/about">Qui sommes nous ?</NuxtLink></li>
          <li><NuxtLink class=" hover:text-colorNuxt-green" to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>