<template>
  <div class="collection-wrapper">
    <navigation-bar title="CollectionView" :bgRed='true'/>
    <div class="content">
      <!--模块2热门银行-->
      <div class="hot-bank">
        <div class="hot-bank-title border-bottom">
          热门银行
        </div>
        <div class="item-box">
          <div class="item" v-for="n in 10" :key="n">
            <div class="item-wrapper">
              <div class="icon-box">
                <img src="assets/mine/mine_logistics@2x.png">
              </div>
              <div class="name">北京银行</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionView'
}
</script>

<style lang="stylus" scoped>
  .content
    position relative
    left 0
    top 1.28rem
    right 0
    bottom 0
    .hot-bank .hot-bank-title {
      line-height .80rem
      height 0.80rem
      padding-left .2rem
      box-sizing border-box
      margin-bottom .2rem
    }
    .hot-bank .item{
      width: 25%;
      height: 1.8rem;
      display: inline-block;
      margin-bottom: .1rem;
      overflow: hidden;
      position: relative;
      text-align: center;
    }
    .item .item-wrapper {
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      margin-left .1rem
      margin-right .1rem
      border #f0f0f0 .5px solid
      box-sizing border-box
    }
    .item-wrapper .icon-box{
      position: relative;
      top .1rem
      height: 1.2rem;
      width: 1.2rem;
      margin: 0 auto;
    }
    .item .icon-box img{
      display block
      width: 100%;
      height: 100%;
    }
    .item .name{
      position: absolute;
      bottom 0
      left 0
      right 0
      height: .42rem;
      line-height: .42rem;
      font-size: .24rem;
    }
    .hot-bank .item-box{
      border-bottom: 0.5px solid lightgrey;
    }

</style>
