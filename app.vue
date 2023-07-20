<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
import {useUsersStore} from '/stores/users'
export default {
  setup() {

    const uStore = useUsersStore()
    return {uStore}
  },
   created() {
     this.uStore.getAllUsers()
  },
}
</script>