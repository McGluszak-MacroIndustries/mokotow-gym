<template>
  <WindowTemplate :items="currentItems" :key="currentItems" />
</template>

<script lang="ts">
import WindowTemplate from "@/components/WindowTemplate.vue";
import { computed, defineComponent } from "vue";
import { aboutUsItems, isEnglishLanguageOn, teamItems } from "@/mixins/items";
import { aboutUsItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  components: { WindowTemplate },
  name: "Team",
  props: {},
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? aboutUsItemsEnglish : teamItems;
    });
    return {
      currentItems,
    };
  },
});
</script>

<style scoped lang="scss">
.Team {
}
</style>
