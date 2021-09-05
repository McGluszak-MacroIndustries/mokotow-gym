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
          <button @click="download()">POBIERZ</button>
          <button @click="goToReservations()">ZAREZERWUJ</button>
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

    const selected = ref<Item>(currentItems.value[0]);
    function changeItem(value: Item) {
      console.log("oto nowy przedmiot", value);
      selected.value = value;
    }
    function generateFileUrl() {
      return `/schedules/${selected.value.src}`;
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
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = "https://www.facebook.com/homokomando";
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
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

button {
  background-color: $golden-solution;
  @include hoverable;
  cursor: pointer;
  color: $dark-grey;
  // border-radius: 2rem;
  border: none;
  width: 10vw;
  height: 5vh;
}
.menu {
  display: grid;
  grid-template-rows: 13vh 15vh;
  .buttons {
    display: grid;
    grid-auto-flow: column;
  }
}
@media screen and (max-width: 1000px) {
  .menu {
    // width: 100vw;
    // transform: translateX(10%);
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
    width: 25vw;
    height: 8vh;
  }
}
</style>
