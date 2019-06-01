import Vue from 'vue'
import Router from 'vue-router'

// 主要模块
import Message from 'pages/message/Message'
import Function from 'pages/function/Function'
import CustomerService from 'pages/customerservice/CustomerService'
// import Mine from 'pages/mine/Mine'
import Login from 'pages/login/FxxLogin'
import StickFooter from 'pages/stickfooter/StickFooter'
import Home from 'pages/home/Home'
import CollectionView from 'pages/collectionview/CollectionView'

// 优化，路由的懒加载
// 针对的情况js文件已经过大（超过1M）
const Mine = resolve => require(['pages/mine/Mine'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/function'
    },
    {
      path: '/function',
      name: '功能首页',
      component: Function
    },
    {
      path: '/message',
      name: '消息列表',
      component: Message,
      meta: {
        login: false
      }
    },
    {
      path: '/customerservice',
      name: '客服',
      component: CustomerService
    },
    {
      path: '/mine',
      name: '我的',
      meta: {
        login: true
      },
      component: Mine
    },
    {
      path: '/login',
      name: '登录',
      component: Login,
      meta: {
        slide: 1
      }
    },
    {
      path: '/stickfooter',
      name: 'stickfooter',
      component: StickFooter,
      meta: {
        slide: 1
      }
    },
    {
      path: '/home',
      name: 'Home测试页面',
      component: Home
    },
    {
      path: '/collectionview',
      name: 'girlLayout',
      component: CollectionView
    }
  ],
  // vue-router 页面切换后保持在页面顶部而不是保持原先的滚动位置的办法
  // https://www.cnblogs.com/kugeliu/p/7172042.html
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
