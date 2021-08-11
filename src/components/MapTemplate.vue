<template>
  <div class="window-template">
    <slot name="left-side">
      <div class="left">
        <div class="blank"></div>
        <div class="title">
          <div class="title-text">dupa</div>
        </div>
        <div class="description">dupa</div>
        <span class="line"></span>
      </div>
    </slot>
    <slot name="right-side">
      <div class="right">
        <GoogleMap
          api-key="AIzaSyCky3Lg85iBceIr8BvL2VPVo7YhHBBbPMw"
          :center="center"
          language="pl"
          class="map"
          style="width: 45vw; height: 50vh; border-radius: 2rem"
          :zoom="13"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap>
      </div>
    </slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref } from "vue";
import { Item } from "@/mixins/items";
import { findIndex, isEqual } from "lodash";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  name: "WindowTemplate",
  components: {
    GoogleMap,
    Marker,
  },

  setup(props, { emit }) {
    const center = { lat: 52.195899, lng: 20.983702 };
    return { center };
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
    // border: 2px white solid;

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
      //   border: orange 2px solid;
      margin-left: 10vw;
    }
  }
  .right {
    // border: 4px white solid;
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
      //   border: 2px pink solid;
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
        & > * {
          cursor: pointer;
          @include hoverable;
          color: $dark-grey;
        }
        .left-arrow,
        .right-arrow {
          color: $dark-grey;
          cursor: pointer;
        }
        .chosen-item {
          display: grid;
          @include hoverable;
          cursor: pointer;
          grid-template-columns: 2vw 16vw 2vw;
          height: 2vh;
          & > * {
            color: $dark-grey;
            font-weight: bold;
          }
          .icon {
            transform: translateY(5%);
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
