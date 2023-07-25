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
import NavBar from "~/layouts/navBar.vue";
import Footerr from "~/layouts/footerr.vue";

export default defineComponent({
  components: {Footerr, NavBar}
})
</script>