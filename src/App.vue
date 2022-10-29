<template>
  <!-- <div>测试项目</div> -->
  <router-view></router-view>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/MainTabBar.vue';
export default {
  name: "App",
  components:{
    MainTabBar
  }
};
</script>

<style>
  @import "../src/assets//css//base.css";
</style>
