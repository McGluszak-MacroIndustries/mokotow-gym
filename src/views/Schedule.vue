<template>
  <WindowTemplate
    :items="currentItems"
    @selected-item="changeItem($event)"
    id="schedule"
    :key="currentItems"
  >
    <template v-slot:left-side>
      <div class="menu">
        <div></div>
        <div class="buttons">
          <!-- <button @click="download()">{{ currentButtons[0] }}</button> -->
          <button @click="goToReservations()">{{ currentButtons[1] }}</button>
        </div>
      </div>
    </template>
  </WindowTemplate>
</template>

<script lang="ts">
import WindowTemplate from "@/components/WindowTemplate.vue";
import { computed, defineComponent, ref } from "vue";
import { Item, scheduleItems, isEnglishLanguageOn } from "@/mixins/items";
import { scheduleItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  components: { WindowTemplate },
  name: "Schedule",
  props: {},
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? scheduleItemsEnglish : scheduleItems;
    });

    const currentButtons = computed(() => {
      return isEnglishLanguageOn.value
        ? ["DOWNLOAD", "MAKE RESERVATION"]
        : ["POBIERZ", "KUP/ZAREZERWUJ"];
    });

    const selected = ref<Item>(currentItems.value[0]);
    function changeItem(value: Item) {
      console.log("oto nowy przedmiot", value);
      selected.value = value;
    }
    function generateFileUrl() {
      return `/schedules/mokotowskigym-grafik.pdf`;
    }
    function download() {
      const a = document.createElement("a");
      a.href = generateFileUrl();
      a.download = generateFileUrl();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
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
      selected,
      scheduleItems,
      changeItem,
      generateFileUrl,
      download,
      goToReservations,
      currentItems,
      currentButtons,
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
.menu {
  margin-top: 10vh;
  display: grid;
  grid-template-rows: 13vh 15vh;
  .buttons {
    z-index: 99;
    display: grid;
    grid-auto-flow: column;
    transform: translateY(-7rem);
  }
}
@media screen and (max-width: 1000px) {
  .menu {
    // width: 100vw;
    // transform: translateX(10%);
    grid-template-rows: 8vh 15vh;
    margin-left: 2.5vw;

    .buttons {
      margin-left: 1.8vw;
      justify-content: space-evenly;
      justify-items: center;
      align-items: flex-start;
      & > * {
        font-size: 0.8rem;
      }
    }
  }
  button {
    width: 40vw;
    height: 8vh;
  }
}
</style>
