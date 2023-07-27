<template>

  <div class="max-w-sm  m-2 border border-colorNuxt-green rounded-lg shadow bg-raisin border-raisin">
    <img class="object-scale-down h-40 w-full" :src="getVehicleImg()" alt=""/>
    <div class="p-5 flex flex-col flex-nowrap items-center">
      <h5 class="mb-2 block text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ item["brand"].toUpperCase() }}, </h5>
      <h5 class="mb-2 block text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ item["model"].toUpperCase() }} </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Prix par jour: {{ item["basePrice"] }} €</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Prix par kilometre: {{ item["kilometerPrice"] }}
        €</p>
      <button @click="getUserSelection(item)" class="text-center bg-colorNuxt-green btn text-colorTextLight m-2 p-2">
        En savoir plus
      </button>
    </div>
  </div>
</template>
<script>
import {useReservationStore} from "~/stores/reservations";
export default {
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  name: "cardComponent",
  props: {
    carsUrl: String,
    model: String,
    item: Object
  },
  data() {
    return {
      startDate: this.$route.query.start,
      endDate: this.$route.query.end,
    }
  },
  methods: {
    redirectToPage() {
      // Remplacez '/autre-page' par le chemin de la page vers laquelle vous souhaitez rediriger.
      this.$router.push({
        path: '/reservation/formulaire',
        query: {
          start: this.startDate,
          end: this.endDate
        }
      });
    },
    getVehicleImg() {
      return "/images/" + this.model + ".png"
    },
    getUserSelection(item) {
      this.reservationStore.userVehicleSelection = JSON.stringify(item);
      this.redirectToPage()
    }
  },
}
</script>