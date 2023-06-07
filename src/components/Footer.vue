<template>
  <div class="Footer">
    <!-- <div class="second-navbar">
      <div class="second-menu">
        <div
          class="navbar-item"
          v-for="element in currentNavbarElements"
          :key="element"
          @click="moveToPage(element)"
        >
          {{ element.frontName }}
        </div>
      </div>
      <div class="media-menu">
        <div v-for="icon in icons" :key="icon" class="icon">
          <a :href="icon.iconHref" target="blank">
            <img :src="getIconUrl(icon.iconName)" alt="" />
          </a>
        </div>
      </div>
    </div> -->
    <div class="info">
      <div class="copyrights">&copy; 2021 Mokotowski-Gym</div>
      <div class="addresses">
        <div>ul. Białej Floty 2, 02-654 Warszawa</div>
        <div>/</div>
        <div>tel: +48 664 099 162</div>
        <div>/</div>
        <div>www.mokotowskigym.com</div>
        <div>/</div>
        <div>office@mokotowskigym.com</div>
      </div>
      <div class="media-menu">
        <div v-for="icon in icons" :key="icon" class="icon">
          <a :href="icon.iconHref" target="blank">
            <img :src="getIconUrl(icon.iconName)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="lower-pannel">
      <div class="pdfs">
        <div
          class="privacy-politics"
          @click="
            download('regulamin płatności, regulamin klubu 2022-01-04.pdf')
          "
        >
          Regulamin płatności, regulamin klubu
        </div>
        <div
          class="privacy-politics"
          @click="download('polityka ochrony danych osobowych 2021-09-30.pdf')"
        >
          Polityka ochrony danych osobowych
        </div>
      </div>
      <div class="company-data">
        <div>McGluszak MacroIndustries Sp.z o.o</div>
        <div>ul. Warszawska 6m32, 15-063 Białystok</div>
        <div>NIP:9662116841</div>
        <div>KRS:0000716731</div>
        <div>REGON:368770856</div>

        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  navbarElements,
  NavBarElement,
  icons,
} from "@/mixins/navbar-management";
import router from "@/router";

export default defineComponent({
  name: "Footer",
  props: {
    currentNavbarElements: {
      type: Array as () => NavBarElement[],
      required: true,
    },
  },
  setup() {
    function moveToPage(element: NavBarElement) {
      const name: string = element.routerName;
      router.push({ name });
    }
    function getIconUrl(iconUrl: string) {
      return require("../assets/media-small/" + iconUrl);
    }
    function moveToPrivacyPolitics() {
      const name = "privacypolitics";
      router.push({ name });
    }
    function generateFileUrl(filename: string) {
      return `/pdfs/${filename}`;
    }
    function download(filename: string) {
      const a = document.createElement("a");
      a.href = generateFileUrl(filename);
      a.download = generateFileUrl(filename);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    return {
      navbarElements,
      icons,
      moveToPage,
      moveToPrivacyPolitics,
      download,
      getIconUrl,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/main";
.Footer {
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: 5vh 3vh;
  background: $white-power;
  justify-content: stretch;
  & > * {
    align-items: flex-end;
    padding-bottom: 1rem;
  }
  .lower-pannel {
    display: grid;
    grid-template-columns: 35vw 50vw;
    justify-content: stretch;
    .pdfs {
      display: grid;
      grid-auto-flow: column;
    }
    .privacy-politics {
      @include hoverable;
      transform: translateX(10vw) translateY(-2.8vh);
      color: $medium-grey;
      font-size: 0.8rem;
    }

    .company-data {
      transform: translateY(-3vh);
      display: grid;
      grid-auto-flow: column;
      justify-content: right;
      // margin-left: 10vw;
      // margin-right: 10vw;

      & > * {
        color: $light-grey;
        font-size: 0.6rem;

        // margin-right: 1rem;
        // justify-self: ;
      }
    }
  }

  // .second-navbar {
  //   display: grid;
  //   grid-template-columns: 60vw 40vw;

  //   // border-bottom: black 2px solid;
  //   & > * {
  //     // border: red 2px solid;
  //     padding-top: 5vh;
  //   }
  //   .second-menu {
  //     margin-left: 10vw;

  //     display: grid;
  //     grid-auto-flow: column;
  //     align-items: flex-start;
  //     color: $dark-grey;
  //     .navbar-item {
  //       @include hoverable;
  //       display: grid;
  //       justify-items: start;
  //       color: $dark-grey;
  //       // font-weight: bold;
  //     }
  //   }
  //   .media-menu {
  //     display: grid;
  //     grid-auto-flow: column;
  //     justify-content: center;
  //     grid-gap: 1vw;
  //     .icon {
  //       @include hoverable;

  //       height: 3vh;
  //     }
  //   }
  // }
  .info {
    margin-left: 3vw;
    margin-right: 3vw;
    display: grid;
    grid-auto-flow: column;
    // justify-content: stretch;
    border-bottom: $medium-grey 2px solid;
    & > * {
      color: $medium-grey;
      padding-top: 1vh;
      // justify-content: stretch;
    }
    .copyrights {
      font-size: 0.9rem;
    }
    .addresses {
      display: grid;
      grid-auto-flow: column;
      justify-content: right;
      font-size: 0.7rem;
      grid-gap: 2vw;
      & > * {
        color: $medium-grey;
      }
    }
    .media-menu {
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      align-content: center;
      align-self: center;
      // align-content: center;
      grid-gap: 1vw;
      .icon {
        @include hoverable;
        align-content: center;
        height: 3vh;
        transform: translateY(20%);
      }
    }
  }
}
</style>
