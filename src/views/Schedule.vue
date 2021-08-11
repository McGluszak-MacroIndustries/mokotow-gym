<template>
  <WindowTemplate
    :items="scheduleItems"
    @selected-item="changeItem($event)"
    id="schedule"
  >
    <template v-slot:left-side>
      <div class="menu">
        <div>
          {{ selectedItem.description }}
        </div>
        <div class="buttons">
          <button @click="download()">pobierz</button>
          <button @click="goToReservations()">ZAREZERWUJ</button>
        </div>
      </div>
    </template>
  </WindowTemplate>
</template>

<script lang="ts">
import WindowTemplate from "@/components/WindowTemplate.vue";
import { defineComponent, ref } from "vue";
import { Item, scheduleItems } from "@/mixins/items";

export default defineComponent({
  components: { WindowTemplate },
  name: "Schedule",
  props: {},
  setup() {
    const selectedItem = ref<Item>(scheduleItems[0]);
    function changeItem(value: Item) {
      console.log("oto nowy przedmiot", value);
      selectedItem.value = value;
    }
    function generateFileUrl() {
      return `/schedules/${selectedItem.value.src}`;
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
      selectedItem,
      scheduleItems,
      changeItem,
      generateFileUrl,
      download,
      goToReservations,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

button {
  background-color: $green-ranger;
  @include hoverable;
  cursor: pointer;
  color: $white-power;
  // border-radius: 2rem;
  border: 2px solid $green-ranger;
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
