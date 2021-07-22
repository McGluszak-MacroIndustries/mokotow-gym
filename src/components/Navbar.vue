<template>
  <div class="navbar">
    <div class="options" v-if="isMobile === 1">
      <div class="items">
        <div
          class="navbar-item"
          v-for="element in navbarElements"
          :key="element"
          @click="moveToPageAndChangeActiveButton(element)"
          :class="{ selected: element.frontName === activeButton.frontName }"
        >
          {{ element.frontName }}
        </div>
      </div>
    </div>
    <div class="navbar-mobile" v-else>
      <div class="burger-menu" v-if="clicked === 1" @click="clicked -= 1">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
      <div class="expanded-menu" v-else @click="clicked += 1">
        <div class="mobile-items">
          <div
            v-for="element in navbarElements"
            :key="element"
            @click="moveToPageAndChangeActiveButton(element)"
            class="item"
          >
            {{ element.frontName }}
          </div>
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="../img/layout/logo@2x.png" alt="MOKOTÓW GYM" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { navbarElements, NavBarElement } from "@/mixins/navbar-management";
import router from "@/router";
import { isEqual } from "lodash";

export default defineComponent({
  name: "navbar",
  props: {},

  setup() {
    const activeButton = ref<NavBarElement>(navbarElements[0]);

    const isMobile = ref<number>(window.innerWidth < 1000 ? 1 : 0);
    const clicked = ref<number>(1);
    const width = window.innerWidth;

    window.onresize = () => {
      const browserWidth = window.innerWidth;
      console.log(browserWidth);
      console.log("zresajzowano", window.innerWidth);
      if (browserWidth >= 1000) {
        isMobile.value = 1;
      } else {
        isMobile.value = 0;
      }
    };

    setInterval(() => {
      const browserWidth = window.innerWidth;
      // console.log(browserWidth);
      // console.log("zresajzowano", window.innerWidth);
      if (browserWidth >= 1000) {
        isMobile.value = 1;
      } else {
        isMobile.value = 0;
      }
    }, 100);

    // const sleep = (delay: number) =>
    //   new Promise((resolve) => setTimeout(resolve, delay));

    async function moveToPageAndChangeActiveButton(element: NavBarElement) {
      if (isEqual(element, activeButton.value)) {
        return;
      }
      const name: string = element.routerName;
      router.push({ name });
      console.log(name);
      activeButton.value = element;

      console.log("aktywny element to: ", activeButton.value.routerName);
      console.log("kliknięty to: ", element.routerName);
    }
    return {
      clicked,
      isMobile,
      width,
      activeButton,
      navbarElements,
      moveToPageAndChangeActiveButton,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
.navbar {
  margin-left: 10vw;
  margin-right: 10vw;

  display: grid;
  height: 5rem;
  & > * {
    text-align: center;
    margin-top: 2vh;
  }
  grid-template-columns: 40vw 42.5vw;
  font-weight: bold;
  .options {
    display: grid;
    align-items: center;
    z-index: 1;
    padding-right: 2vw;
    .items {
      display: grid;
      grid-auto-flow: column;
      align-items: center;

      .navbar-item {
        @include hoverable;
        // padding-top: 0.5rem;
        cursor: pointer;
        height: 3vh;
        width: 5vw;
        &.selected {
          // padding-bottom: 2rem;
          border-bottom: 4px $green-ranger solid;
        }
        //   height: 5rem;
      }
    }
  }
  .navbar-mobile {
    z-index: 1;

    .burger-menu {
      @include hoverable;
    }
    .mobile-items {
      display: grid;
      grid-auto-flow: row;
      padding-top: 30vh;
      // justify-content: start;
      align-content: flex-start;
      grid-gap: 3vh;
      font-size: 1.5rem;
      z-index: 99;

      transform: translateX(-10%) translateY(-10%);
      width: 100vw;
      height: 120vh;
      background: $dark-grey;

      overflow: hidden;

      .item {
        @include hoverable;
        z-index: 20;
      }
    }
  }
  .logo {
    @include hoverable;
    padding-left: 5vw;

    cursor: pointer;
    z-index: 1;
    img {
      max-width: 60%;
    }
  }
}
svg {
  fill: $white-power;
}
@media screen and (max-width: 1200px) {
  .items {
    font-size: 0.75rem;
  }
}

@media screen and (max-width: 1000px) {
  .navbar {
    grid-template-columns: 20vw 60vw;
    .logo {
      height: 10vh;
    }
  }
}
</style>

function sleep() { throw new Error("Function not implemented."); }
