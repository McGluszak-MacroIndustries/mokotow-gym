<template>
  <div class="gallery-squares">
    <div
      v-for="picture in pictures"
      :key="picture"
      class="square"
      @click="changePicture(picture)"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GallerySquares",
  props: {
    pictures: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup() {
    function changePicture(picture: string) {}
    return {};
  },
});
</script>

<style scoped lang="scss">
.gallery-squares {
  display: grid;
  grid-template-columns: repeat(5, min-content);
  .square {
    background-color: red;
  }
}
</style>
