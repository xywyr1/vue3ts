<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <h3>{{ user }}<span>是个可爱的人</span><a href=""><span>一个有思想的人</span></a></h3>
    <div class="container">
      <h1>熊出没</h1>
      <h2>海贼王</h2>
    </div>
    <div class="strong-text">大力出奇迹</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    let user = ref("haha");

    return {
      user,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common.scss';

$blue-color: blue;
h3 {
  color: $blue-color;

  span {
    font-size: 20px;
    color: skyblue;
  }

  > span{
    color: springgreen;
    @include float-left;
  }

  &:hover {
    color: red;
  }
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  h1,
  h2 {
    color: slateblue;
    font-size: 36px;
  }
}
.strong-text{
  @include font-set($blue-color,40px);
}
</style>
