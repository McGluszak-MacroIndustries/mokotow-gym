<template>
  <div class="navbar">
    <div class="options" v-if="isMobile === 1">
      <div class="items">
        <div
          class="navbar-item"
          v-for="element in currentNavbarElements"
          :key="element"
          @click="moveToPageAndChangeActiveButton(element)"
          :class="{
            selected: element.routerName === currentNavbarElement.routerName,
          }"
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
            v-for="element in currentNavbarElements"
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
      <!-- <div class="language-selection">
        <div class="">PL</div>
        <div>ANG</div>
      </div> -->
    </div>
    <div class="lang">
      <div class="language-selection">
        <div @click="changeLanguage(false)" class="polish">
          <img src="../assets/flags/pl.png" alt="" />
        </div>
        <div @click="changeLanguage(true)" class="english">
          <img src="../assets/flags/uk.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import {
  navbarElements,
  NavBarElement,
  englishNavbarElements,
} from "@/mixins/navbar-management";
import router from "@/router";
import { isEqual } from "lodash";
import { isEnglishLanguageOn } from "@/mixins/items";

export default defineComponent({
  name: "navbar",
  props: {
    currentNavbarElements: {
      type: Array as () => NavBarElement[],
      required: true,
    },
    currentNavbarElement: {
      type: Object as () => NavBarElement,
      required: true,
    },
  },
  emits: ["update-current-element"],

  setup(props, { emit }) {
    // const currentNavbarElements = ref<Array<NavBarElement>>(navbarElements);

    // const isEnglishLanguageOn = ref<boolean>(false);
    // const currentNavbarElements = computed(() => {
    //   return isEnglishLanguageOn.value ? englishNavbarElements : navbarElements;
    // });

    const activeButton = ref<NavBarElement>(props.currentNavbarElements[0]);

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
      if (isEqual(element, props.currentNavbarElement)) {
        return;
      }
      const name: string = element.routerName;
      router.push({ name });
      console.log(name);

      emit("update-current-element", element);

      activeButton.value = element;

      console.log("aktywny element to: ", activeButton.value.routerName);
      console.log("kliknięty to: ", element.routerName);
    }
    function changeLanguage(option: boolean) {
      isEnglishLanguageOn.value = option;
    }
    return {
      clicked,
      isMobile,
      width,
      activeButton,
      navbarElements,
      englishNavbarElements,
      moveToPageAndChangeActiveButton,
      changeLanguage,
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
  grid-template-columns: 40vw 42.5vw 5vw;
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
        width: 6vw;
        &.selected {
          // padding-bottom: 2rem;
          border-bottom: 4px $golden-solution solid;
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
      height: 60%;
    }
  }
  .language-selection {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    height: 1rem;
    //
    & > * {
      @include hoverable;
      z-index: 1;
    }
    // .polish {
    //   background-image: url("../assets/flags/pl.png");
    //   background-size:
    // }
    // .english {
    //   background-image: url("../assets/flags/uk.png");
    // }
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
    grid-template-columns: 20vw 50vw 10vw;
    .logo {
      height: 10vh;
    }
    // .lang {
    //   display: none;
    // }
  }
}
</style>

function sleep() { throw new Error("Function not implemented."); }
