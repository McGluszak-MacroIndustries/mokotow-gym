<template>
  <div class="window-template">
    <slot name="left-side">
      <div class="left">
        <div class="blank"></div>
        <div class="title">
          <div class="title-text">
            {{ changeNumberFormat(highlightedIndex) }}
            {{ selectedItem.title }}
          </div>
        </div>
        <div class="description" @click="changeItemToNextItem()">
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
          <div
            class="element"
            v-for="(item, index) in items"
            :key="index"
            @click="changeSelectedItem(item, index)"
            :class="{ selected: isEqual(item, selectedItem) }"
          >
            <div class="number">
              {{ changeNumberFormat(index + 1) }}
            </div>
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref } from "vue";
import { Item } from "@/mixins/items";
import {
  findIndex,
  floor,
  indexOf,
  isEqual,
  isNil,
  map,
  slice,
  take,
  takeRight,
} from "lodash";

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
      findIndex(props.items, selectedItem.value) + 1
    );

    // const changeItemSpontaneously = () =>
    //   setInterval(() => changeItemToNextItem(), 10000);
    // onMounted(changeItemSpontaneously);

    // const highlightedItems = computed(() => {
    //   const currentIndex = highlightedIndex.value - 1;
    //   const itemsToIndexes = map(props.items, (i) => indexOf(props.items, i));

    //   console.log(itemsToIndexes);

    //   // const currentItemIndex = props.items.length;
    //   return slice(
    //     [
    //       ...takeRight(itemsToIndexes, floor(props.miniaturesAmount / 2)),
    //       ...itemsToIndexes,
    //       ...take(itemsToIndexes, floor(props.miniaturesAmount / 2)),
    //     ],
    //     currentIndex,
    //     currentIndex + props.miniaturesAmount
    //   );
    // });

    // function getImgUrl(name: string, pic: string) {
    //   // console.log("oto obrazek");
    //   // console.log(`../img/subpages/${selectedItem.value.name}` + "/" + pic);
    //   // return require(`@/img/subpages/${selectedItem.value.name}/${pic}`);
    //   // return require("../img/subpages/about-us/banner_01.jpg");
    //   return require("@/img/" + name + "/" + pic);
    // }

    function changeItemToNextItem() {
      const index = findIndex(props.items, selectedItem.value);
      console.log(index);
      if (index === props.items.length - 1) {
        selectedItem.value = props.items[0];
        highlightedIndex.value = 1;
        // highlightedIndex.value = index;
      } else {
        highlightedIndex.value += 1;
        selectedItem.value = props.items[index + 1];
      }
    }

    function changeSelectedItem(item: Item, index: number) {
      console.log(index);
      highlightedIndex.value = index + 1;
      // console.log(highlightedIndex.value);
      selectedItem.value = props.items[index];
    }
    function changeNumberFormat(number: number): string {
      return (number < 10 ? "0" : "") + number.toString();
    }
    return {
      changeItemToNextItem,
      selectedItem,
      changeSelectedItem,
      highlightedIndex,
      changeNumberFormat,
      // highlightedItems,
      isEqual,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

.window-template {
  display: grid;
  grid-template-columns: 50vw 50vw;
  height: calc(50vw * 0.7);
  text-align: left;
  .left {
    display: grid;
    grid-template-rows: 12.5vh 15vh 33vh 5vh;
    border: 2px white solid;

    .title {
      display: grid;
      align-content: center;
      justify-items: flex-start;
      font-weight: bold;
      font-size: 2rem;
    }
    .line {
      border-top: $green-ranger 10px solid;
      margin-right: 5rem;
    }
    & > * {
      border: orange 2px solid;
      margin-left: 10vw;
    }
  }
  .right {
    border: 4px white solid;
    position: relative;

    position: relative;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
      filter: brightness(190%);
    }
    .element-container {
      position: absolute;
      top: 50vh;
      left: 15vw;
      width: 20vw;
      height: 5vw;

      display: grid;
      grid-template-columns: repeat(auto-fit, 5vw);
      justify-content: center;
      grid-gap: 1rem;
      border: 2px pink solid;
      z-index: 999;
      .element {
        @include hoverable;
        border: 1px red solid;

        text-align: center;
        display: grid;
        font-weight: bold;
        background-color: $white-power;
        align-items: center;
        z-index: 9;
        cursor: pointer;
        & > * {
          color: $green-ranger;
        }

        &.selected {
          background-color: $green-ranger;
          & > * {
            color: $white-power;
          }
        }
      }
    }
  }
}
</style>
