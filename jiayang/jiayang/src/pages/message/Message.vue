<template>
    <div class="main-content">
      <navigation-bar title="消息列表" :bgRed='true'/>
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" ref="wrapper">
        <ul class="list-content">
          <router-link tag="li" class="list-item border-bottom" to="/home">消息列表</router-link>
          <li class="list-item border-bottom">消息列表</li>
          <li class="list-item border-bottom">消息列表</li>
          <li class="list-item border-bottom">消息列表</li>
          <li class="list-item border-bottom">消息列表</li>
          <li class="list-item border-bottom">消息列表12</li>
        </ul>
      </v-scroll>
      <image-tabbar/>
    </div>
</template>

<script>
import ImageTabbar from 'common/tabbar/ImageTabbar'
import BScroll from 'better-scroll'
import VScroll from 'common/refresh/Refresh'
export default {
  name: 'Message',
  data () {
    return {
      counter: 1, // 默认已经显示出15条数据 count等于一是让从16条开始加载
      num: 15, // 一次显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      downdata: [] // 上拉更多的数据存放数组
    }
  },
  components: {ImageTabbar, VScroll},
  mounted () {
    this.getList()
    // TypeError: Cannot read property '0' of undefined
    if (this.$refs.wrapper) {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  },
  methods: {
    getList () {
      alert('下拉加载')
    },
    onRefresh (done) {
      this.getList()
      done()
    },
    onInfinite (done) {
      alert('上拉加载')
      // let vm = this
      done()
      // 没有更多了隐藏
      // this.$el.querySelector('.load-more').style.display = 'none'
    }
  }
}
</script>

<style lang="stylus" scoped>
    .list-item
      line-height 3rem
      height 3rem

</style>
