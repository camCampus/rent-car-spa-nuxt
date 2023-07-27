<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "validation",
  data() {
    return {
      resaID: this.$route.query.resaID
    }
  }
})
</script>

<template>
  <div class="validation_container flex flex-col items-center justify-center h-screen w-screen space-y-10">
    <h1 class="font-bold text-2xl text-center">Merci pour votre réservation</h1>
    <h3 class="font-bold">Le numéro de reservation est le : n°{{ resaID }}</h3>
    <p class="m-2 text-center">Une facture ainsi qu'une confirmation de réservation vous on était envoyé par mail. <br>
    Mais si vous le désirez vous pouvez aussi la télécharger directement.
    </p>
    <a href="/images/facture.jpg" target="_blank" download="facture.jpg" class="font-bold cursor-pointer">Télécharger la facture</a>
    <nuxt-link class="btn bg-colorNuxt-green text-colorTextLight" to="/">Accueil</nuxt-link>
    <nuxt-link class="btn bg-colorNuxt-green text-colorTextLight" to="/contact">Contact</nuxt-link>
  </div>
</template>