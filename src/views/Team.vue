<template>
  <WindowTemplate :items="offerItems" />
</template>

<script lang="ts">
import WindowTemplate from "@/components/WindowTemplate.vue";
import { defineComponent } from "vue";
import { offerItems } from "@/mixins/items";

export default defineComponent({
  components: { WindowTemplate },
  name: "Team",
  props: {},
  setup() {
    return {
      offerItems,
    };
  },
});
</script>

<style scoped lang="scss">
.Team {
}
</style>
