<template>
 <div id="app">
    <router-link to="/first_page">
      <div>个人中心</div>
    </router-link>
    <router-link to="/second-page">
      <div>个人中心</div>
    </router-link>
    <router-view> </router-view>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "dont-starve-together-electron-vue-typescript"
});  
</script>

<style>
/* CSS */
</style>
