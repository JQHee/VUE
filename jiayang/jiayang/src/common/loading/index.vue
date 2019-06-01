<template>
 <div class="mask" v-if="isShow">
   <img class='icon-img' src="./loading.png"/>
 </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  name: 'Loading',
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .mask
    position fixed
    z-index 900
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.5)
    .icon-img
      width 1rem
      height 1rem
      position absolute
      left 50%
      top 50%
      margin-top -0.5rem
      margin-left -0.5rem
      animation circle 0.8s infinite

  @keyframes circle {
    from {
      transform rotate(0)
    }
    to {
      transform rotate(360deg)
    }
  }
  /*无限旋转动画*/
  /*@keyframes circle{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }*/

</style>
