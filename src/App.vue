<template>
  <transition name="slide-fade" mode="out-in">
    <Navbar
      :currentNavbarElements="currentNavbarElements"
      :currentNavbarElement="currentNavbarElement"
      @update-current-element="onUpdateCurrentElement($event)"
      class="x"
      :key="currentNavbarElements"
    />
  </transition>
  <div class="layout">
    <router-view v-slot="{ Component }" class="view">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer
      :currentNavbarElements="currentNavbarElements"
      class="footer"
      v-show="isMobile === 0"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { computed, ref } from "vue";
import {
  navbarElements,
  englishNavbarElements,
  NavBarElement,
} from "@/mixins/navbar-management";
import { isEnglishLanguageOn } from "@/mixins/items";
export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
  setup() {
    // const isEnglishLanguageOn = ref<boolean>(false);
    const currentNavbarElements = computed(() => {
      return isEnglishLanguageOn.value ? englishNavbarElements : navbarElements;
    });

    const currentNavbarElement = ref(currentNavbarElements.value[0]);

    const isMobile = ref<number>(window.innerWidth < 1000 ? 1 : 0);
    setInterval(() => {
      const browserWidth = window.innerWidth;
      if (browserWidth >= 1000) {
        isMobile.value = 0;
      } else {
        isMobile.value = 1;
      }
    }, 100);

    function onUpdateCurrentElement(element: NavBarElement) {
      currentNavbarElement.value = element;
    }
    return {
      isMobile,
      isEnglishLanguageOn,
      currentNavbarElements,
      currentNavbarElement,
      onUpdateCurrentElement,
      // currentNavbarElements,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/main";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $white-power;
  // font-family: "Roboto", sans-serif;
}

.x {
  z-index: 2;
}

#app {
  font-family: "Roboto", sans-serif;
  background-color: $dark-grey;
  // :$white-power ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $white-power;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.view {
  z-index: 0;
}

.layout {
  display: grid;
  grid-template-rows: 90vh 15vh;
  transform: translateY(-10%);
  z-index: 55;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

@media screen and (max-width: 1000px) {
  .layout {
    display: grid;
    grid-template-rows: 1fr 1fr;
    // grid-template-areas:
    //   "view"
    //   "view";
    // .view {
    //   grid-area: view;
    // }
    // .footer {
    //   grid-area: foot;
    // }
  }
  .construction {
    transform: translateY(-170vh);
  }
}
</style>
