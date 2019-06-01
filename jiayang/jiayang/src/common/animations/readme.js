/**
 * 动画使用的三种方式
 */

/**
 * 第一种、transition、transition-group
 */
/// 1.1 用法一 (说明：mode的值out-in in-out name不写则默认v, 如果有值则替换v)
/*
<transition name='fade'>html标签</transition>
样式：
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: opacity .5s
*/
/// 1.2 用法二 (直接指明选择器)
/*
<transition name='fade'
enter-active-class='active'
leave-active-class='active'
>html标签</transition>
*/

/**
 * 第二种、animation.css
 */
/// 2.1 用法一 (animated为必须)
/*
<transition name='fade'
enter-active-class='animated swing'
leave-active-class='animated shake'
>html标签</transition>
*/

/// 2.2 用法二 transition和animated同时使用 (animated为必须，并解决第一次加载动画不执行的问题)
/*
* 注意：关于同时使用两种动画，以哪个动画的时间为准
* 第一种：type='transition'
* 第二种：:duration='5000' 或 :duration='{enter: 5000, leave: 1000}'
*/
/*
<transition name='fade'
type='transition'
appear
enter-active-class='animated swing'
leave-active-class='animated shake'
appear-active-class='animated swing'
>html标签</transition>
*/

/**
 * 第三种、velocity.js
 */
/*
<transition name='fade'
@before-enter='handleBeforeEnter'
@enter='handleEnter'
@after-enter='handleAfterEnter'
>html标签</transition>
methods: {
  handleBeforeEnter(el) {
    el.style.opacity = 0
  },
  handleEnter(el, done) { // 一定要结束动画 complete: done
    Velocity(el, {
      opacity: 1
    },
    {
      duration: 1000,
      complete: done
     })
  },
  handleAfterEnter(el) {
    el.style.opacity = 0
  }
}
*/
