<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Contact"
})
</script>

<template>

  <section class="bg-colorSecondary py-10 my-8">
    <div class="container mx-auto flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-8">Nous contacter</h2>
      <p class="mb-4 m-2 text-center">Pour toute question ou demande de réservation, n'hésitez pas à nous contacter.</p>
      <NuxtLink class="inline-block bg-colorNuxt-green hover:bg-colorPrimary text-white font-bold py-3 px-6 rounded" to="/contact">Nous contacter</NuxtLink>
    </div>
  </section>

</template>

<style scoped>

</style>