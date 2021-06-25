<template>
  <WindowTemplate :items="aboutUsItems" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { aboutUsItems } from "@/mixins/items";

export default defineComponent({
  name: "Contact",
  props: {},
  components: {
    WindowTemplate,
  },
  setup() {
    return {
      aboutUsItems,
    };
  },
});
</script>

<style scoped lang="scss">
.contact {
}
</style>
