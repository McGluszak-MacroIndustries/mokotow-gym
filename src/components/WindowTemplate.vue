<template>
  <div class="window-template">
    <div class="left-full" @click.self="clicked = false">
      <div class="blank" @click="clicked = false"></div>
      <transition name="slide-fade" mode="out-in">
        <slot name="slot-fix">
          <div class="title" :key="selectedItem" @click="clicked = false">
            <div class="title-text" v-if="!isGallery">
              {{ selectedItem.title.toUpperCase() }}
            </div>
            <div class="title-text" v-else>GALERIA ZDJĘĆ</div>
          </div>
        </slot>
      </transition>
      <transition name="slide-fade" mode="out-in">
        <div class="description" :key="selectedItem" @click="clicked = false">
          <slot name="optional"></slot>
          <slot name="proper-desc">
            <div v-if="!isGallery">{{ selectedItem.description }}</div>
            <div v-else>
              <GallerySquares
                @clicked-item="changeItemFromClick($event)"
                :items="items"
              ></GallerySquares>
            </div>
          </slot>
          <slot name="left-side"> </slot>
        </div>
      </transition>
      <slot name="menu-nav">
        <div class="element-container" @click.self="clicked = false">
          <div class="expanded" v-if="clicked">
            <div></div>
            <div class="expander">
              <div
                class="item"
                v-for="(item, index) in items"
                :key="index"
                @click="changeSelectedItem(item, index)"
                :class="{ selected: isSelected(item) }"
              >
                <div></div>
                <div class="name">{{ item.title }}</div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="hidden" v-else></div>
          <div class="proper-container">
            <div class="chosen-item" @click="clicked = !clicked">
              <div class="empty"></div>
              <div class="item-name">
                {{ selectedItem.title }}
              </div>
              <!-- <div class="" v-if="clicked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.142"
                      height="14.142"
                      viewBox="0 0 14.142 14.142"
                    >
                      <g id="burger" transform="translate(-1431.429 -603.429)">
                        <line
                          id="Line_7"
                          data-name="Line 7"
                          x2="18"
                          transform="translate(1432.136 616.864) rotate(-45)"
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                        />
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          x2="18"
                          transform="translate(1432.136 604.136) rotate(45)"
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                  </div> -->
              <div class="icon" v-if="!clicked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                >
                  <g id="burger" transform="translate(-1429.5 -603.5)">
                    <line
                      id="Line_7"
                      data-name="Line 7"
                      x2="18"
                      transform="translate(1429.5 604.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      x2="18"
                      transform="translate(1429.5 610.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_9"
                      data-name="Line 9"
                      x2="18"
                      transform="translate(1429.5 616.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div
              class="left-arrow"
              @click="changeItemToNextOrPreviousItem('previous')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.314"
                height="17.385"
                viewBox="0 0 10.314 17.385"
              >
                <g
                  id="Group_10"
                  data-name="Group 10"
                  transform="translate(-345.068 -1200.96) rotate(45)"
                >
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="10"
                    transform="translate(1100.5 610.5)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    x2="10"
                    transform="translate(1100.5 599.914) rotate(90)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <div
              class="right-arrow"
              @click="changeItemToNextOrPreviousItem('next')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.314"
                height="17.385"
                viewBox="0 0 10.314 17.385"
              >
                <g
                  id="Group_11"
                  data-name="Group 11"
                  transform="translate(355.382 1218.345) rotate(-135)"
                >
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="10"
                    transform="translate(1100.5 610.5)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    x2="10"
                    transform="translate(1100.5 599.914) rotate(90)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="mobile-container" @click.self="clicked = false">
          <div class="expanded" v-if="clicked">
            <div></div>
            <div class="expander">
              <div
                class="item"
                v-for="(item, index) in items"
                :key="index"
                @click="changeSelectedItem(item, index)"
                :class="{ selected: isSelected(item) }"
              >
                <div></div>
                <div class="name">{{ item.title }}</div>
                <div></div>
              </div>
            </div>
            <div></div>
          </div>
          <div class="hidden" v-else></div>
          <div class="proper-container">
            <div class="chosen-item" @click="clicked = !clicked">
              <div class="empty"></div>
              <div class="item-name">
                {{ selectedItem.title }}
              </div>
              <!-- <div class="" v-if="clicked">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.142"
                      height="14.142"
                      viewBox="0 0 14.142 14.142"
                    >
                      <g id="burger" transform="translate(-1431.429 -603.429)">
                        <line
                          id="Line_7"
                          data-name="Line 7"
                          x2="18"
                          transform="translate(1432.136 616.864) rotate(-45)"
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                        />
                        <line
                          id="Line_9"
                          data-name="Line 9"
                          x2="18"
                          transform="translate(1432.136 604.136) rotate(45)"
                          fill="none"
                          stroke="#000"
                          stroke-width="2"
                        />
                      </g>
                    </svg>
                  </div> -->
              <div class="icon" v-if="!clicked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                >
                  <g id="burger" transform="translate(-1429.5 -603.5)">
                    <line
                      id="Line_7"
                      data-name="Line 7"
                      x2="18"
                      transform="translate(1429.5 604.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_8"
                      data-name="Line 8"
                      x2="18"
                      transform="translate(1429.5 610.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                    <line
                      id="Line_9"
                      data-name="Line 9"
                      x2="18"
                      transform="translate(1429.5 616.5)"
                      fill="none"
                      stroke="#000"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div
              class="left-arrow"
              @click="changeItemToNextOrPreviousItem('previous')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.314"
                height="17.385"
                viewBox="0 0 10.314 17.385"
              >
                <g
                  id="Group_10"
                  data-name="Group 10"
                  transform="translate(-345.068 -1200.96) rotate(45)"
                >
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="10"
                    transform="translate(1100.5 610.5)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    x2="10"
                    transform="translate(1100.5 599.914) rotate(90)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
            <div
              class="right-arrow"
              @click="changeItemToNextOrPreviousItem('next')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.314"
                height="17.385"
                viewBox="0 0 10.314 17.385"
              >
                <g
                  id="Group_11"
                  data-name="Group 11"
                  transform="translate(355.382 1218.345) rotate(-135)"
                >
                  <line
                    id="Line_5"
                    data-name="Line 5"
                    x2="10"
                    transform="translate(1100.5 610.5)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                  <line
                    id="Line_6"
                    data-name="Line 6"
                    x2="10"
                    transform="translate(1100.5 599.914) rotate(90)"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="square"
                    stroke-width="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </slot>
    </div>

    <slot name="right-full">
      <transition name="slide-fade" mode="out-in">
        <div
          class="right"
          :style="{
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.8), transparent), url(${require('../img/subpages/' +
              imgUrl)})`,
          }"
          :key="selectedItem"
          :class="{ mobile: isMobile }"
          @click.self="clicked = false"
        >
          <!-- <div class="mobile-window" v-show="isMobile">
            <transition name="slide-fade" mode="out-in">
              <div class="title" :key="selectedItem">
                <div class="title-text">
                  {{ selectedItem.title }}
                </div>
              </div>
            </transition>
            <transition name="slide-fade" mode="out-in">
              <div class="description" :key="selectedItem">
                <slot name="left-side">
                  {{ selectedItem.description }}
                </slot>
              </div>
            </transition>
          </div> -->
          <slot name="right-side">
            <div></div>

            <div @click="clicked = false"></div>
          </slot>
        </div>
      </transition>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref, watch } from "vue";
import { Item } from "@/mixins/items";
import { findIndex, isEqual } from "lodash";
import { isEnglishLanguageOn } from "@/mixins/items";
import GallerySquares from "@/components/GallerySquares.vue";

export default defineComponent({
  name: "WindowTemplate",
  components: { GallerySquares },

  props: {
    items: {
      type: Array as () => Item[],
      required: true,
    },
    miniaturesAmount: {
      type: Number,
      default: 3,
    },
    isGallery: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  // components: { GallerySquares },
  emits: ["selected-item"],
  setup(props, context) {
    const clicked = ref<boolean>(false);
    const selectedItem = ref<Item>(props.items[0]);
    const highlightedIndex = ref<number>(
      findIndex(props.items, selectedItem.value) + 1
    );
    const imgUrl = computed(
      () => `${selectedItem.value.name}/${selectedItem.value.src}`
    );

    const isPageScrolled = computed(() => {
      return window.scrollY;
    });

    const emitSelectedItem = () => {
      context.emit("selected-item", selectedItem.value);
    };

    const isMobile = ref<boolean>(window.innerWidth < 1000);

    window.onresize = () => {
      const browserWidth = window.innerWidth;
      console.log(browserWidth);
      console.log("zresajzowano", window.innerWidth);
      if (browserWidth > 1000) {
        isMobile.value = false;
      } else {
        isMobile.value = true;
      }
    };

    watch(() => selectedItem.value, emitSelectedItem);

    // const changeItemSpontaneously = () =>
    //   setInterval(() => changeItemToNextOrPreviousItem("next"), 5000);

    // onMounted(changeItemSpontaneously);

    function changeItemFromClick(item: Item) {
      selectedItem.value = item;
    }

    function changeItemToNextOrPreviousItem(direction: string) {
      const index = findIndex(props.items, selectedItem.value);
      console.log(index);

      switch (direction) {
        case "next":
          if (index === props.items.length - 1) {
            addEventListener("click", () => {
              console.log(Event);
            });
            selectedItem.value = props.items[0];
            highlightedIndex.value = 1;
          } else {
            highlightedIndex.value += 1;
            selectedItem.value = props.items[index + 1];
          }
          break;
        case "previous":
          if (index === 0) {
            selectedItem.value = props.items[props.items.length - 1];
            highlightedIndex.value = props.items.length;
          } else {
            highlightedIndex.value -= 1;
            selectedItem.value = props.items[index - 1];
          }
      }
    }

    function isSelected(item: Item) {
      return isEqual(item, selectedItem.value);
    }

    function changeSelectedItem(item: Item, index: number) {
      console.log(index);
      highlightedIndex.value = index + 1;
      selectedItem.value = props.items[index];

      // clicked.value = !clicked.value;
    }
    // function changeNumberFormat(number: number): string {
    //   return (number < 10 ? "0" : "") + number.toString();
    // }

    return {
      isMobile,
      clicked,
      changeItemToNextOrPreviousItem,
      selectedItem,
      changeSelectedItem,
      highlightedIndex,
      // changeNumberFormat,
      isSelected,
      imgUrl,
      isPageScrolled,
      changeItemFromClick,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";

.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

@keyframes showyourself {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.window-template {
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-template-areas: "leftfull rightfull";
  height: 90vh;
  text-align: left;
  // text-indent: 10px;
  white-space: pre-line;
  background-color: $dark-grey;
  overflow-x: hidden;

  .left-full {
    transition: opacity ease 2s;
    display: grid;
    grid-template-rows: 1vh 20vh 45vh 7vh;
    grid-template-areas:
      "blank"
      "title"
      "description"
      "line";
    margin-top: 12vh;
    grid-area: leftfull;

    .blank {
      grid-area: blank;
    }
    .description {
      margin-right: 1vw;
      margin-bottom: 3vh;
      grid-area: description;
      // scrollbar-color: red;

      padding-right: 4vw;
      padding-bottom: 2vh;
      font-size: 1rem;
      overflow-y: scroll;
    }

    .title {
      display: grid;
      align-content: center;
      justify-items: flex-start;
      font-weight: bold;
      font-size: 3.5rem;
      grid-area: title;
    }
    .element-container {
      display: grid;
      grid-template-rows: 80vh 8vh;
      grid-gap: 0;
      width: 100%;
      height: 100%;
      // @include grid-center;
      align-content: end;
      display: grid;
      justify-content: start;

      grid-gap: 0.5rem;

      .expanded {
        display: grid;
        width: 20vw;
        align-items: flex-end;
        align-self: flex-end;

        // grid-gap: 2rem;
        .expander {
          display: grid;
          grid-template-rows: repeat(auto-fit, 2fr);
          grid-gap: none;
          border-radius: 2rem;
          overflow-x: hidden;
          align-items: flex-end;
          align-self: flex-end;

          // align-items: center;
          background: $light-grey;
          overflow-y: auto;
          .item {
            display: grid;
            min-height: 4vh;
            background: $light-grey;
            padding-left: 2%;
            // border: 2px $light-grey solid;
            // border-bottom: 2px $light-grey solid;
            cursor: pointer;
            align-content: center;
            color: $dark-grey;
            font-weight: bold;
            font-size: 0.9rem;
            z-index: 999;
            grid-template-columns: 1vw 20vw 4vw;
            .name {
              color: $dark-grey;
              font-weight: lighter;
              font-size: 0.9rem;
            }
            @include hoverable;
            &.selected {
              background: $white-power;
              // color: black;
              .name {
                color: $dark-grey;
                font-weight: bolder;
                font-size: 0.9rem;
              }
            }
          }
        }
      }
      .proper-container {
        display: grid;
        align-content: center;
        grid-gap: 1.1vw;
        grid-template-columns: 20vw 3rem 3rem;
        min-width: 20vw;
        height: 3rem;
        & > * {
          cursor: pointer;
          @include hoverable;
          color: $dark-grey;
          background-color: $white-power;
          height: 3rem;
          display: grid;
          align-items: center;
          justify-content: center;
        }
        .left-arrow,
        .right-arrow {
          color: $dark-grey;
          border-radius: 50%;
        }
        .chosen-item {
          display: grid;
          @include hoverable;
          cursor: pointer;
          grid-template-columns: 3vw 17vw 3vw;
          border-radius: 2rem;
          & > * {
            color: $dark-grey;
            font-weight: bold;
            font-size: 0.9rem;
          }
          .icon {
            transform: translateX(-20%);
          }
        }
      }
      .element-selected {
        @include hoverable;
        // border: 1px red solid;
        text-align: center;
        display: grid;
        font-weight: bold;
        background-color: $dark-grey;
        color: $white-power;
        align-items: center;
        z-index: 9;
        cursor: pointer;

        &.selected {
          background-color: $white-power;
          & > * {
            color: $dark-grey;
          }
        }
      }
    }
    .mobile-container {
      display: none;
      // grid-area: mobile;
      // DUPSKO
    }
    & > * {
      margin-left: 3vw;
    }
  }
  .right {
    @include grid-center;
    grid-template-rows: 12.5vh 58vh 5vh;

    background-size: cover;
    grid-area: rightfull;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
      filter: brightness(190%);
    }
  }
}
@media screen and (max-width: 1000px) {
  .window-template {
    grid-template-rows: 55vh 50vh;
    grid-template-areas:
      "rightfull rightfull"
      "leftfull leftfull";
  }
}

@media screen and (max-width: 600px) {
  .window-template {
    grid-template-rows: 50vh 40vh;
    .right {
      display: grid;
      grid-template-rows: 25vh 33.5vh 20vh;
      img {
        width: 50%;
        height: 50%;
      }
    }
    .left-full {
      grid-gap: none;
      grid-template-areas:
        "blank"
        "title"
        "description";
      grid-template-rows: 2rem 2rem min-content !important;
      margin-top: none;

      .title {
        transform: translateY(-10vh);
        justify-items: center;
        text-align: center;
        font-size: 1.6rem;
        margin-left: 0;
      }
      .description {
        transform: translateY(-6vh);
        padding-bottom: 5rem;
        // align-content: flex-start;
        text-align: center;
      }
      .element-container {
        display: none;
      }
      .mobile-container {
        // transform: translateY(10vh);
        display: grid;
        position: absolute;
        bottom: 10vh;
        grid-gap: 0.5rem;
        // margin-top: 2vh;
        padding-top: 1vh;

        .proper-container {
          background: $dark-grey;
          display: grid;
          align-content: center;
          grid-gap: 1.1vw;
          grid-template-columns: 65vw 3rem 3rem;
          min-width: 20vw;
          height: 3rem;
          // background: $white-power;
          & > * {
            cursor: pointer;
            @include hoverable;
            color: $dark-grey;
            background-color: $white-power;
            height: 3rem;
            display: grid;
            align-items: center;
            justify-content: center;
          }
          .left-arrow,
          .right-arrow {
            color: $dark-grey;
            border-radius: 50%;
          }
          .chosen-item {
            // transform: translateY(15%);
            display: grid;
            @include hoverable;
            cursor: pointer;
            grid-template-columns: 10% 70% 20%;
            border-radius: 2rem;
            // z-index: 1;

            // height: 2vh;
            & > * {
              color: $dark-grey;
              font-weight: bold;
              font-size: 0.9rem;
            }
            .icon {
              transform: translateX(-20%);
            }
          }
        }
        .element-selected {
          @include hoverable;
          // border: 1px red solid;
          text-align: center;
          display: grid;
          font-weight: bold;
          background-color: $white-power;
          color: $dark-grey;
          align-items: center;
          z-index: 9;
          cursor: pointer;

          &.selected {
            background-color: $white-power;
            & > * {
              color: $dark-grey;
            }
          }
        }
        .expanded {
          display: grid;
          width: 65vw;
          align-items: flex-end;
          align-self: flex-end;

          // grid-gap: 2rem;
          .expander {
            display: grid;
            grid-template-rows: repeat(auto-fit, 2fr);
            grid-gap: none;
            border-radius: 2rem;
            overflow-x: hidden;
            align-items: flex-end;
            align-self: flex-end;

            // align-items: center;
            background: $light-grey;
            overflow-y: auto;
            .item {
              display: grid;
              min-height: 4vh;
              background: $light-grey;
              padding-left: 2%;
              // border: 2px $light-grey solid;
              // border-bottom: 2px $light-grey solid;
              cursor: pointer;
              align-content: center;
              color: $dark-grey;
              font-weight: bold;
              font-size: 0.9rem;
              z-index: 999;
              grid-template-columns: 8% 72% 20%;
              .name {
                color: $dark-grey;
                font-weight: lighter;
                font-size: 0.9rem;
              }
              @include hoverable;
              &.selected {
                background: $white-power;
                // color: black;
                .name {
                  color: $dark-grey;
                  font-weight: bolder;
                  font-size: 0.9rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

// @media screen and (max-width: 600px) {
//   .window-template {
//     grid-template-rows: 55vh 50vh;
//     grid-template-areas:
//       "rightfull rightfull"
//       "leftfull leftfull";
//     overflow: hidden;
//     // overflow-y: hidden;
//     // overflow: hidden;
// .right {
//   display: grid;
//   grid-template-rows: 25vh 33.5vh 20vh;
//   // img {
//   //   width: 50%;
//   //   height: 50%;
//   // }
// }
//     .left-full {
//       grid-template-rows: 1vh 7vh fill-content 20vh;
//       margin-top: -50px;
//       overflow-y: scroll;
//       .description {
//         margin-left: 1.3rem;
//         text-align: center;
//         font-size: 0.8rem;
//         margin-top: -3vh;
//         margin-bottom: 1.1rem;
//         // overflow-y: scroll;

//         // align-self: center;
//       }
//       .title {
//         // transform: translateY(-50%);
//         justify-items: center;
//         text-align: center;
//         font-size: 2rem;
//         margin-left: 0;
//       }
//       .line {
//         display: none;
//       }
//       .element-container {
//         transform: translateY(20%);
//         .expanded {
//           width: 50vw;
//           height: 50vh;
//           transform: translateY(-2%);

//           // border-bottom: none;
//           .expander {
//             transform: translateY(-7%) translateX(12.5%);
//             .item {
//               border-bottom: 0.5px $light-grey solid;
//               padding-left: 15px;
//               overflow-x: hidden;
//               &.selected {
//                 .name {
//                   font-size: 0.8rem;
//                 }
//               }
//               .name {
//                 width: 40vw;
//                 font-size: 0.8rem;
//                 transform: translateX(2vw);
//               }
//             }
//           }
//         }
//         .proper-container {
//           transform: translateX(9%) translateY(-20%);
//           // margin-bottom: 0.5rem;

//           grid-template-columns: 50vw 3rem 3rem;
//           position: fixed;

//           grid-gap: 2vw;
//           .left-arrow,
//           .right-arrow,
//           .chosen-item {
//             height: 3rem;
//           }
//           .chosen-item {
//             grid-template-columns: 3vw 37vw 5vw;
//             .item-name {
//               // transform: translateX(-6%);
//               font-size: 0.8rem;
//               width: 40vw;
//             }
//             .icon {
//               transform: translateY(5%);
//             }
//           }
//         }
//       }
//     }
//   }
// }
</style>
