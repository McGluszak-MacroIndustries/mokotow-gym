<template>
  <window-template />
</template>

<script lang="ts">
import WindowTemplate from "@/components/WindowTemplate.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { WindowTemplate },
  name: "Team",
  props: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.Team {
}
</style>
