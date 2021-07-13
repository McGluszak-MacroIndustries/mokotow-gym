<template>
  <button class="mokotow-button">
      <a href="`/schedules/${}`"></a>
  </button>
</template>


<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Button',
  props: {},
  setup() {
    return {};
 },
});
</script>

<style scoped lang="scss">
.Button {
  
}
</style>
