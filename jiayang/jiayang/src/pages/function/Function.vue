<template>

  <div class="main-content">
    <navigation-bar title="佳央" :bgRed='bgRed'/>
    <div class="content" ref="wrapper">
      <div class="content-list">
        <home-banner></home-banner>
        <home-icons></home-icons>
        <home-waterlight></home-waterlight>
        <p class="content-title">首页</p>
        <p class="content-title">最后一条</p>
        <p class="content-title">首页</p>
        <p class="content-title">最后一条</p>
        <p class="content-title">首页</p>
        <p class="content-title">最后一条</p>
        <p class="content-title">首页</p>
        <p class="content-title">最后~条</p>
      </div>
    </div>
    <image-tabbar :idx="1"/>
  </div>
</template>

<script>
import ImageTabbar from 'common/tabbar/ImageTabbar'
import BScroll from 'better-scroll'
import HomeBanner from 'pages/function/components/banner/Banner'
import HomeIcons from 'pages/function/components/icons/Icons'
import HomeWaterlight from 'pages/function/components/waterlight/Waterlight'
export default {
  name: 'Function',
  components: {
    ImageTabbar,
    HomeBanner,
    HomeIcons,
    HomeWaterlight
  },
  data () {
    return {
      bgRed: true
    }
  },
  created () {
    // 解决在pc端无法滑动的问题
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted () {

  },
  methods: {
    _initScroll () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: false
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

  .content
    position relative
    left 0
    right 0
    top 1.28rem
    overflow hidden
    padding-bottom 1rem
    box-sizing border-box
    .content-title
      line-height 0.5rem

</style>
