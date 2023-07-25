
<template>

  <div class="avis_card flex flex-col justify-center items-center mt-4 sm:w-1/3">
    <div class="rating m-2">
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"/>
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"/>
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"/>
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400"/>
      <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked/>
    </div>
    <div class="avis_text text-center m-2">{{ text }}</div>
    <div class="avis_author">
      <p class="font-bold text-center">{{ author }}</p>
      <p class="font-bold text-center">{{ place }}</p>
    </div>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "card-avis",
  props: {
    text: String,
    author: String,
    place: String
  }
})
</script>
