<template>
  <header>
    <nav-bar />
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <footerr />
  </footer>

</template>

<script>
import NavBar from "../../rent-car-spa-nuxt/layouts/navBar.vue";
import Footerr from "../../rent-car-spa-nuxt/layouts/footerr.vue";

export default defineComponent({
  components: {Footerr, NavBar}
})
</script>