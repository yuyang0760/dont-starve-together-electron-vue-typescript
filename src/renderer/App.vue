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
/* CSS 主页*/
@import url("I:/dont-starve-together-electron-vue-typescript/node_modules/bootstrap/dist/css/bootstrap.css");
@import url("I:/dont-starve-together-electron-vue-typescript/node_modules/bootstrap/dist/css/bootstrap-theme.css");

/* // label {
//     color: rgb(212, 114, 21);
//   } */


</style>
