<template>
  <div class="wrapper">
    <div style="width:70%; margin:20px auto; height:.80rem">
      <!-- 配置slider组件 -->
      <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'>
        <!-- 设置loading,可自定义 -->
        <slideritem v-for="(item,index) in pages" :key="index" :style="item.style">{{item.html}}</slideritem>
        <!--<div slot="loading">loading...</div>-->
      </slider>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
export default {
  name: 'Waterlight',
  components: {
    slider,
    slideritem
  },
  data () {
    return {
      list: ['第一条消息', '第二条消息', '第三条消息', '第四条消息'],
      options: {
        currentPage: 0, // 当前页码
        thresholdDistance: 500, // 滑动判定距离
        thresholdTime: 300, // 滑动判定时间
        autoplay: 8000, // 自动滚动[ms]
        loop: true, // 是否循环滚动
        direction: 'vertical', // 滚动方向
        infinite: 1, // 无限滚动前后遍历数
        slidesToScroll: 1, // 滚动行数
        timingFunction: 'ease',
        duration: 300
      }
    }
  },
  computed: {
    pages () {
      const tempPages = []
      for (let i = 0; i < this.list.length; i++) {
        tempPages.push({
          html: this.list[i],
          style: {
            'font-size': '18px',
            'color': 'black',
            'height': '30px',
            'margin': '10px',
            'width': '100%'
          }
        })
      }
      return tempPages
    }
  },
  methods: {
    // Listener event
    slide (data) {
      // console.log(data)
    },
    onTap (data) {
      console.log(this.list[data.currentPage])
    },
    onInit (data) {
      // console.log(data)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container-vertical .slider-pagination-bullets
    display: none

</style>
