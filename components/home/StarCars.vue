

<template>
  <section class="py-10">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold m-2 mb-8">Voitures en vedette</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Remplacez les blocs ci-dessous par les détails réels de vos voitures en vedette -->
<!--        <home-card-star-cars :cars-url="'/images/TRAFIC.png'"/>-->
<!--        <home-card-star-cars :cars-url="'/images/CLIO.png'"/>-->
<!--        <home-card-star-cars :cars-url="'/images/CLIO.png'"/>-->

      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import {useReservationStore} from "~/stores/reservations";

export default defineComponent({
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  name: "StarCars",
  created() {
    this.reservationStore.getReservationList();
    this.findMustReservedVehicles()
  },
  data() {
    return {
      reservations: [],
      test: []
    }
  },
  methods: {
     findMustReservedVehicles() {
      console.log('je passe')
      this.reservations = this.reservationStore.allReservations
      console.log(this.reservations)
      // const tab = []
      // this.vehicles.forEach(ele => console.log(ele))
      for (let i =0; i < this.reservations.length; )
      for (const vehicle in this.reservations) {
        console.log('dans la loop')
        console.log(vehicle);
        // tab.push(vehicle)
      }
      // return tab
    }
  }
})
</script>