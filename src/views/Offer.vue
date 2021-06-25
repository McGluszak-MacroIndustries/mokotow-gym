<template>
  <WindowTemplate :items="offerItems" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { offerItems } from "@/mixins/items";

export default defineComponent({
  name: "Offer",
  props: {},
  components: {
    WindowTemplate,
  },
  setup() {
    return {
      offerItems,
    };
  },
});
</script>

<style scoped lang="scss">
.Offer {
}
</style>
