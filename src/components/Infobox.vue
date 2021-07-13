<template>
  <div class="Infobox">
    <div class="name">MOKOTÓW-GYM</div>
    <div class="address">
      <!-- <div>kod-pocztowy</div> -->
      <div>ulica-jakaśtam</div>
      <div>kod poczt00wy</div>
    </div>
    <div class="media-menu">
      <div v-for="icon in icons" :key="icon" class="icon">
        <a href="https://www.wp.pl">
          <img :src="getIconUrl(icon)" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Infobox",
  props: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.Infobox {
}
</style>
