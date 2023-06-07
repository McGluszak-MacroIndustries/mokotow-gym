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
            <div>+48 664 099 162</div>
            <div class="breaker"></div>
            <div>McGluszak MacroIndustries Sp.z o.o</div>
            <div>ul. Warszawska 6m32, 15-063 Białystok</div>
            <div>NIP: 9662116841</div>
            <div>KRS: 0000716731</div>
            <div>REGON: 368770856</div>
          </div>
          <div class="media-menu">
            <div v-for="icon in icons" :key="icon" class="icon">
              <a :href="icon.iconHref" target="_blank">
                <img :src="getIconUrl(icon.iconName)" alt="" />
              </a>
            </div>
          </div>
          <div class="buttons">
            <button class="find-us" @click="redirect(gymaddr)">
              {{ currentAddress[1] }}
            </button>
            <button class="find-us" @click="redirect(parkaddr)">
              SPRAWDŹ PARKING
            </button>
          </div>
        </div>
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
        <Marker
          :options="{ position: center, label: 'MG', title: 'Mokotowski Gym' }"
        />
        <Marker
          :options="{
            position: parking,
            label: 'P',
            title: 'Parking',
          }"
        />
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
    const parking = { lat: 52.19813889, lng: 20.98255556 };
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
    const parkingAddress = [""];
    const currentTitle = computed(() => {
      return isEnglishLanguageOn.value ? "CONTACT" : "KONTAKT";
    });
    const currentAddress = computed(() => {
      return isEnglishLanguageOn.value ? engAddress : address;
    });
    const gymaddr =
      "https://www.google.com/maps/place/Bia%C5%82ej+Floty+2,+02-654+Warszawa/data=!4m2!3m1!1s0x471933ca6bdf4ef9:0xe7e1f4cb36e62445?sa=X&ved=2ahUKEwjl5suQptTxAhXts4sKHY4rD6QQ8gEwAHoECA4QAQ";
    const parkaddr =
      "https://www.google.com/maps/place/52%C2%B011'53.3%22N+20%C2%B058'57.2%22E/@52.1982044,20.9824338,20.54z/data=!4m13!1m7!3m6!1s0x0:0xe97e53e517d1bcd9!2zNTLCsDExJzUzLjMiTiAyMMKwNTgnNTcuMiJF!3b1!8m2!3d52.1981353!4d20.9825533!3m4!1s0x0:0xe97e53e517d1bcd9!8m2!3d52.1981353!4d20.9825533?hl=pl-PL";
    function getIconUrl(iconUrl: string) {
      return require("../assets/social_icons/" + iconUrl);
    }
    function redirect(address: string) {
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = address;
      a.click();
    }
    return {
      currentTitle,
      getIconUrl,
      center,
      parking,
      items,
      aboutUsItems,
      icons,
      redirect,
      currentItems,
      currentAddress,
      gymaddr,
      parkaddr,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/main";
.window-template .left-full .description[data-v-f6e3548c] {
  overflow-y: hidden;
}
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
  padding-top: 5vh;
}

.map {
  // width: 100%;
  // height: 100%;
  width: 50vw;
  height: 100vh;
  filter: brightness(60%);
}

.menu {
  // height: 60vh;
  // padding-top: 2rem;
  display: grid;
  grid-template-rows: 60vh auto;
  overflow-y: hidden;
  justify-items: left;
  // margin-top: 10vh;
  .info {
    // margin-top: 5vh;
    display: grid;
    // grid-template-rows: 7vh 15vh 8vh;
    // height: 100%;
    grid-gap: 1rem;

    .name {
      font-size: 2rem;
      // font-weight: lighter;
    }
    & > * {
      display: grid;
    }
    .address {
      // grid-gap: 0.1rem;
      .breaker {
        height: 1rem;
      }
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
    .buttons {
      display: grid;
      height: 4rem;
      grid-auto-flow: column;
      transform: translateY(20%);
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
      grid-template-rows: 6vh min-content 5vh min-content;
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
    // font-size: 0.65rem;
  }
  .info {
    .name {
      font-size: 2.5rem;
    }
  }
}
@media screen and (max-width: 600px) {
  button {
    // font-size: 0.6rem;
    width: 40vw;
    height: 6vh;
  }
  .info {
    margin-left: 1.5rem;
    // height: 40rem;
    .name {
      font-size: 2.5rem;
    }
    .buttons {
      height: 10rem;
      transform: translateY(-1rem);
    }
  }
}
</style>
