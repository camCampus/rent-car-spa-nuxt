<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "StarCars"
})
</script>

<template>
  <section class="py-10">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold m-2 mb-8">Voitures en vedette</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Remplacez les blocs ci-dessous par les détails réels de vos voitures en vedette -->

        <card :cars-url="'/208.png'"/>
        <card :cars-url="'/CLIO.png'"/>
        <card :cars-url="'/CLIO.png'"/>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>