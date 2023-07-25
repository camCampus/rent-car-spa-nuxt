<script>
import {defineComponent} from 'vue'
import {useReservationStore} from "~/stores/reservations";

export default defineComponent({
  name: "listVehicles",
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
 created() {
   this.reservationStore.getVehiclesForDates(this.$route.query.start,this.$route.query.end)
 },
})
</script>

<template>
<div v-for="item in reservationStore.vehiclesList">
  <card/>
</div>
</template>

<style scoped>

</style>