<template>
  <div class="content">
    <div class="content-item">
      <img class="content-icon"/>
      <p class="content-username">用户名</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MineHeader'
}
</script>

<style lang="stylus" scoped>
  .content
    position relative
    left 0
    right 0
    top 0
    padding-bottom 36.2%
    overflow hidden
    height 0
    background url('../../../../assets/mine/mine_home_bg_b.png') no-repeat
    .content-item
      position absolute
      top 50%
      left 0
      right 0
      margin-top -0.9rem
      .content-icon
        display block
        margin 0 auto
        border-radius .7rem
        width 1.4rem
        height 1.4rem
        background-color white
      .content-username
        color white
        text-align center
        line-height 0.4rem
</style>
