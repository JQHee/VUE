<template>
  <div class="content">
    <ul>
      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">我的物流</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">我的课程</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">我的账户</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">我的加盟</span>
        </div>
        <div class="item-right"></div>
      </li>

    </ul>
    <div class="line"></div>
    <ul>
      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">商城中心</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">分销商中心</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">清除缓存</span>
        </div>
        <div class="item-right"></div>
      </li>

      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">使用帮助</span>
        </div>
        <div class="item-right"></div>
      </li>
    </ul>
    <div class="line"></div>
    <ul>
      <li class="item border-bottom">
        <div class="item-left">
          <span class="item-logistics-img"></span>
          <span class="item-title">设置</span>
        </div>
        <div class="item-right"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MineList'
}
</script>

<style lang="stylus" scoped>
  .content
    position relative
    left 0
    right 0
    top 0
    .line
      background-color #f0f0f0
      height .2rem
    .item
      line-height 1rem
      height 1rem
      display flex
      justify-content space-between
      align-items center
      background-color white
      .item-left
        flex 1
        display flex
        align-items center
        .item-logistics-img
          display inline-block
          width .6rem
          height .66rem
          margin-left .3rem
          margin-right .2rem
          background url("../../../../assets/mine/mine_logistics@3x.png") no-repeat
          background-size contain
        .item-title
          flex 1
          color #333
      .item-right
        width .66rem
        height .6rem
        background-color rebeccapurple
        background url("../../../../assets/common/Cell_Arrow_Single_Right@2x.png")
        background-size contain
</style>
