
<template>

  <div class="main-content">
    <navigation-bar title="登录" :bgRed='true'/>
    <better-scroll class="content" ref="wrapper"
                   :listenScroll="true"
                   :pullUp="true"
                   :pullDown="true"
                   :data="arrList"
                   @pullingUp="pullingUp"
                   @setScroll="setScroll"
                   @pullingDown = "pullingDown"
                   @scroll="didScroll">
      <ul>
        <li  class="item border-bottom"
             v-for="(item,i) in arrList"
             :key="i"
             @click="back($router)"
        >{{item}}{{i}}</li>
      </ul>
    </better-scroll>
  </div>

</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      arrList: [
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据',
        '测试数据'
      ],
      scroll: null
    }
  },
  created () {
    this.$nextTick(() => {
    })
  },
  methods: {
    pullingUp (scroll) {
      this.scroll = scroll
      console.log('下拉到最底下')
      this.arrList.push('最后一条')
      this.setData()
    },
    setScroll (scroll) {
      this.scroll = scroll
      console.log('scroll创建成功')
    },
    didScroll (pos) {
      // console.log(pos)// 监听滚动坐标
    },
    pullingDown () {
      console.log('下拉刷新')
      // this.setData()
    },
    setData () {
      this.$nextTick(() => {
        this.pullingDownUp()
      })
      // this.$http.post(url)...{
      //   this.goods = data
      //   this.$nextTick(() => {
      //     this.pullingDownUp()
      //   })
      // }
    },
    pullingDownUp () {
      // 相应的状态重置
      this.scroll.finishPullDown()
      this.scroll.finishPullUp()
      // 重新计算元素高度
      this.scroll.refresh()
    }
    // back () {
    //   this.$router.back()
    // }
  },
  activated () {
  }
}
</script>

<style lang="stylus" scoped>
  .content
    position relative
    top 1.28rem
    left 0
    right 0
    bottom 0
    .item
      height 2rem
</style>

<!--<template>-->
<!--<div @click="back($router)">登录页面</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: 'Login'-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
