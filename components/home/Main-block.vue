<script lang="ts">
import {defineComponent} from 'vue'
import ReservationSetup from "~/components/home/ReservationSetup.vue";

export default defineComponent({
  name: "Main-block",
  components: {ReservationSetup}
})
</script>

<template>

  <section class="main-block text-white text-center py-20 flex flex-col justify-center items-center space-y-32">
    <div class="main-block-part1 md:mt-0 mt-20">
      <h1 class="text-4xl font-bold mb-4">Louez une voiture dès aujourd'hui</h1>
      <p class="text-lg m-2">Découvrez notre large sélection de voitures disponibles à la location.</p>
      <a href="#"
         class="mt-4 inline-block bg-colorNuxt-green hover:bg-colorBackground text-white font-bold py-3 px-6 rounded">Voir
        les
        voitures disponibles</a>
    </div>
    <div class="main-block-part2 w-4/5">
      <!--  Section reservation-->
      <ReservationSetup/>
    </div>
  </section>

</template>

<style scoped>

</style>