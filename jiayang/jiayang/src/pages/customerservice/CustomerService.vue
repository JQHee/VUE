<template>
    <div class="cs-content">
      <navigation-bar title="客服" :bgRed='true'/>
      <div class="content">
        <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="targetURL"></iframe>
      </div>
      <image-tabbar :idx="2"/>
    </div>
</template>

<script>
import ImageTabbar from 'common/tabbar/ImageTabbar'
export default {
  name: 'CustomerService',
  data () {
    return {
      targetURL: 'https://www.baidu.com'
    }
  },
  components: {ImageTabbar},
  mounted () {
    this.init()
    const oIframe = document.getElementById('show-iframe')
    oIframe.setAttribute('width', '100%')
    oIframe.setAttribute('height', '100%')
  },
  activated () {
    // this.init()
  },
  methods: {
    init () {
      this.$nextTick(function () {
        // window.location.href = this.targetURL
        // this.$refs.browser.href = this.targetURL
      })
    }
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
    box-sizing border-box

</style>
