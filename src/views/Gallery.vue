<template>
  <WindowTemplate :items="currentItems" :key="currentItems" :isGallery="true">
    <template v-slot:slot-fix>
      <!-- <div>GALERIA</div> -->
    </template>
    <template v-slot:menu-nav>
      <div></div>
    </template>
    <!-- <template v-slot:optional>
      <GallerySquares >
      </GallerySquares>
    </template>
    <template v-slot:proper-desc>
      <div></div>
    </template> -->
  </WindowTemplate>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
// import GallerySquares from "@/components/GallerySquares.vue";
import {
  isEnglishLanguageOn,
  Item,
  teamItems,
  galleryItems,
} from "@/mixins/items";
import { aboutUsItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  name: "Gallery",
  components: { WindowTemplate },
  props: {},
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? aboutUsItemsEnglish : galleryItems;
    });

    return {
      currentItems,
    };
  },
});
</script>

<style scoped lang="scss"></style>
