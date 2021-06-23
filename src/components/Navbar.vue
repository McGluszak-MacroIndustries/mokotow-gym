<template>
  <div class="navbar">
    <div class="options">
      <div class="items">
        <div
          class="navbar-item"
          v-for="element in navbarElements"
          :key="element"
          @click="moveToPage(element.routerName)"
        >
          {{ element.frontName }}
        </div>
      </div>
    </div>
    <div class="logo">
      <img src="../img/layout/logo@2x.png" alt="moja mamusia" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { navbarElements } from "@/mixins/navbar-management";
import router from "@/router";

export default defineComponent({
  name: "navbar",
  props: {},
  setup() {
    function moveToPage(name: string) {
      router.push({ name });
    }
    return {
      navbarElements,
      moveToPage,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
.navbar {
  // z-index: 999;
  //   margin: 0;
  padding: 1rem;
  padding-left: 10vw;
  padding-right: 10vw;
  //   box-sizing: border-box;
  display: grid;
  height: 5rem;
  & > * {
    border: white 2px solid;
    text-align: center;
  }
  grid-template-columns: 1fr 1fr;
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
        cursor: pointer;
        //   height: 5rem;
      }
    }
  }
  .logo {
    @include hoverable;
    cursor: pointer;
    z-index: 1;
  }
}
</style>
