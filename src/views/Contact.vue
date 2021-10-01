<template>
  <WindowTemplate :items="currentItems" :key="currentItems" id="window">
    <template v-slot:slot-fix>
      <div class="title">{{ currentTitle }}</div>
    </template>
    <template v-slot:left-side>
      <div class="menu">
        <div class="info">
          <div class="name">Mokotowski Gym</div>
          <div class="address">
            <!-- <div>kod-pocztowy</div> -->
            <div>{{ currentAddress[0] }}</div>
            <div>02 - 654 Warszawa</div>
            <div>+48 696 168 867</div>
          </div>
          <div class="media-menu">
            <div v-for="icon in icons" :key="icon" class="icon">
              <a :href="icon.iconHref" target="_blank">
                <img :src="getIconUrl(icon.iconName)" alt="" />
              </a>
            </div>
          </div>
        </div>
        <button class="find-us" @click="redirect()">
          {{ currentAddress[1] }}
        </button>
      </div>
      <!-- <div></div>
      <div></div> -->
    </template>
    <template v-slot:menu-nav>
      <div></div>
    </template>
    <template v-slot:right-full>
      <GoogleMap
        api-key="AIzaSyCky3Lg85iBceIr8BvL2VPVo7YhHBBbPMw"
        :center="center"
        language="pl"
        class="map"
        :zoom="13"
      >
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </template>
  </WindowTemplate>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { aboutUsItems, Item, isEnglishLanguageOn } from "@/mixins/items";
import { GoogleMap, Marker } from "vue3-google-map";
import { icons } from "@/mixins/navbar-management";

export default defineComponent({
  name: "Contact",
  props: {},
  components: {
    WindowTemplate,
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 52.195899, lng: 20.983702 };
    const items: Array<Item> = [
      {
        name: "ZNAJDŹ NAS",
        title: "Kontakt",
        description: "",
        src: "",
      },
    ];
    const englishItems: Array<Item> = [
      { name: "FIND US", title: "FIND US", description: "", src: "" },
    ];
    const currentItems = computed(() => {
      return isEnglishLanguageOn.value ? englishItems : items;
    });
    const address = ["ulica Białej Floty 2", "SPRAWDŹ TRASĘ"];
    const engAddress = ["Białej Floty Street 2", "FIND US ON MAP"];
    const currentTitle = computed(() => {
      return isEnglishLanguageOn.value ? "CONTACT" : "KONTAKT";
    });
    const currentAddress = computed(() => {
      return isEnglishLanguageOn.value ? engAddress : address;
    });
    function getIconUrl(iconUrl: string) {
      return require("../assets/social_icons/" + iconUrl);
    }
    function redirect() {
      const a = document.createElement("a");
      a.target = "_blank";
      a.href =
        "https://www.google.com/maps/place/Bia%C5%82ej+Floty+2,+02-654+Warszawa/data=!4m2!3m1!1s0x471933ca6bdf4ef9:0xe7e1f4cb36e62445?sa=X&ved=2ahUKEwjl5suQptTxAhXts4sKHY4rD6QQ8gEwAHoECA4QAQ";
      a.click();
    }
    return {
      currentTitle,
      getIconUrl,
      center,
      items,
      aboutUsItems,
      icons,
      redirect,
      currentItems,
      currentAddress,
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

.title {
  // padding-top: 10vh;
}

.map {
  // width: 100%;
  // height: 100%;
  width: 50vw;
  height: 100vh;
  filter: brightness(60%);
}

.menu {
  // height: 40vh;
  // padding-top: 2rem;
  .info {
    display: grid;
    grid-template-rows: 7vh 8vh 5vh;

    .name {
      font-size: 2rem;
      // font-weight: lighter;
    }
    & > * {
      display: grid;
    }
    .address {
      // grid-gap: 0.1rem;
    }
    .media-menu {
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      justify-content: flex-start;
      .icon {
        @include hoverable;
        width: 4vw;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  button {
    font-size: 0.7rem;
    width: 30vw;
    // height: 20px;
    // width: 2vw;
  }
  .map {
    width: 100vw;
    height: 55vh;
  }
  .menu {
    transform: translateX(2%);
    // padding-top: -20%;

    .info {
      // transform: translateX();
      grid-template-rows: 6vh 9vh 5vh;
      // transform: translateY(10%);
      .name {
        text-align: center;
        font-size: 2rem;
      }
      .media-menu {
        justify-content: center;
        grid-gap: 5vw;
      }
    }
  }
  // button {
  //   // transform: translateX(5%);
  //   width: 60vw;
  //   height: 5vh;
  // }
}

@media screen and (max-width: 1200px) {
  button {
    font-size: 0.65rem;
  }
  .info {
    .name {
      font-size: 2.5rem;
    }
  }
}
@media screen and (max-width: 600px) {
  button {
    font-size: 0.6rem;
  }
  .info {
    .name {
      font-size: 2.5rem;
    }
  }
}
</style>
