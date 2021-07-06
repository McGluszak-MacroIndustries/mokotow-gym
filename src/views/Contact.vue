<template>
  <WindowTemplate :items="items">
    <template v-slot:left-side>
      <div class="info">
        <div class="name">MOKOTÓW-GYM</div>
        <div class="address">
          <!-- <div>kod-pocztowy</div> -->
          <div>ulica-jakaśtam</div>
          <div>
            <button>
              <a href="@/img/layout/baner_01.jpg" download="dupsko">Download</a>
            </button>
          </div>
        </div>
        <div class="media-menu">
          <div v-for="icon in icons" :key="icon" class="icon">
            <a href="https://www.wp.pl">
              <img :src="getIconUrl(icon)" alt="" />
            </a>
          </div>
        </div>
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
// import MapTemplate from "@/components/MapTemplate.vue";

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
      return require("../assets/media-small/" + iconUrl);
    }
    return {
      getIconUrl,
      center,
      items,
      aboutUsItems,
      icons,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

.map {
  // border: 5px orange solid;
  width: 50vw;
  height: 80vh;
}

.info {
  display: grid;
  grid-template-rows: 20vh 5vh 10vh;
  // background: $dark-grey;
  // opacity: 0.7;
  .name {
    // margin-top: 10vh;
    // margin-bottom: 1
    font-size: 3rem;
    font-weight: bold;
  }
  & > * {
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .address {
  }
  .media-menu {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    .icon {
      @include hoverable;
      width: 4vw;
    }
  }
}
</style>
