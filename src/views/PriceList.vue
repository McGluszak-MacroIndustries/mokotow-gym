<template>
  <WindowTemplate
    :items="currentItems"
    @selected-item="changeItem($event)"
    id="pricelist"
    :key="currentItems"
  >
    <template v-slot:optional>
      <div class="buttons-mobile">
        <!-- <button @click="download()">{{ currentButtons[0] }}</button> -->
        <button @click="goToReservations()">{{ currentButtons[1] }}</button>
      </div>
    </template>
    <template v-slot:left-side>
      <div class="menu">
        <div class="nothing"></div>
        <div class="buttons">
          <!-- <button @click="download()">{{ currentButtons[0] }}</button> -->
          <button @click="goToReservations()">{{ currentButtons[1] }}</button>
        </div>
      </div>
    </template>
    <template v-slot:menu-nav>
      <div></div>
    </template>
  </WindowTemplate>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import {
  offerItems,
  isEnglishLanguageOn,
  priceListItems,
  Item,
} from "@/mixins/items";
import { offerItemsEnglish } from "@/mixins/englishItems";

export default defineComponent({
  name: "PriceList",
  props: {},
  components: {
    WindowTemplate,
  },
  setup() {
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? priceListItems : priceListItems;
    });
    const currentButtons = computed(() => {
      return isEnglishLanguageOn.value
        ? ["DOWNLOAD", "MAKE RESERVATION"]
        : ["KUP/ZAREZERWUJ", "KUP/ZAREZERWUJ"];
    });
    const selected = ref<Item>(currentItems.value[0]);
    function changeItem(value: Item) {
      console.log("oto nowy przedmiot", value);
      selected.value = value;
    }
    function generateFileUrl() {
      return `/schedules/cennik.pdf`;
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
      currentItems,
      selected,
      changeItem,
      generateFileUrl,
      download,
      goToReservations,
      currentButtons,
    };
  },
});
</script>

<style lang="scss">
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
.buttons-mobile {
  display: none;
}
.menu {
  display: grid;
  grid-template-rows: 17vh 3vh;

  .buttons {
    // margin-left: 3vw;
    transform: translateY(-15vh);
    z-index: 99;
    display: grid;
    grid-auto-flow: column;
    // grid-area: buttons;
  }
}
@media screen and (max-width: 1000px) {
  .menu {
    // width: 100vw;
    // transform: translateX(10%);
    margin-left: 2.5vw;

    .buttons {
      transform: translateY(5vh);
      margin-left: 0;
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
@media screen and (max-width: 600px) {
  button {
    width: 40vw;
  }
  .buttons-mobile {
    display: block;
    margin-top: 2vh;
    margin-bottom: 4vh;
  }
  .menu {
    transform: translateY(-15vh);
    display: none;
  }
}
</style>
