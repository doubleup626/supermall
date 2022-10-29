<template>
  <tab-bar>
    <!-- 这里面填插槽里的东西 -->
    <tab-bar-item path="/home">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="首页" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/home_active.svg" alt="首页"/>
      </template>
      <template v-slot:item-text> 
        <div>首页</div> 
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="分类" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/category_active.svg" alt="分类"/>
      </template>
      <template v-slot:item-text> 
        <div>分类</div> 
      </template>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <template v-slot:item-icon> 
        <img src="@/assets/img/tabbar/shopcart.svg" alt="购物车" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/shopcart_active.svg" alt="购物车"/>
      </template>
      <template v-slot:item-text> 
        <div>购物车</div> 
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/profile.svg" alt="我的" />
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/profile_active.svg" alt="我的"/>
      </template>
      <template v-slot:item-text> 
        <div>我的</div> 
      </template>
    </tab-bar-item>
  </tab-bar>
  <!-- 肯定有人会疑惑命名注册的组件名字叫TabBar但是在引用组件的时候为什么是<tab-bar><tab-bar>,因为在引用的时候vue规定用-隔开 -->
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>