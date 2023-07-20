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
  data() {
    return {
      resa: []
    }
  },
  created() {
    console.log(this.resa)
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
  methods: {
    async getRes(s,e) {
      this.resa = await fetch('http://172.10.230.10:8083/reservations/AviaibleVehicles' + '?dateDebut='+ s + '&dateFin=' + e)
    }
  },

}
</script>