<template>
  <div>
    <h1 class="bg-nuxt-green font-heading font-bold">Welcome to the homepage</h1>
  </div>
  <div class="flex w-full h-fit justify-around lg:flex-row">
    <card :cars-url="'/clio4.png'"/>
    <card :cars-url="'/208.png'"/>
  </div>
</template>
