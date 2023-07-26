<script>
import {defineComponent} from 'vue'


export default defineComponent({
  props: {
    items: Array,
    filterName: String
  },
  methods: {
    getVehicleType() {
      return [...new Set(this.items.map(e => e[this.filterName]))]
    }
  },
})
</script>

<template>
  <select id="filter"
          class="bg-colorNuxt-green border border-gray-300 text-gray-100 text-lg rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full min-w-fit p-2.5 m-2">
    <option>{{filterName.toUpperCase()}}</option>
    <option v-for="value in getVehicleType()"
            :value="value"
            >{{ value }}
    </option>
  </select>
</template>

<style scoped>

</style>