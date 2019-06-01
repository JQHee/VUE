<template>
  <div class="fxx-login">
    <navigation-bar title="登录" :bgRed='true'></navigation-bar>
    <div class="login-main-content">
      <ul class="login-menu">
        <li class="login-menu-item"
            :class="{active: active === 'account-password'}"
            @click="menuClick('account-password')"
        >账号密码登录</li>
        <li class="login-menu-item"
            :class="{active: active === 'phone-code'}"
            @click="menuClick('phone-code')"
        >快捷免密登录</li>
      </ul>
      <div class="account-info">
        <div class="account-password" v-show="active === 'account-password'">
          <input class="account" type="text" placeholder="请输入账号" key="account"/>
          <input class="account" type="password" placeholder="请输入密码" key="password"/>
        </div>
        <div class="phone-code" v-show="active === 'phone-code'">
          <input class="phone" type="text" placeholder="请输入手机号" key="phone"/>
          <div class="code">
            <input class="code-input" type="text" placeholder="请输入验证码" key="code"/>
            <button class="login-code">获取验证码</button>
          </div>
        </div>
      </div>
      <div class="login-btn-wrapper">
        <button class="login-btn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FxxLogin',
  data () {
    return {
      active: 'account-password'
    }
  },
  methods: {
    menuClick (content) {
      this.active = content
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-main-content
    position relative
    left 0
    top 1.28rem
    right 0
    bottom 0
    .login-menu
      line-height 0.84rem
      height 0.84rem
      text-align center
      .login-menu-item
        width 50%
        float left
        line-height 0.80rem
        height 0.80rem
      .active
        border-bottom orange 2px solid
        color orange
    .account-info
      padding-left .4rem
      padding-right .4rem
      box-sizing border-box
      .account-password
        .account
          line-height .8rem
          height 0.8rem
          border #f0f0f0 1px solid
          margin-top .2rem
          padding .23rem .2rem
          width 100%
          border-radius .4rem
          box-sizing border-box
          font-size .32rem
      .phone-code
        .phone
          line-height .8rem
          height 0.8rem
          border #f0f0f0 1px solid
          margin-top .2rem
          padding .23rem .2rem
          width 100%
          border-radius .4rem
          box-sizing border-box
          font-size .32rem
        .code
          display flex
          flex-direction row
          justify-content  center
          .code-input
            line-height .8rem
            height 0.8rem
            border #f0f0f0 1px solid
            margin-top .2rem
            padding-left .2rem
            margin-right .2rem
            flex 1
            border-radius .4rem
            font-size .32rem
          .login-code
            margin-top .2rem
            line-height .8rem
            height 0.8rem
            padding 0 .2rem
            box-sizing border-box
            color white
            background-color orange
            border-radius .4rem
            -webkit-border-radius .4rem
            -moz-border-radius .4rem
            min-width 2rem
    .login-btn-wrapper
      padding-left .4rem
      padding-right .4rem
      box-sizing border-box
      .login-btn
        width 100%
        border none
        background-color orange
        color white
        font-size .32rem
        border-radius .5rem
        -webkit-border-radius .5rem
        -moz-border-radius .5rem
        margin-top .6rem
        line-height 1rem
        height 1rem
        box-sizing border-box

</style>
