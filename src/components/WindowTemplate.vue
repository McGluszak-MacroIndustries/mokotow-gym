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
      <div
        class="right"
        :style="{
          'background-image': `url(${require('../img/subpages/' + imgUrl)})`,
        }"
      >
        <div></div>

        <div class="element-container">
          <div class="expanded" v-if="clicked">
            <div></div>
            <div class="expander">
              <div
                class="items"
                v-for="(item, index) in items"
                :key="index"
                @click="changeSelectedItem(item, index)"
                :class="{ selected: isSelected(item) }"
              >
                {{ item.title }}
              </div>
            </div>
            <div></div>
          </div>
          <div class="hidden" v-else></div>
          <div class="proper-container">
            <div class="left-arrow">l</div>
            <div class="chosen-item" @click="clicked = !clicked">
              <div class="empty"></div>
              <div class="item-name">
                {{ selectedItem.title }}
              </div>
              <div class="icon" v-if="clicked">a</div>
              <div class="icon" v-else>b</div>
            </div>
            <div class="right-arrow">r</div>
          </div>
        </div>
        <div></div>
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
    const clicked = ref<boolean>(false);
    const selectedItem = ref<Item>(props.items[0]);
    const highlightedIndex = ref<number>(
      findIndex(props.items, selectedItem.value) + 1
    );
    const imgUrl = computed(
      () => `${selectedItem.value.name}/${selectedItem.value.src}`
    );

    const changeItemSpontaneously = () =>
      setInterval(() => changeItemToNextItem(), 5000);

    // onMounted(changeItemSpontaneously);

    function changeItemToNextItem() {
      const index = findIndex(props.items, selectedItem.value);
      console.log(index);
      if (index === props.items.length - 1) {
        selectedItem.value = props.items[0];
        highlightedIndex.value = 1;
      } else {
        highlightedIndex.value += 1;
        selectedItem.value = props.items[index + 1];
      }
    }

    function isSelected(item: Item) {
      return isEqual(item, selectedItem.value);
    }

    function changeSelectedItem(item: Item, index: number) {
      console.log(index);
      highlightedIndex.value = index + 1;
      selectedItem.value = props.items[index];
      clicked.value = !clicked.value;
    }
    function changeNumberFormat(number: number): string {
      return (number < 10 ? "0" : "") + number.toString();
    }
    return {
      clicked,
      changeItemToNextItem,
      selectedItem,
      changeSelectedItem,
      highlightedIndex,
      changeNumberFormat,
      isSelected,
      imgUrl,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
#select {
  width: 10vw;
}
option {
  background-color: blanchedalmond;
}

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
    @include grid-center;
    grid-template-rows: 12.5vh 48vh 5vh;
    background-size: cover;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
      filter: brightness(190%);
    }
    .element-container {
      width: 100%;
      height: 100%;
      @include grid-center;
      align-content: end;

      justify-content: center;
      border: 2px pink solid;
      z-index: 999;
      & > * {
        display: grid;
        color: $green-ranger;
        border: white 2px solid;
        grid-template-columns: 2vw 20vw 2vw;
        text-align: center;
      }
      .expanded {
        display: grid;
        .expander {
          display: grid;
          grid-template-rows: repeat(auto-fit, 2fr);
          grid-gap: none;
          align-items: center;
          background: $white-power;
          overflow-y: auto;
          .items {
            display: grid;
            min-height: 6vh;
            border: 2px $light-grey solid;
            cursor: pointer;
            align-content: center;
            color: $green-ranger;
            font-weight: bold;
            @include hoverable;
            &.selected {
              background: $green-ranger;
              color: $white-power;
            }
          }
        }
      }
      .proper-container {
        display: grid;
        align-content: center;
        background: $white-power;
        .chosen-item {
          display: grid;
          @include hoverable;
          cursor: pointer;
          grid-template-columns: 2vw 16vw 2vw;
          & > * {
            color: $dark-grey;
            font-weight: bold;
          }
        }
      }
      .all-items {
        grid-auto-flow: row;
        color: blueviolet;
      }
      .element-selected {
        @include hoverable;
        border: 1px red solid;
        text-align: center;
        display: grid;
        font-weight: bold;
        background-color: $white-power;
        color: $green-ranger;
        align-items: center;
        z-index: 9;
        cursor: pointer;

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
