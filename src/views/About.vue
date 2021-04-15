<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',

});
</script>

<style lang="scss" scoped>
  $yellow-color: yellow;
  h1{
    color: $yellow-color;
  }
</style>
