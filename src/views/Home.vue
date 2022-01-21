<template>
  <WindowTemplate :items="currentItems" :key="currentItems" class="fix">
    <template v-slot:left-side>
      <div class="buttons">
        <button @click="goToReservations()">KUP/ZAREZERWUJ</button>
      </div>
    </template>
    <template v-slot:menu-nav>
      <div>
        <!-- <button @click="download()">KUP/ZAREZERWUJ</button> -->
      </div>
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
    function goToReservations() {
      // console.log("dupa");
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = "https://mokotowskigym.perfectgym.com/clientportal2/#/Login";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    return {
      aboutUsItems,
      isEnglishLanguageOn,
      aboutUsItemsEnglish,
      currentItems,
      goToReservations,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
button {
  background-color: $dark-grey;
  @include hoverable;
  cursor: pointer;
  color: $white-power;
  // border-radius: 2rem;
  border: 3px solid $white-power;
  border-radius: 2rem;
  width: 10vw;
  height: 5vh;
}
.Home {
  .fix {
    display: grid;
  }
}
.buttons {
  margin-top: 4rem;
}
</style>
