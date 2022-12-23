<template>
  <!-- <keep-alive include="home">
    <router-view></router-view>
  </keep-alive> -->
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <main-tab-bar></main-tab-bar>
</template>

<script>
import MainTabBar from "@/components/content/mainTabBar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "../src/assets//css//base.css";
</style>
