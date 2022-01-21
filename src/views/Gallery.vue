<template>
  <WindowTemplate :items="currentItems" :key="currentItems" id="window">
  </WindowTemplate>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { aboutUsItems, Item, isEnglishLanguageOn } from "@/mixins/items";

export default defineComponent({
  name: "Gallery",
  props: {},
  setup() {
    const englishItems: Array<Item> = [
      {
        name: "GALLERY",
        title: "GALLERY",
        description: "",
        src: "",
      },
    ];
    const items: Array<Item> = [
      {
        name: "GALLERY",
        title: "GALLERY",
        description: "",
        src: "",
      },
    ];
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? englishItems : items;
    });
    return {
      currentItems,
    };
  },
});
</script>

<style scoped lang="scss">
. {
}
</style>
