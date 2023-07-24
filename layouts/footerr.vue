<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "footerr"
})
</script>

<template>
  <div class="flex items-center justify-center sm:flex-row flex-col text-center py-4 border-t-2 border-colorNuxt-green">
    <ul class="flex items-center justify-center sm:flex-row flex-col">
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/condition">Conditions générales de vente</NuxtLink>
      </li>
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/mention">Mention légales</NuxtLink>
      </li>
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/contact">Contact</NuxtLink>
      </li>
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/paiement">Paiement</NuxtLink>
      </li>
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/">Garantie</NuxtLink>
      </li>
      <li class="m-2">
        <NuxtLink class=" hover:text-colorNuxt-green" to="/faq">FAQ</NuxtLink>
      </li>
    </ul>
  </div>
  <p class="text-center mb-2">&copy; 2023 LocationVoiture. Tous droits réservés.</p>
</template>

<style scoped>

</style>