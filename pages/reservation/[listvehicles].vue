<script>
import {defineComponent} from 'vue'
import {useReservationStore} from "~/stores/reservations";
import CustomDropDownFilter from "~/components/filter/custom-drop-down-filter.vue";

export default defineComponent({
  name: "listVehicles",
  components: {CustomDropDownFilter},
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  created() {
    this.reservationStore.initResa(this.$route.query.start, this.$route.query.end)
  },
  methods: {
    sortResult() {
      return this.reservationStore.vehiclesWithPrice.reduce((prev, cur) => [
        ...prev.filter((obj) => obj.model !== cur.model), cur
      ], []);
    },
  }
})
</script>

<template>
  <div class="listVehiclesContainer flex flex-col min:h-screen">

      <div class="w-1/3 flex items-center justify-around p-4">
        <h2>Filters Options </h2>
        <div id="filter-bar" class="w-fit flex flex-col sm:flex-row justify-center mx-auto">
          <custom-drop-down-filter :items="reservationStore.vehiclesList" :filter-name="'brand'"/>
          <custom-drop-down-filter :items="reservationStore.vehiclesList" :filter-name="'type'"/>
          <custom-drop-down-filter :items="reservationStore.vehiclesList" :filter-name="'model'"/>
        </div>

    </div>

    <div id="container" class="flex flex-wrap w-full ">
      <div v-for="item in sortResult()" class=" flex justify-center items-center sm:basis-1/3 lg:basis-1/4">
        <card :item="item"/>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>