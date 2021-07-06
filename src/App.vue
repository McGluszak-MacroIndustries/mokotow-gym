<template>
  <Navbar />
  <div class="layout">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <Footer />
  </div>

  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/offer">Oferta</router-link>
    <router-link to="/schedule">Grafik</router-link> -->
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default defineComponent({
  components: {
    Navbar,
    Footer,
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

#app {
  font-family: "Roboto", sans-serif;
  background-color: $dark-grey;
  // :$white-power ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 80vh;
}
.view {
  z-index: 0;
}

.layout {
  display: grid;
  grid-template-rows: 80vh 20vh;
  transform: translateY(-10%);
  z-index: 0;
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
</style>
