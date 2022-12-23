<template>
  <div class="nav-bar">
    <!-- TabBar组件的这里用的是id,是因为tabbar真个软件就一个tabbar,而头顶导航栏则每个页面都有不同的 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped代表css只对当前文件起到效果 */
.nav-bar {
  display: flex;
  flex-flow: row wrap;
  height: 44px; /* height直接设置的div的高度 */
  line-height: 44px; /*可以实现垂直居中*/
  /* line-height是设置的是文字的行高,需要文字才能撑起div的高度 */
  text-align: center; /*可以实现水平居中*/
  box-shadow: 0px 1px  2px rgba(152, 147, 147, 0.4);
  /* background-color: red; */
  /* 不建议在插件内部设置好背景颜色,因为引用组件时需要的背景颜色不一样,想自定义,所以在引用该组件的组件中修改背景颜色 */
}
.left,
.right {
  width: 60px;
  /* background-color: pink; */
}
.center {
  flex: 1 1 0%; /*等价于flex:1 1 0%;*/
  /* background-color: rgb(133, 133, 237); */
}
</style>>
