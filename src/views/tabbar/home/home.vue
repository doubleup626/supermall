<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Swiper from "@/components/common/swiper/Swiper";
import RecommendView from "./childComps/HomeRecommendView.vue";
import { getHomeMultidata } from "@/network/home";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
  },
  data() {
    return {
      //用来存储网络请求来的信息
      // result: null,
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      // 网络请求来的数据要存储在data的result中
      // this.result = res;
      //我们最终需要用的数据是下面的这些数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint); /* color-tint是在base.css中定义的css全局变量 */
  color: white;
  position: sticky;
  left: 0;
  right:0;
  top:0;
  z-index: 1;
}
</style>