
<template>
  <h3 class="text-xl font-bold">Je suis list user</h3>
  <ul>
    <li v-for="user in users" :key="user.id">
      Nom : {{ user.firstName }} <br>
      Prénom : {{ user.lastName }} <br>
      Permis : {{ user.licenseNumber }} <br>
      <p>-------------</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    users: Array
  }
}
</script>