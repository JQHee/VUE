<template>
  <div class="home-topbar-wrapper border-bottom">
    <div class="top-menu-bar">
      <swiper :options="swiperOption" ref="swiper-box">
        <swiper-slide v-for="(news, index) in newsList"
                      :class="{'active': homeNewsIndex === index}"
                      @click.native="active(index)"
                      :key="index"
        >{{news.title}}</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Tab',
  data () {
    return {
      swiperOption: {
        slidesPerView: 6
      }
    }
  },
  methods: {
    async active (index) {
      this.$store.state.home.newsIndex = index
      await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
    }
  },
  computed: {
    ...mapGetters([
      'newsList',
      'homeNewsIndex'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  .home-topbar-wrapper
    height: 0.8rem;
    line-height: 0.8rem;
    color: #333;
    font-size: 0.32rem;
    text-align: center;
    position: relative;
    background: #f4f5f6;
    .active {
      color: red;
    }
    .top-menu-bar {
      width: 100%;
      position: absolute;
    }
    .top-bar-active-active {
      top: 0.1rem;
    }
</style>
