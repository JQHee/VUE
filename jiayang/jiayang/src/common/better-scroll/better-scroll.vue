<template>
  <div ref="wrapper">
    <slot></slot><!--分发内容-->
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'// 引入better-scroll

// 详细参数可以了解better-scroll的文档
export default {
  props: {
    probeType: {// probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
      type: Number,
      default: 3
    },
    click: {// better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
      type: Boolean,
      default: false
    },
    listenScroll: {// 是否监听scroll事件，如果为true，需在父组件中加入对应监听的方法名，对应methods中emit提交
      type: Boolean,
      default: false
    },
    data: {}, // 传入数据，注意没有对类型做限制，未设置默认值
    pullUp: {}, // 上拉加载更多，传入非false值为开启上拉加载，false为不开启
    pullDown: {}, // 下拉加载更多，传入非false值为开启上拉加载，false为不开启
    refreshDelay: {// 数据刷新延迟时间
      type: Number,
      default: 20
    },
    swipeBounceTime: {// 设置当运行 momentum 动画时，超过边缘后的回弹整个动画时间。
      type: Number,
      default: 800
    },
    momentumLimitTime: {// 在屏幕上快速滑动的时间小于 momentumLimitTime，才能开启 momentum 动画。
      type: Number,
      default: 200
    },
    bounceTime: {// 设置回弹动画的动画时长。
      type: Number,
      default: 600
    },
    startY: {// 纵轴方向初始化位置
      type: Number,
      default: 0
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted () {
    // setTimeout(() => {
    //   this._initScroll()
    // }, 20)
  },
  methods: {
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        swipeBounceTime: this.swipeBounceTime,
        bounceTime: this.bounceTime,
        momentumLimitTime: this.momentumLimitTime,
        scrollY: true,
        scrollX: true,
        startY: this.startY,
        // pullUpLoad: this.pullup,
        pullDownRefresh: {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        }
      })
      this.$emit('setScroll', this.scroll)
      if (this.listenScroll) {
        let me = this
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos)
        })
      }
      // 上拉刷新
      if (this.pullUp) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp', this.scroll)
        })
      }
      // 上拉刷新
      if (this.pullDown) {
        this.scroll.on('pullingDown', () => {
          this.$emit('pullingDown')
        })
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () { // 滚动到指定位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () { // 滚动到指定的目标元素。
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/less">

</style>
