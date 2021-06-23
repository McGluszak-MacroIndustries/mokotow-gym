<template>
  <div class="window-template">
    <div class="left">
      <div class="blank"></div>
      <div class="title">
        <div class="title-text">POZNAJ NAS</div>
      </div>
      <div class="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum earum
        placeat ullam quia porro, unde quaerat suscipit aliquam fuga! Tempore
        quae sequi blanditiis dolorem nam eligendi dolor veniam non nisi. Sequi,
        distinctio tempora fugiat animi fuga, alias, corporis praesentium odio
        ipsa qui porro eligendi accusamus ipsum atque. Consequatur possimus
        ipsam nobis recusandae ducimus velit, consequuntur doloribus eligendi
        unde, distinctio cumque! Quas molestiae natus, at, animi sint
        accusantium repellendus nesciunt numquam tempore odio eum consequuntur
        eaque eos maxime ullam dolorem voluptates suscipit consequatur vitae
        minus fugiat ratione ut porro dolorum. Quis. Maiores beatae itaque
        possimus, fugiat molestiae quod. Illo, quos. Earum ea doloremque illo
        magnam non fugiat corrupti repudiandae sed odit sequi repellendus
        obcaecati laborum, vel asperiores vero voluptatum voluptas laudantium.
        Ducimus cumque vero ipsa tempora, optio, quaerat, dolor sequi minus
        quibusdam voluptatem repellat tenetur odit voluptate inventore quos
        eveniet? Dolores recusandae facilis ex saepe quaerat dolorem enim
        aspernatur cupiditate rerum!
      </div>
      <span class="line"></span>
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WindowTemplate",
  props: {},
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
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
      //   padding-left: ;
    }
    .line {
      border-top: lightgreen 10px solid;
      margin-right: 5rem;
      //   transform: translateY();
    }
    & > * {
      border: orange 2px solid;
    }
  }
  .right {
    background-color: lightcoral;
  }
}
</style>
