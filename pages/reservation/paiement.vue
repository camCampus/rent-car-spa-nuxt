<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "paiement",
  data() {
    return {
      resaID: this.$route.query.resaID
    }
  },
  methods: {
    async validateResa() {
      const response = await $fetch('/api/reservations', {
        method: "POST",
        body: {
          "actualKm": 0,
          "estimateKm": this.estimKm,
          "licenseId": this.numPermis,
          "locationEnd": this.endDate,
          "locationStart": this.startDate,
          //TODO get price from listVehicles
          "price": 0,
          "status": "PENDING",
          //TODO get vehicles id from listVehicles
          "vehicleId": "string"
        }
      })
    }
  }
})
</script>

<template>
<div class="paiement_container h-screen w-screen flex flex-col justify-center items-center bg-colorSecondary text-center">
  <h1 class="m-5">Le sysème de paiement sera implémenté plus tard</h1>
  <nuxt-link class="btn" to="/">Accueil</nuxt-link>
  <nuxt-link class="btn mt-4" to="/reservation/validation">Validation</nuxt-link>
</div>
</template>
