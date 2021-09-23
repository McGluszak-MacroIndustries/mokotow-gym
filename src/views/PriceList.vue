<template>
  <WindowTemplate :items="currentItems" :key="currentItems" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { offerItems, isEnglishLanguageOn } from "@/mixins/items";
import { offerItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  name: "PriceList",
  props: {},
  components: {
    WindowTemplate,
  },
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? offerItemsEnglish : offerItems;
    });
    return {
      currentItems,
    };
  },
});
</script>

<style scoped lang="scss">
.Gallery {
}
</style>
