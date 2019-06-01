<template>

  <div class="home-content">
    <navigation-bar title="首页" :bgRed='true'/>
    <div class="content">
      <tab></tab>
      <!-- 中间 -->
      <swiper :options="swiperOption"
              ref="swiper-wrapper"
              id="swiper-container"
              @slideChangeTransitionEnd="end">
        <swiper-slide v-for="(news, index) in newsList" :key="index">
          <div>{{news.title}}</div>
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script>
import Tab from './components/Tab'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {Tab},
  data () {
    return {
      swiperOption: {
        autoplay: false,
        observer: true,
        observerParents: true
      }
    }
  },
  created () {
    this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
  },
  methods: {
    async end () {
      this.$store.state.home.newsIndex = this.swiper.activeIndex
      this.$store.state.home.newsPrevIndex = this.swiper.previousIndex
      await this.$store.dispatch('getHomeList', this.newsList[this.homeNewsIndex])
    }
  },
  computed: {
    swiper () {
      return this.$refs['swiper-wrapper'].swiper
    },
    ...mapGetters([
      'newsList',
      'homeNewsIndex'
    ])
  },
  watch: {
    homeNewsIndex () {
      this.swiper.slideTo(this.homeNewsIndex)
    }
  },
  activated () {
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
    #swiper-container
      width: 100%;
      height: 100%;
      .swiper-box {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
      }
</style>
