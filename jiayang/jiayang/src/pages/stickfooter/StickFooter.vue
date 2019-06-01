<template>
  <div class="container">
    <div class="content">
      <div class="content-main"></div>
    </div>
    <div class="close">关闭</div>
  </div>
</template>

<script>
export default {
  name: 'StickFooter'
}
</script>

<style lang="css" scoped>
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .container {
    height: 100%;
  }
  .content {
    min-height: 100%;
    border:1px solid red;
  }
  .content-main{
    padding-bottom: 32px;
    margin-top:32px ;
    border: 1px solid black;
  }
  .close{
    height: 32px;
    position: relative;
    margin: -32px auto; // 这里会在内容不足的时候，把页脚从页面外拉出来
    background: rgb(7,17,27);
    clear: both;
  }

</style>
