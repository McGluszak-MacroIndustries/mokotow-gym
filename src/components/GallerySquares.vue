<template>
  <div class="gallery-squares">
    <div
      v-for="item in items"
      :key="item"
      class="square"
      @click="changePicture(item)"
      :style="{
        'background-image': `linear-gradient(rgba(0, 0, 0, 0.8), transparent), url(${require('../img/subpages/team/' +
          item.src)})`,
      }"
    >
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Item } from "@/mixins/items";

export default defineComponent({
  name: "GallerySquares",
  props: {
    items: {
      type: Array as () => Item[],
    },
  },
  emits: ["clicked-item"],
  setup(props, { emit }) {
    function changePicture(item: Item) {
      console.log("kliknieto");
      emit("clicked-item", item);
    }
    return {
      changePicture,
    };
  },
});
</script>

<style scoped lang="scss">
.gallery-squares {
  display: grid;
  grid-template-columns: repeat(5, min-content);
  background-color: yellow;
  height: 100%;
  .square {
    background-color: red;
    cursor: pointer;
    z-index: 9999;
    height: 7rem;
    width: 7rem;
    background-size: cover;
  }
}
@media screen and (max-width: 1000px) {
  .gallery-squares {
    grid-template-columns: repeat(3, auto);
    grid-gap: none;
    .square {
      // height: 4rem;
      // width: 4rem;
    }
  }
}
</style>
