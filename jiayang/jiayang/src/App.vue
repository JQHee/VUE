<template>
  <div id="app" >
    <transition :name="animate" mode="">
      <keep-alive>
        <router-view class="router-view"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
// import {Constants, HttpUtil} from 'common/http'
// import Login from 'pages/login/Login'
// import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      animate: ''
    }
  },
  mounted () {
  },
  computed: {
  },
  watch: {
    $route (to, from) {
      /*
      0: 不做动画
      1: 左切换
      2: 右切换
      3: 上切换
      4: 下切换
       */
      let animate = this.$router.animate || to.meta.slide
      if (!animate) {
        this.animate = ''
      } else {
        this.animate = animate === 1 ? 'slide-left'
          : animate === 2 ? 'slide-right'
            : animate === 3 ? 'slide-top'
              : animate === 4 ? 'slide-bottom' : ''
      }
      this.$router.animate = 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 如果不使用absolute转场动画会出现白屏
  // vue 过渡动画抖动问题处理 https://blog.csdn.net/qq_25610161/article/details/81940863
  .router-view {
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all .3s;
    position: position;
    width:100%;
    left:0;
    top 0
    height 100%
  }
  .slide-right-enter {
    transform: translateX(-100%);
  }
  .slide-right-leave-active {
    transform: translateX(100%);
  }

  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-leave-active {
    transform: translateX(-100%);
  }
</style>
