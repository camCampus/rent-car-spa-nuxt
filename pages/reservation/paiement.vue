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
      await $fetch('/api/reservations/status/' + this.resaID, {
        method: "PUT",
        body: {
          "id": this.resaID,
          "status": "VALIDATED",
        }
      })
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
<div class="paiement_container h-screen w-screen flex flex-col justify-center items-center bg-colorSecondary text-center">
  <h1 class="m-5">Le sysème de paiement sera implémenté plus tard</h1>
  <nuxt-link class="btn" to="/">Accueil</nuxt-link>
  <a @click="validateResa" class="btn mt-4">Validation</a>
</div>
</template>
