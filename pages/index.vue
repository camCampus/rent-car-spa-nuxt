<template>
  <div>
    <h1 class="bg-nuxt-green font-heading font-bold">Welcome to the homepage</h1>
  </div>
  <pre>
    {{ getForUserDate }}
  </pre>
  <div class="flex w-full h-fit justify-around lg:flex-row">
    <card :cars-url="'/clio4.png'"/>
    <card :cars-url="'/208.png'"/>
  </div>
</template>
<script>
import {useVehicleStore} from '~/stores/vehicles'
import {useReservationStore} from "~/stores/reservations";

export default {
  setup() {
    const vehicleStore = useVehicleStore()
    const reservationStore = useReservationStore()
    return {vehicleStore, reservationStore}
  },
  created() {
    this.vehicleStore.getAllVehicles()
    this.reservationStore.getForDate('2023-12-15', '2023-12-30')
  },
  computed: {
    getVehicleList() {
      return this.vehicleStore.vehicleList
    },

    getForUserDate() {
      return this.reservationStore.resaForDate
    }
  },
}
</script>