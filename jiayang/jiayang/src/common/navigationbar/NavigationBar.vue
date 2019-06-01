<template>
  <header class="m-header" :class="{'is-bg-red':bgRed, 'is-fixed':fixed}">
    <div class="leftItem"><slot name="left"></slot></div>
    <div class="m-header-title" v-text="title"></div>
    <div class="rightItem"><slot name="right"></slot></div>
  </header>
</template>

<script type="text/ecmascript-6">
export default{
  name: 'NavigationBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    bgRed: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/index"
  .m-header
    display flex
    flex-direction row
    align-items center
    height 1.28rem
    background-color white
    border-bottom 1px solid #e5e5e5
    .leftItem
      margin-top 0.48rem
      width 1.2rem
      height 0.8rem
      a
        display block
        text-decoration none
        color #333
        font-size 0.32rem
        img
          padding 10px 10px
          width 0.48rem
          height 0.48rem
    .m-header-title
      width 100%
      height 0.88rem
      margin-top 0.48rem
      line-height 0.88rem
      display flex
      justify-content center
      font-size 0.36rem
      color #333
    .rightItem
      margin-top 0.48rem
      width 1.2rem
      height 0.8rem
      a
        display block
        text-decoration none
        color #333
        font-size 0.32rem
        img
          padding 9px 8px
          width 0.48rem
          height 0.48rem
  &.is-fixed
    position fixed
    left 0px
    right 0px
    top 0px
    z-index 9
  &.is-bg-red
    background-color $themecolor
    .m-header-title
      color white
    .m-header-left
      color white
    .m-header-right
      color white

</style>
