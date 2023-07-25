<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "faq"
})
</script>

<template>
  <div class="m-2 mt-4 sm:h-screen flex justify-center text-center">
    <!-- Contenu de la colonne 1 (si vous avez un design en deux colonnes) -->
    <div>
      <h2 class="text-2xl mb-24 mt-10 text-colorNuxt-green font-semibold mb-4">Questions fréquentes</h2>
      <!-- Question 1 -->
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Comment puis-je réserver une voiture ?</h3>
        <p class="mt-2">Pour réserver une voiture, rendez-vous sur notre page de réservation, sélectionnez
          les dates de prise en charge et de retour, choisissez le véhicule qui vous convient, puis
          suivez les instructions pour finaliser la réservation.</p>
      </div>

      <!-- Question 2 -->
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Quels sont les documents requis lors de la prise en charge du
          véhicule ?</h3>
        <p class="mt-2">Lors de la prise en charge du véhicule, vous devrez présenter votre permis de
          conduire valide, une pièce d'identité et une carte de crédit pour le dépôt de garantie.</p>
      </div>

      <!-- Question 3 -->
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Puis-je ajouter un conducteur supplémentaire à ma location
          ?</h3>
        <p class="mt-2">Oui, vous pouvez ajouter un conducteur supplémentaire à votre location. Veuillez
          noter que des frais supplémentaires peuvent s'appliquer en fonction de la durée de la
          location.</p>
      </div>

      <!-- Ajoutez d'autres questions et réponses ici -->

    </div>

    <!-- Contenu de la colonne 2 (si vous avez un design en deux colonnes) -->
    <div>
      <!-- Image, publicité ou contenu supplémentaire peuvent être ajoutés ici -->
    </div>
  </div>
</template>

<style scoped>

</style>