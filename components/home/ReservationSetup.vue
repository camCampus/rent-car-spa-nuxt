<template>
  <div class="backdrop-blur-sm text-black shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col -mt-10">

    <div class="-mx-3 md:flex mb-6 md:flex-row items-center justify-center">
      <div class="md:w-1/3 px-3 mt-2">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="city">
          Ville
        </label>
        <div class="relative">
          <select
              class="block appearance-none w-full bg-colorSecondary border border-colorNuxt-green text-colorTextLight py-3 px-4 pr-8 rounded"
              id="city">
            <option>Annecy</option>
            <option>Aix-les-bains</option>
            <option>Tokyo</option>
          </select>

        </div>
      </div>

      <div class="md:w-1/3 px-3 mt-2">
        <label class="block uppercase tracking-wide text-grey-darker text-xs  font-bold mb-2" for="start-date">
          Date début
        </label>
        <input
            class="appearance-none block w-full bg-colorSecondary text-colorTextLight border border-colorNuxt-green rounded py-3 px-4"
            id="start-date" type="date" placeholder="Date début" v-model="startDate" >
      </div>

      <div class="md:w-1/3 px-3 mt-2">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="end-date">
          Date fin
        </label>
        <input

            class="appearance-none block w-full bg-colorSecondary text-colorTextLight border border-colorNuxt-green rounded py-3 px-4"
            id="end-date" type="date" placeholder="Date fin" v-model="endDate">


      </div>

    </div>
    <div class="reservastion-setup-button">
      <button
          @click="getAvailableCars"
          class=" appearance-none bg-colorNuxt-green hover:bg-colorBackground text-white font-bold py-3 px-4 rounded md:w-1/5"
      >
        Soumettre
      </button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useReservationStore} from "~/stores/reservations";
export default defineComponent({
  name: "ReservationSetup",
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  data() {
    return {
      startDate:'',
      endDate: '',
    }
  },
  methods: {
    async getAvailableCars() {
      if (this.startDate !== '' && this.endDate !== '') {
        this.redirectToPage()
      } else {

      }
    },
    redirectToPage() {
      // Remplacez '/autre-page' par le chemin de la page vers laquelle vous souhaitez rediriger.
      this.$router.push({
        path:'/reservation/listVehicles',
        query: {
          start: this.startDate,
          end: this.endDate
        }
      });
    }
  }
})
</script>