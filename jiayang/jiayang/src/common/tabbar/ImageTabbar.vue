<template>
  <div class="footer border-top">
    <div v-for='(item,index) of items' :key="index" :class='[item.cls,{on:index === idx}]' @click="$router.push(item.push)">
      <img :src="index===idx?item.iconSelect:item.icon">
      <p :class="['colorChange',{on:index===idx}]" >{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    idx: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      items: [{
        cls: 'message',
        name: '消息',
        push: '/Message',
        icon: require('../../assets/tabbar/tabbar_message_n.png'),
        iconSelect: require('../../assets/tabbar/tabbar_message_h_b.png')
      },
      {
        cls: 'Function',
        name: '首页',
        push: '/function',
        icon: require('../../assets/tabbar/tabbar_function_n.png'),
        iconSelect: require('../../assets/tabbar/tabbar_function_h_b.png')
      },
      {
        cla: 'customerservice',
        name: '客服',
        push: '/CustomerService',
        icon: require('../../assets/tabbar/tabbar_customerservice_n.png'),
        iconSelect: require('../../assets/tabbar/tabbar_customerservice_h_b.png')
      },
      {
        cla: 'mine',
        name: '我的',
        push: '/Mine',
        icon: require('../../assets/tabbar/tabbar_mine_n.png'),
        iconSelect: require('../../assets/tabbar/tabbar_mine_h_b.png')
      }]
    }
  }
}
</script>

<style lang="css" scoped>
  .footer{
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    height: 1rem;
    width: 100%;
    background-color: white;
  }
  div{
    flex: 1;
    font-size: 0.3rem;
    padding: 0.06rem 0rem;
    box-sizing: border-box;
  }
  div img{
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    margin: 0 auto;
  }
  div p{
    color:black;
    text-align: center;
    margin-top: 0.04rem;
  }
  .on{
    color: #91cce9;
  }
</style>
