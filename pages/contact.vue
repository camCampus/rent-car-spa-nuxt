
<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="w-full max-w-md p-8 bg-colorSecondary rounded-lg shadow-md">
      <h2 class="text-3xl text-center font-bold mb-4">Contactez-nous</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block font-bold text-s">Nom</label>
          <input
              type="text"
              id="name"
              v-model="formData.name"
              class="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-bold">Email</label>
          <input
              type="email"
              id="email"
              v-model="formData.email"
              class="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-bold">Message</label>
          <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
          ></textarea>
        </div>
        <div class="mt-4">
          <button type="submit" class="w-full px-4 py-2 text-white font-semibold bg-colorNuxt-green rounded-md shadow-md hover:bg-colorPrimary focus:outline-none focus:ring focus:ring-blue-200 btn">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
name: "contact",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
    // TODO: take this submitted data and send it to an email
      console.log("Données du formulaire :", this.formData);

      // Réinitialisez le formulaire après la soumission
      this.formData = {
        name: "",
        email: "",
        message: "",
      };
      this.$router.push("/");
    },
  },
})
</script>

