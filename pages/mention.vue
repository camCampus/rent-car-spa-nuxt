<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "mention"
})
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold text-center">Mention légales</h1>
    <div class="prose max-w-full m-2 ">
      <h2>1. Informations Légales</h2>
      <p>Nom de la société : [Nom de votre société]</p>
      <p>Statut juridique : [Statut juridique de votre société]</p>
      <p>Numéro d'immatriculation : [Numéro d'immatriculation de votre société]</p>
      <p>Adresse : [Adresse de votre société]</p>
      <p>Email : [Adresse email de contact]</p>
      <p>Téléphone : [Numéro de téléphone de contact]</p>

      <h2>2. Directeur de Publication</h2>
      <p>Le Directeur de Publication est [Nom du Directeur de Publication].</p>

      <h2>3. Hébergement</h2>
      <p>L'hébergement du site est assuré par [Nom du prestataire d'hébergement].</p>

      <h2>4. Propriété Intellectuelle</h2>
      <p>Tous les contenus du site, y compris les textes, images, graphiques, logos, icônes, clips audio et vidéo,
        sont la propriété exclusive de [Nom de votre société] ou de leurs propriétaires respectifs, protégés par
        les lois internationales sur le droit d'auteur et les marques commerciales.</p>

      <h2>5. Collecte de Données Personnelles</h2>
      <p>Nous collectons et traitons vos données personnelles conformément à notre politique de confidentialité.
        Vous pouvez consulter notre politique de confidentialité pour en savoir plus sur la collecte, l'usage et
        la protection de vos données.</p>

      <h2>6. Cookies</h2>
      <p>Notre site utilise des cookies. Vous pouvez consulter notre politique de cookies pour en savoir plus sur
        l'utilisation des cookies et comment les désactiver.</p>

      <h2>7. Liens Externes</h2>
      <p>Notre site peut contenir des liens vers des sites externes. Nous ne sommes pas responsables du contenu
        de ces sites et de leur politique de confidentialité. L'utilisation de ces liens se fait à vos risques et
        périls.</p>
    </div>
  </div>
</template>

<style scoped>

</style>