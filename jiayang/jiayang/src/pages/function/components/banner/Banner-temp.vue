<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipe-img" :src="item.imgUrl" alt="佳央" >
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      // swiper版本 2.6.7
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 8000,
        paginationClickable: true,
        autoplayDisableOnInteraction: false,
        observer: true,
        observeParents: true,
        paginationType: 'custom',
        paginationCustomRender: function (swiper, current, total) {
          var _html = ''
          for (var i = 1; i <= total; i++) {
            if (current === i) {
              _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
            } else {
              _html += '<span class="swiper-pagination-customs"></span>'
            }
          }
          return _html
        }
      },
      list: [
        {
          id: '0001',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/09/wfUPg8HNE1L1HpNld88PdIehplJUnG.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://img.gjfenxiao.com/images/15/2018/08/C4TR777QQi46rH67767TTm7tsh7c42.jpg'
        }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }

}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-custom {
    bottom: 10px;
    width: 100%;
  }

  .wrapper >>> .swiper-pagination-customs {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    background: #000;
    opacity: .5;
    margin: 0 5px;
  }

  .wrapper >>> .swiper-pagination-customs-active {
    opacity: 1;
    background-color: red;
  }
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 33.33%
    background-color: #eee
    .swipe-img
      width: 100%
    .swiper-pagination // 设置指示器的位置
      text-align right
      padding-right 0.2rem
      box-sizing border-box
</style>
