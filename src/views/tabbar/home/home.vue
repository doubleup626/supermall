<template>
  <div>
    <nav-bar class="home-nav">
      <template #center>购物街</template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <tab-control
      :title="tabControlTitle"
      class="tab-control"
      @currentTitle="currentTitle"
    ></tab-control>
    <!-- <img  v-if="tabControlCurrentTitle='pop'" v-for="(item, index) in goods.pop.list" :key="item" :src="item" alt="" /> -->
    <div>
      <div v-if="(tabControlCurrentTitle = 'pop')">
        <img
          v-for="(item, index) in goods.pop.list"
          :key="item"
          :src="item"
          alt=""  
        />
      </div>
      <div v-else-if="(tabControlCurrentTitle = 'new')">
        <img
          v-for="(item, index) in goods.new.list"
          :key="item"
          :src="item"
          alt=""
        />
      </div>
      <div v-else-if="(tabControlCurrentTitle = 'sell')">
        <img
          v-for="(item, index) in goods.sell.list"
          :key="item"
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
//导入公共组件
import NavBar from "@/components/common/navbar/NavBar.vue";
import Swiper from "@/components/common/swiper/Swiper";
import TabControl from "@/components/content/tabControl/TabControl.vue";
//导入子组件
import RecommendView from "./childComps/HomeRecommendView.vue";
//导入网络请求模块
import { getHomeMultidata, getHomeGoods } from "@/network/home";

export default {
  components: {
    NavBar,
    Swiper,
    RecommendView,
    TabControl,
  },
  data() {
    return {
      //用来存储网络请求来的信息
      // result: null,
      banners: [],
      recommends: [],
      tabControlTitle: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  methods: {
    currentTitle(item) {
      this.tabControlCurrentTitle = item;
      // console.log(this.tabControlCurrentTitle);
    },
  },
  created() {
    getHomeMultidata().then((res) => {
      // 网络请求来的数据要存储在data的result中
      // this.result = res;
      //我们最终需要用的数据是下面的这些数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });

    // console.log(this.$refs.child1);
    //created函数内部使用refs是获取不到子组件的,原因看csdn
    getHomeGoods(this.tabControlCurrentTitle, 1).then((res) => {
      const type = this.tabControlCurrentTitle;
      if (type === "pop") {
        this.goods.pop.list = res.list;
      } else if (type === "new") {
        this.goods.new.list = res.list;
      } else {
        this.goods.sell.list = res.list;
      }
    });
  },
};
</script>

<style>
.home-nav {
  background-color: var(
    --color-tint
  ); /* color-tint是在base.css中定义的css全局变量 */
  color: white;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
</style>