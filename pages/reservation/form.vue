
<template>
  <div class="reserv_form_container flex flex-col items-center justify-center my-4">
    <h1 class="reservation_form font-bold text-2xl"> Formulaire de réservation </h1>
    <p class="text-center m-1 mx-4"> Merci de remplir ces informations pour que nous puissions vous réserver une belle voiture </p>

    <section class="w-80 sm:w-80">
      <form class="max-w-lg mx-auto mt-8" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="nom" class=" font-medium mb-1">Nom :</label>
          <input
              type="text"
              id="nom"
              v-model="nom"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
              required
              autofocus
          />
        </div>

        <div class="mb-4">
          <label for="prenom" class=" font-medium mb-1">Prénom :</label>
          <input
              type="text"
              id="prenom"
              v-model="prenom"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary "
              required
          />
        </div>

        <div class="mb-4">
          <label for="tel" class=" font-medium mb-1">Téléphone :</label>
          <input
              type="tel"
              id="tel"
              v-model="tel"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="mail" class=" font-medium mb-1">E-mail :</label>
          <input
              type="email"
              id="mail"
              v-model="mail"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="numPermis" class=" font-medium mb-1">Numéro de permis :</label>
          <input
              type="text"
              id="numPermis"
              v-model="numPermis"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="raisonLocation" class=" font-medium mb-1">Raison de la location :</label>
          <select
              id="raisonLocation"
              v-model="raisonLocation"
              class="w-full h-9 text-colorTextDark rounded-md bg-colorPrimary text-colorTextDark"
              required
          >
            <option value="" disabled selected>Choisissez une option</option>
            <option value="vacances">Vacances</option>
            <option value="affaires">Affaires</option>
            <option value="déménagement">Déménagement</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="message" class=" font-medium mb-1">Message (optionnel) :</label>
          <textarea
              id="message"
              v-model="message"
              class="w-full h-40 rounded-md bg-colorPrimary"
              placeholder="Dites nous si vous avez des informations particulières à nous faire savoir"
          >
          </textarea>
        </div>

        <div class="text-center">
          <button
              type="submit"
              class="py-2 w-80 h-14 px-4 bg-colorNuxt-green hover:bg-colorPrimary text-white rounded-md bg-colorNuxt-green focus:ring focus:colorNuxt-green focus:ring-opacity-50"
              @click.prevent="submitForm"
          >
            Valider et passer au paiement
          </button>
        </div>
      </form>
    </section>


  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'form',
  data() {
    return {
      nom: '',
      prenom: '',
      tel: '',
      mail: '',
      numPermis: '',
      raisonLocation: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // Check if any of the required fields are empty
      if (
          !this.nom ||
          !this.prenom ||
          !this.tel ||
          !this.mail ||
          !this.numPermis ||
          !this.raisonLocation
      ) {
        // If any required field is empty, do not proceed with form submission
        console.log('Please fill in all required fields before submitting.');
        this.$router.push({ path: "/reservation/paiement" });
        return;
      }

      // Proceed with form submission if all required fields are filled
      console.log(
          'Données du formulaire:',
          this.nom,
          this.prenom,
          this.tel,
          this.mail,
          this.numPermis,
          this.raisonLocation,
          this.message
      );
      // Réinitialiser le formulaire après soumission
      this.resetForm();
    },
    resetForm() {
      this.nom = '';
      this.prenom = '';
      this.tel = '';
      this.mail = '';
      this.numPermis = '';
      this.raisonLocation = '';
      this.message = '';
    },
  },
});
</script>



