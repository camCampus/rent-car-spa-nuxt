<template>
  <section class="py-10">
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold m-2 mb-8">Voitures en vedette</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

<!--        TODO Implémenter les props avec les data pour les cards-->
        <div v-for="model in top3model" :key="model">
          <home-card-star-cars :cars-url="`/images/${model}.png`"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

import {useReservationStore} from "../../stores/reservations";
import {useVehicleStore} from "../../stores/vehicles";


export default defineComponent({
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  name: "StarCars",

  async created() {
    await useVehicleStore().getAllVehicles();
    await useReservationStore().allReservation();
    await useReservationStore().getPrice();
    await this.findMustReservedVehicles();
    await this.getPrices();

  },
  data() {
    return {
      reservations: [],
      vehicles: [],
      top3model: [],
      prices: [],
    }
  },
  methods: {


    sortResult() {
      return this.useReservationStore.vehiclesWithPrice.reduce((prev, cur) => [
        ...prev.filter((obj) => obj.model !== cur.model), cur
      ], []);
    },

    async getPrices() {
      this.prices = useReservationStore().priceList
    },

    async findMustReservedVehicles() {
      this.reservations = useReservationStore().allReservations;
      this.vehicles = useVehicleStore().vehiclesList;

      // Stockage des model de vehicule présent en DB
      const uniqueModels = [];
      this.vehicles.forEach(vehicle => {
        if (!uniqueModels.includes(vehicle.model)) {
          uniqueModels.push(vehicle.model)
        }
      })

      // Map les model et leur ajoute une valeur à 0
      const modelCounter = uniqueModels.reduce((result, item) => {
        result[item] = 0;
        return result
      }, {})

      // Compte le nombre de vehicule dispo en db par model
      this.reservations.forEach(reservation => {
        this.vehicles.forEach(vehicle => {
          if ((reservation.vehicleId === vehicle.registration)) {
            modelCounter[vehicle.model] = modelCounter[vehicle.model] + 1;
          }
        })
      });

      //Resort uniquement les 3 model les plus présent
      const keyValuePairs = Object.entries(modelCounter);
      keyValuePairs.sort((a, b) => b[1] - a[1]);
      const resultObj = Object.fromEntries(keyValuePairs.slice(0, 3));
      this.top3model = Object.keys(resultObj);

    }
  }
})
</script>