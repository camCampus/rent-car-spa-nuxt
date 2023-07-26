<template>
  <div class="reserv_form_container flex flex-col items-center justify-center my-4">
    <h1 class="reservation_form font-bold text-2xl"> Formulaire de réservation </h1>
    <p class="text-center m-1 mx-4"> Merci de remplir ces informations pour que nous puissions vous réserver une belle
      voiture </p>

    <section class="w-80 sm:w-80">
      <form class="max-w-lg mx-auto mt-8" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="nom" class=" font-medium mb-1">Nom :</label>
          <input
              type="text"
              id="nom"
              v-model="nom"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary border-green-300 focus:border-green-500 focus:ring focus:ring-green-200"
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
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary "
              required
          />
        </div>

        <div class="mb-4">
          <label for="date" class=" font-medium mb-1">Date de naissance :</label>
          <input
              type="date"
              id="date"
              v-model="date"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary "
              required
          />
        </div>

        <div class="mb-4">
          <label for="tel" class=" font-medium mb-1">Téléphone :</label>
          <input
              type="tel"
              id="tel"
              v-model="tel"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="mail" class=" font-medium mb-1">E-mail :</label>
          <input
              type="email"
              id="mail"
              v-model="mail"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="numPermis" class=" font-medium mb-1">Numéro de permis :</label>
          <input
              type="text"
              id="numPermis"
              v-model="numPermis"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="estimKm" class=" font-medium mb-1">Estimation des km :</label>
          <input
              type="text"
              id="estimKm"
              v-model="estimKm"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary"
              required
          />
        </div>

        <div class="mb-4">
          <label for="raisonLocation" class=" font-medium mb-1">Raison de la location :</label>
          <select
              id="raisonLocation"
              v-model="raisonLocation"
              class="w-full text-center h-9 text-colorTextDark rounded-md bg-colorPrimary pl-2"
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
              class="w-full text-center h-40 rounded-md bg-colorPrimary text-colorTextDark p-1.5"
              placeholder="Dites nous si vous avez des informations particulières à nous faire savoir"
          >
          </textarea>
        </div>

        <div class="text-center">
          <button
              type="submit"
              class="py-2 w-80 h-14 px-4 bg-colorNuxt-green hover:bg-colorPrimary text-white rounded-md focus:ring focus:colorNuxt-green focus:ring-opacity-50"
              @click.prevent="submitForm"
          >
            Valider et passer au paiement
          </button>
        </div>
      </form>
    </section>

    <!-- Affichage du message d'erreur -->
    <div v-if="showError" class="text-red-500 bg-colorSecondary w-fit p-2 rounded-md font-medium text-center mt-4">
      {{ error }}
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'formulaire',
  data() {
    return {
      nom: '',
      prenom: '',
      date: '',
      tel: '',
      mail: '',
      numPermis: '',
      estimKm: '',
      raisonLocation: '',
      message: '',
      startDate: this.$route.query.start,
      endDate: this.$route.query.end,
      error: '',
      showError: false,
      responseResId: '',
    };
  },
  methods: {
    async submitForm() {
      // Check if any of the required fields are empty
      if (
          !this.nom ||
          !this.prenom ||
          !this.date ||
          !this.tel ||
          !this.mail ||
          !this.numPermis ||
          !this.estimKm ||
          !this.raisonLocation ||
          !this.startDate ||
          !this.endDate
      ) {
        // Check if input format are valide
        this.error = "Veuillez remplir tous les champs requis avant de soumettre le formulaire.";
        this.showError = true;
        return;
      } else if (!this.validEmail(this.mail)) {
        this.error = "Format de email non valide";
        this.showError = true;
        return;
      } else if (!this.validSringOnly(this.nom) || !this.validSringOnly(this.prenom)) {
        this.error = "Nom ou Prénom ne peuvent contenir que des lettres";
        this.showError = true;
        return;
      } else if (!this.validIntOnly(this.numPermis) || !this.validSringOnly(this.estimKm)) {
        this.error = "Numéro de permis ou estimatimation des kilomètres ne peuvent contenir que des nombres";
        this.showError = true;
        return;
      } else if (!this.validPhone(this.tel)) {
        this.error = "Numéro de téléphone non conforme";
        this.showError = true;
        return;
      }
      console.log(
          'Données du formulaire:',
          this.nom,
          this.prenom,
          this.date,
          this.tel,
          this.mail,
          this.numPermis,
          this.estimKm,
          this.raisonLocation,
          this.message,
          this.startDate,
          this.endDate
      )
      await this.createUser();
      await this.createReservation();
      // Réinitialiser le formulaire après soumission
      // this.resetForm();
      this.$router.push({
        path: "/reservation/paiement",
        query: {
          resaID: this.responseResId
        }
      });
    },
    async createUser() {
      await $fetch('/api/users', {
        method: "POST",
        body: {
          "birthDate": this.date,
          "email": this.mail,
          "firstName": this.nom,
          "lastName": this.prenom,
          "licenseNumber": this.numPermis
        }
      })
    },
    async createReservation() {
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
      //TODO Si réponse = permis invalide, return là et soulève erreur
      if (response) {
        this.responseResId = response.id;
      }
    },
    resetForm() {
      this.nom = '';
      this.prenom = '';
      this.date = '';
      this.tel = '';
      this.mail = '';
      this.numPermis = '';
      this.estimKm = '';
      this.raisonLocation = '';
      this.message = '';
    },
    //Validation part
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validSringOnly(str) {
      const re = /^[a-zA-Z]+$/;
      return re.test(str);
    },
    //TODO INVALID regex (sors invalide number même si number valide)
    validIntOnly(int) {
      const re = /^\d+$/;
      return re.test(int);
    },
    validPhone(int) {
      const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      return re.test(int);
    }
  },
});
</script>



