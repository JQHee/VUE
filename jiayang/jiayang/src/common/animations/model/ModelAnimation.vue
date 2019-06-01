<template>
  <transition name="slideup">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'ModelAnimation'
}
</script>

<style lang="stylus" scoped>
  .slideup-enter-active{
    animation-name: slideInUp;
    animation-duration: .2s;
    animation-fill-mode: both
  }
  .slideup-leave-active {
    animation-name: slideOutDown;
    animation-duration: .5s;
    animation-fill-mode: both
  }
  @keyframes slideInUp {
    0% {
      transform: translate3d(0,100%,0);
      visibility: visible
    }

    to {
      transform: translateZ(0)
    }
  }
  @keyframes slideOutDown {
    0% {
      transform: translateZ(0)
    }

    to {
      visibility: hidden;
      transform: translate3d(0,100%,0)
    }
  }
</style>
