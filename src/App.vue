<template>
  <Navbar id="nav" />
  <div class="layout">
    <router-view />

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
  width: 1920px;
  height: 1080px;
}
.view {
  z-index: 0;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // // padding-left: 4rem;
  // // padding-right: 4rem;
  // background-color: red;
  // .left {
  //   background-color: yellowgreen;
  // }
}
// .view {
//   height: 70vh;
// }
.layout {
  display: grid;
  grid-template-rows: 70vh 10vh;
  transform: translateY(-10%);
  z-index: 0;
}
</style>
