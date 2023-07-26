<template>
  <div class="max-w-sm m-2 border border-colorNuxt-green rounded-lg shadow bg-raisin border-raisin">
    <div class="img h-1/2">
      <a href="#" class="h-5">
        <img class="rounded-t-lg h-full" :src="carsUrl" alt=""/>
      </a>
    </div>
    <div class="p-5 flex flex-col items-center h-1/2">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
        acquisitions of 2021 so far, in reverse chronological order.</p>

      <a href="#" class="text-center bg-colorNuxt-green btn text-colorTextLight m-2 p-2">
        En savoir plus

      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardComponent",
  props: {
    carsUrl: String
  },
}
</script>