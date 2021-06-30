<template>
  <div class="slideshow">
    this is slideshow
  </div>
</template>


<script lang="ts">
import { Item } from '@/mixins/items';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Slideshow',
  props: {
      miniaturesAmount: {
      type: Number,
      default: 5,
    },
    items: {
        type: Array as ()=> Array<Item>,
        required: true,
    }
  },
  setup() {
    return {};
 },
});
</script>

<style scoped lang="scss">
.slideshow {
  
}
</style>
