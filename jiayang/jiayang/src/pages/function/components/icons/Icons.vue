<template>

  <div class="icons" v-if="showIcon">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-image-wrapper">
            <img class="icon-image-content" :src="item.imgUrl">
          </div>
          <p class="icon-des">{{ item.desc }}</p>
        </div>
      </swiper-slide>
      <!--<div class="swiper-pagination"  slot="pagination"></div>-->
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'Icons',
  props: {
    // list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: false,
        autoplay: false
      },
      list: [
        {
          id: '001',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '农村电商学院'
        },
        {
          id: '002',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '电商服务中心'
        },
        {
          id: '003',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '赶街服务站'
        },
        {
          id: '004',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '贤婿物流'
        },
        {
          id: '005',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '佳央商城'
        },
        {
          id: '006',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/07/f7iK8K7Ep1KKKA23zho16te6jt23Ea.png',
          desc: '乡村农旅'
        }]
    }
  },
  // 计算属性
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 6)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcon () {
      if (!this.list) {
        return 0
      }
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/index.styl"
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons >>> .swiper-pagination-bullet-active
    background: $themecolor
  .icons
    margin-top .1rem
  .icon
    overflow: hidden
    width: 33.33%
    float: left
    height: 0
    padding-bottom: 25.0%
    position: relative
    .icon-image-wrapper
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: .52rem
      box-sizing: border-box
      padding-top: .2rem
      .icon-image-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-des
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .42rem
      color: #333
      height: .44rem
      text-align: center
      ellipsis()
</style>
