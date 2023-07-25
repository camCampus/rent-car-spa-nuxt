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
   console.log('startDate',this.$route.query.start)
   console.log('endDate',this.$route.query.end)
   this.s = this.$route.query.start
   this.e = this.$route.query.end
   this.reservationStore.getVehiclesForDates(this.$route.query.start, this.$route.query.end)
 },
  methods() {
    async getVehicleList() {
      return await this.reservationStore.vehiclesList
    }
  },
data() {
    return {
      s: '',
      e:'',
      list : this.getVehicleList
    }
}
})
</script>

<template>
  <pre>
{{list}}
  </pre>
</template>

<style scoped>

</style>