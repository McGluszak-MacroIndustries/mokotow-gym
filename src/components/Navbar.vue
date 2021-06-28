<template>
  <div class="navbar">
    <div class="options">
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
    <div class="logo">
      <img src="../img/layout/logo@2x.png" alt="moja mamusia" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { navbarElements, NavBarElement } from "@/mixins/navbar-management";
import router from "@/router";

export default defineComponent({
  name: "navbar",
  props: {},
  setup() {
    const activeButton = ref<NavBarElement>(navbarElements[0]);
    function moveToPageAndChangeActiveButton(element: NavBarElement) {
      const name: string = element.routerName;
      router.push({ name });
      console.log(name);
      activeButton.value = element;
      console.log("aktywny element to: ", activeButton.value.routerName);
      console.log("kliknięty to: ", element.routerName);
    }
    return {
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
  // z-index: 999;
  //   margin: 0;
  // padding: 1rem;
  margin-left: 10vw;
  margin-right: 10vw;
  border: 5px solid red;
  //   box-sizing: border-box;
  display: grid;
  height: 5rem;
  & > * {
    border: white 2px solid;
    text-align: center;
    margin-top: 2vh;
  }
  grid-template-columns: 40vw 40vw;
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
        height: 2vh;
        width: 5vw;
        &.selected {
          // padding-bottom: 2rem;
          border-bottom: 4px $green-ranger solid;
        }
        //   height: 5rem;
      }
    }
  }
  .logo {
    @include hoverable;
    padding-left: 5vw;

    cursor: pointer;
    z-index: 1;
  }
}
</style>
