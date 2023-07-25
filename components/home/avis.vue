<script>
import {defineComponent} from 'vue'
import CardAvis from "./card-avis.vue";

export default defineComponent({
  name: "avis",
  components: {CardAvis}
})
</script>

<template>
  <h2 class="font-bold text-2xl m-2 text-center">Vos avis nous inspirent</h2>
  <div class="avis_container flex flex-col sm:flex-row items-center">
    <card-avis text="Super meilleur voiture de ma vie ! Et service au top du top, je recommande."
               author="kize"
               place="Annecy" />
    <card-avis text="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur deserunt fugit hic ipsum itaque mollitia numquam obcaecati officiis quidem!"
               author="JCVD"
               place="Tokyo" />
    <card-avis text="    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur deserunt fugit hic ipsum itaque mollitia numquam obcaecati officiis quidem!"
               author="Luffy"
               place="Grand line" />
  </div>
</template>

<style scoped>

</style>