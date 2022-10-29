<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
#tab-bar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background-color: rgb(230, 230, 230);
  position: fixed;
  /* left:0; */
  /* right:0; */
  width: 100%;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.4);
}

</style>