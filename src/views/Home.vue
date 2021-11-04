<template>
  <WindowTemplate :items="currentItems" :key="currentItems" class="fix">
    <template v-slot:menu-nav>
      <div></div>
    </template>
  </WindowTemplate>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { aboutUsItems, isEnglishLanguageOn } from "@/mixins/items";
import { aboutUsItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  name: "Home",
  components: {
    WindowTemplate,
  },
  props: {},
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? aboutUsItemsEnglish : aboutUsItems;
    });

    return {
      aboutUsItems,
      isEnglishLanguageOn,
      aboutUsItemsEnglish,
      currentItems,
    };
  },
});
</script>

<style scoped lang="scss">
.Home {
}
</style>
