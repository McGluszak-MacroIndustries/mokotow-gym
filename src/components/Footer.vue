<template>
  <div class="Footer">
    <div class="second-navbar">
      <div class="second-menu">
        <div
          class="navbar-item"
          v-for="element in navbarElements"
          :key="element"
          @click="moveToPage(element)"
        >
          {{ element.frontName }}
        </div>
      </div>
      <div class="media-menu">
        <div v-for="icon in icons" :key="icon" class="icon">
          <a href="https://www.facebook.com/homokomando/">
            <img :src="getIconUrl(icon)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="copyrights">&copy; 2021 Mokotowski-Gym</div>
      <div class="addresses">
        <div>www.mokotowskigym.com</div>
        <div>mokotowski@gmail.com</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  navbarElements,
  NavBarElement,
  icons,
} from "@/mixins/navbar-management";
import router from "@/router";

export default defineComponent({
  name: "Footer",
  props: {},
  setup() {
    const navbars = navbarElements;
    function moveToPage(element: NavBarElement) {
      const name: string = element.routerName;
      router.push({ name });
    }
    function getIconUrl(iconUrl: string) {
      return require("../assets/media-small/" + iconUrl);
    }

    return {
      navbarElements,
      icons,
      moveToPage,
      navbars,
      getIconUrl,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
.Footer {
  display: grid;
  grid-template-rows: 16vh 2vh;
  background: $white-power;
  .second-navbar {
    display: grid;
    grid-template-columns: 60vw 40vw;
    // border-bottom: black 2px solid;
    & > * {
      // border: red 2px solid;
      padding-top: 5vh;
    }
    .second-menu {
      margin-left: 10vw;

      display: grid;
      grid-auto-flow: column;
      align-items: flex-start;
      color: $dark-grey;
      .navbar-item {
        @include hoverable;
        display: grid;
        justify-items: start;
        color: $dark-grey;
        // font-weight: bold;
      }
    }
    .media-menu {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      grid-gap: 1vw;
      .icon {
        @include hoverable;

        height: 3vh;
      }
    }
  }
  .info {
    margin-left: 10vw;
    margin-right: 10vw;
    display: grid;
    grid-auto-flow: column;
    border-top: $dark-grey 1px solid;
    & > * {
      color: $dark-grey;
      padding-top: 1vh;
    }
    .addresses {
      display: grid;
      grid-auto-flow: column;
      justify-content: right;
      grid-gap: 2vw;
      & > * {
        color: $dark-grey;
      }
    }
  }
}
</style>
