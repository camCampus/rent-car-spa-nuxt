<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
import {useUserStore} from '/stores/users'
export default {
  setup() {
    const uStore = useUserStore()
    return {uStore}
  },
   created() {
     this.uStore.getAllUsers()
  },
}
</script>