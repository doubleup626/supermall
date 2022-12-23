<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isShow" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{ isActive: isShow }">
      <slot name="item-text"></slot>
    </div>
    <!-- <slot :class="{ isActive: !isShow }" name="item-text"></slot>写成这样是不对的,因为在app.vue中,<div slot="item-text">首页</div>会替代掉插槽,所以插槽设置的class就失效了 -->
  </div>
</template>

<script>
export default {
  methods: {
    itemClick() {
      // console.log("this.$route.path: "+this.$route.path);
      //这里输出的this.$route.path和computed中输出的this.$route.path不一样，但其实他们都是输出当前处于活跃状态的路由想想为什么？
      this.$router.replace(this.path);
    },
  },
  props: {
    path: String,
  },
  computed: {
    isShow() {
      // console.log("看这里"+this.$route.path);
      return this.$route.path==this.path
      //TabBarItem组件使用(创建)了4次
      //每创建一个都会从父组件app.vue那里获得自己的path信息(就是上面一行的this.path),Home组件path为/home,Category组件path为/category,以此类推
      //每创建一个也都会在isShow计算属性中进行判断(也就是说你点击一下tabbaritem,会判断四次,每个组件一次)
      //然而,this.$route.path却只是当前处于活跃状态的路由的路径,只能与这四个组件中的一个相匹配,匹配成功的组件才会变色
      //理解的重点：点击的是“组件”，而这个组件使用了四次
    }
  },
};
</script>

<style>
.tab-bar-item {
  height: 49px; /*一般tabbar的按高度都设置为49px*/
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: bottom;
  /* vertical-align是用来解决图片的三像素问题：为什么会多三个像素，是因为此元素默认放在父亲元素得基线上，通过vertical-align实现图片与文字对其，注意它只对行内元素跟行内块元素有效 */
}
.isActive {
  color: var(--color-tint);
}
</style>