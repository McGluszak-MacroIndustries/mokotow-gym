<template>
  <div class="window-template">
    <slot name="left-side">
      <div class="left">
        <div class="blank"></div>
        <div class="title">
          <div class="title-text">{{ selectedItem.title }}</div>
        </div>
        <div class="description" @click="changeSelectedItem()">
          {{ selectedItem.description }}
        </div>
        <span class="line"></span>
      </div>
    </slot>
    <slot class="right-side">
      <div class="right">
        <img
          :src="
            require(`../img/subpages/${selectedItem.name}/${selectedItem.src}`)
          "
          alt="selectedDog"
        />

        <div class="element-container">
          <div class="element" v-for="element in items.length" :key="element">
            <div class="number">
              {{ element }}
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { Item } from "@/mixins/items";
import { findIndex, indexOf, isEqual, isNil } from "lodash";

export default defineComponent({
  name: "WindowTemplate",
  props: {
    items: {
      type: Array as () => Item[],
      required: true,
    },
    miniaturesAmount: {
      type: Number,
      default: 3,
    },
  },
  setup(props, { emit }) {
    const selectedItem = ref<Item>(props.items[0]);
    const highlightedIndex = ref<number>(
      findIndex(props.items, selectedItem.value)
    );

    // function getImgUrl(name: string, pic: string) {
    //   // console.log("oto obrazek");
    //   // console.log(`../img/subpages/${selectedItem.value.name}` + "/" + pic);
    //   // return require(`@/img/subpages/${selectedItem.value.name}/${pic}`);
    //   // return require("../img/subpages/about-us/banner_01.jpg");
    //   return require("@/img/" + name + "/" + pic);
    // }

    function changeSelectedItem() {
      // console.log(props.items[0]);
      console.log("dupa");
      const index = findIndex(props.items, selectedItem.value);
      console.log(index);
      if (index === props.items.length - 1) {
        selectedItem.value = props.items[0];
      } else {
        selectedItem.value = props.items[index + 1];
      }
    }

    return {
      selectedItem,
      changeSelectedItem,
      highlightedIndex,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

.window-template {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 10vw;
  padding-right: 10vw;
  text-align: left;
  //   & > * {
  //     padding-left: 2.2rem;
  //     padding-right: 4rem;
  //   }
  .left {
    display: grid;
    grid-template-rows: 12.5vh 15vh 33vh 5vh;

    // background-color: lightblue;
    border: 2px white solid;

    .title {
      //   padding-left: 2rem;
      display: grid;
      align-content: center;
      justify-items: flex-start;
      font-weight: bold;
      font-size: 2rem;
      //   padding-left: ;
    }
    .line {
      border-top: $green-ranger 10px solid;
      margin-right: 5rem;
      //   transform: translateY();
    }
    & > * {
      border: orange 2px solid;
    }
  }
  .right {
    border: 4px white solid;
    position: relative;

    position: relative;
    img {
      width: 100%;
      height: 100%;
      z-index: 0;
      opacity: 0.8;
      // object-fit: cover;
    }
    .element-container {
      position: absolute;
      top: 30rem;
      left: 15rem;
      width: 20rem;
      height: 8rem;

      display: grid;
      grid-template-columns: repeat(auto-fit, 5rem);
      justify-content: center;
      // position: absolute;
      // margin-top: rem;
      // transform: translateY(-100%);
      z-index: 999;
      // margin-left: 10rem;
      // margin-right: 10rem;
      grid-gap: 1rem;
      height: 5rem;
      border: 2px pink solid;
      z-index: 999;
      .element {
        // position: relative;
        @include hoverable;
        border: 1px red solid;
        background-color: $green-ranger;
        text-align: center;
        display: grid;
        align-items: center;
        // color: black;
        z-index: 9;
        cursor: pointer;
        // .number {
        //   color: black;
        // }
      }
    }

    // img {
    //   width: 100%;
    //   height: 100%;
    //   z-index: 0;
    //   opacity: 0.1;
    // }
    // background-color: lightcoral;
  }
}
</style>
