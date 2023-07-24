<template>
  <body class="bg-colorBackground">

  <!-- Section principale -->
  <main-block />

  <!-- Section des voitures en vedette -->
  <StarCars />

  <!-- Section avis -->
  <avis />

  <!-- Section de contact -->
  <Contact />

  </body>
</template>

<script>
import {defineComponent} from 'vue'
import ReservationSetup from "~/components/home/ReservationSetup.vue";
import StarCars from "~/components/home/StarCars.vue";
import MainBlock from "~/components/home/Main-block.vue";
import Avis from "../components/home/avis.vue";

export default defineComponent({
  name: "test",
  components: {Avis, MainBlock, StarCars, ReservationSetup}
})
</script>