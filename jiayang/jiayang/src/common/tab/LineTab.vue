<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
/**
* 底部带横线的tab
*/
export default {
  name: 'LineTab'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 0.88rem
    line-height: 0.88rem
    font-size: 0.36rem
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 0.1rem
        color: #333
      &.router-link-active
        .tab-link
          color: orange
          border-bottom: 0.04rem solid orange
</style>
