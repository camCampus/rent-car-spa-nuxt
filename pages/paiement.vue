<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "paiement"
})
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-center font-bold text-2xl">Paiement</h1>
    <div class="prose max-w-full m-2">
      <h2>1. Modes de Paiement Acceptés</h2>
      <p>Nous acceptons les modes de paiement suivants :</p>
      <ul>
        <li>Carte de crédit (Visa, MasterCard, American Express)</li>
        <li>PayPal</li>
        <li>Virement bancaire</li>
      </ul>
      <p>Choisissez le mode de paiement qui vous convient le mieux lors de la réservation de votre véhicule.</p>

      <h2>2. Paiement Sécurisé</h2>
      <p>Nous accordons une grande importance à la sécurité de vos transactions. Toutes les transactions de
        paiement effectuées sur notre site sont sécurisées grâce à des protocoles de chiffrement SSL (Secure
        Socket Layer).</p>
      <p>Nous ne stockons pas les détails de votre carte de crédit sur notre serveur. Toutes les informations de
        paiement sont traitées directement par notre fournisseur de services de paiement sécurisé.</p>

      <h2>3. Confirmation de Paiement</h2>
      <p>Une fois votre paiement effectué avec succès, vous recevrez une confirmation par email contenant les
        détails de votre réservation.</p>

      <h2>4. Facturation</h2>
      <p>Une facture détaillée vous sera envoyée par email après la finalisation de votre location.</p>

      <h2>5. Remboursements</h2>
      <p>Toute annulation de réservation éligible à un remboursement sera traitée selon notre politique
        d'annulation en vigueur. Les remboursements seront effectués sur la même méthode de paiement utilisée
        lors de la réservation initiale.</p>
    </div>
  </div>
</template>
