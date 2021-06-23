<template>
  <WindowTemplate />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";

export default defineComponent({
  name: "Gallery",
  props: {},
  components: {
    WindowTemplate,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.Gallery {
}
</style>
