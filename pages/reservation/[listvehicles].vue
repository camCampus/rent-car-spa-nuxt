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
   this.s = this.$route.query.start
   this.e = this.$route.query.end
   this.reservationStore.getVehiclesForDates(this.s, this.e)
 },
  methods: {
     async getVehicleList() {
        this.list = await this.reservationStore.vehiclesList
    }
  },
data() {
    return {
      s: '',
      e:'',
      list : []
    }
}
})
</script>

<template>
  <pre>
    {{this.getVehicleList()}}
  </pre>
<div v-for="item in list">
  <card/>
</div>
</template>

<style scoped>

</style>