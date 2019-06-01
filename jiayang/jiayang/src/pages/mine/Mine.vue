<template>
  <div class="main-content">
    <navigation-bar title="我的" :bgRed='true'/>
    <div class="content" ref="wrapper">
      <div class="content-item">
        <mine-header></mine-header>
        <mine-list></mine-list>
      </div>
    </div>
    <image-tabbar :idx="3"/>
  </div>
</template>

<script>
import ImageTabbar from 'common/tabbar/ImageTabbar'
import MineHeader from 'pages/mine/components/mine-header/MineHeader'
import BScroll from 'better-scroll'
import MineList from 'pages/mine/components/mine-list/MineList'
export default {
  name: 'Mine',
  data () {
    return {

    }
  },
  components: {ImageTabbar, MineHeader, MineList},
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
    .content
      position absolute
      left 0
      right 0
      top 1.28rem
      bottom 1rem
      overflow hidden
      background-color #f0f0f0

</style>
