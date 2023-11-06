<script setup>
import LayOut from './components/LayOut.vue'
</script>

<template>
  <LayOut>
    <router-view></router-view>
  </LayOut>
</template>

<style>
.router-link-active svg {
  display: block!important;
  /* background-color: red; */
}
</style>