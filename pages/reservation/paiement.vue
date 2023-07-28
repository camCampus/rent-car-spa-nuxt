<script>
import {defineComponent} from 'vue'
import {useReservationStore} from "~/stores/reservations";
import ReservationOverview from "~/components/validation/reservation-overview.vue";

export default defineComponent({
  components: {ReservationOverview},
  setup() {
    const reservationStore = useReservationStore()
    return {reservationStore}
  },
  async created() {
    this.reservation =  await this.reservationStore.getResaById()
  },
  name: "paiement",
  data() {
    return {
      reservation: ""
      //resaID: this.$route.query.resaID
    }
  },
  methods: {
     validateResa() {
      this.redirect();
    },
    redirect() {
      this.$router.push({
        path: "/reservation/validation",
        //Should get a reservation number created in the back, but we forget it in API, so, use id (Big issue :))
        query: {
          resaID: this.resaID
        }
      });
    }
  }
})
</script>

<template>
{{reservation}}
<div class="paiement_container h-screen w-screen flex flex-col justify-center items-center bg-colorSecondary text-center">
  <div>
    <reservation-overview/>
  </div>
  <h1 class="m-5">Le sysème de paiement sera implémenté plus tard</h1>
  <nuxt-link class="btn" to="/">Accueil</nuxt-link>
  <a @click="validateResa" class="btn mt-4">Validation</a>
</div>
</template>
