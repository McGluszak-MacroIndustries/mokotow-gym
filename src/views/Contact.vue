<template>
  <WindowTemplate :items="items">
    <template v-slot:left-side>
      <div class="menu">
        <div class="info">
          <div class="name">MOKOTÓW-GYM</div>
          <div class="address">
            <!-- <div>kod-pocztowy</div> -->
            <div>ulica-jakaśtam</div>
            <div>kod poczt00wy</div>
          </div>
          <div class="media-menu">
            <div v-for="icon in icons" :key="icon" class="icon">
              <a href="https://www.facebook.com/homokomando/" target="_blank">
                <img :src="getIconUrl(icon)" alt="" />
              </a>
            </div>
          </div>
        </div>
        <button class="find-us" @click="redirect()">znajdź nas</button>
      </div>
      <!-- <div></div>
      <div></div> -->
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
import { defineComponent } from "vue";
import WindowTemplate from "@/components/WindowTemplate.vue";
import { aboutUsItems, Item } from "@/mixins/items";
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
        title: "ZNAJDŹ NAS",
        description: "",
        src: "",
      },
    ];
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
      getIconUrl,
      center,
      items,
      aboutUsItems,
      icons,
      redirect,
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
  border-radius: 2rem;
  border: 2px solid $white-power;
  width: 15vw;
  height: 10vh;
}
.map {
  // width: 100%;
  // height: 100%;
  width: 50vw;
  height: 80vh;
  filter: brightness(60%);
}

.info {
  display: grid;
  grid-template-rows: 7vh 5vh 5vh;

  .name {
    font-size: 3rem;
    font-weight: bold;
  }
  & > * {
    display: grid;
  }
  .address {
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
@media screen and (max-width: 1000px) {
  .map {
    width: 100vw;
    height: 60vh;
  }
  .menu {
    transform: translateX(2%);
    .info {
      // transform: translateX();
      grid-template-rows: 5vh 5vh 5vh;
      transform: translateY(-10%);
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
  button {
    // transform: translateX(5%);
    width: 60vw;
    height: 5vh;
  }
}

@media screen and (max-width: 1200px) {
  .info {
    .name {
      font-size: 2.5rem;
    }
  }
}
</style>
