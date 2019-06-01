import Vue from 'vue'
import App from './App'
import router from './router/permission'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import store from './store'
import VueLoading from 'common/loading'

// 导入基本css
import 'common/css/reset.css'
// 1像素分隔线的解决方案
import 'common/css/border.css'
// require styles
import 'swiper/dist/css/swiper.css'

// 全局组件
import customComponents from './custom-components.js'
Vue.use(customComponents)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLoading, {
  container: '.app'
})

// 返回
Vue.prototype.back = (route) => {
  route.animate = 2
  history.go(-1)
}

Vue.config.productionTip = false
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/* 说明一、解决移动端点击延迟300ms问题
* 使用组件：fastclick
 */

/**
 * 说明二、eslint 使用命令自动修复
 * package.json 添加--fix: 如 "lint": "eslint --fix --ext .js,.vue src"
 * 最后运行终端命令： npm run lint
 */

/**
 * 说明三、导入样式组件
 * 组件：stylus stylus-loader
 */

/**
 * 说明四、适配es6
 * 组件：babel-polyfill、babel-runtime
 */

/**
 * 说明五、图片的懒加载
 * 组件： vue-lazyload
 */

/**
 * 说明六、图片的懒加载
 * 组件：vue-lazyload
 */

/**
 * 说明七、 依赖less
 * 组件：less less-loader
 * 配置：
 * 修改webpack.config.js文件，配置loader加载依赖，让其支持外部的less,在原来的代码上添加
 {
 test: /\.less$/,
 loader: "style-loader!css-loader!less-loader",
 },
 */

/**
 * 说明八、滑动、轮播常用插件
 * 组件：vue-awesome-swiper 使用的是2.6.7的版本
 */

/**
 * 说明九、实现公告的上下滚动
 * 组件：vue-concise-slider
 */

/**
 * 说明十、使用iconfont
 * 来源： 阿里巴巴矢量图库 http://www.iconfont.cn/
 */

/**
 * 说明十一、上下拉刷新
 * 组件： mescroll
 */

/**
 * 说明十二、大数据高性能列表
 * 组件： vue-recyclerview
 * 图表组件：vue-chartjs
 * 树视图： vue-tree
 * 更多组件参考：https://m.imooc.com/mip/article/45209
 * 小米手机商城：https://github.com/spock504/Vueitem/tree/master/MiMall
 * 小米pc商城： https://github.com/wendaosanshou/mi-by-vue
 * https://github.com/kumabearplus/mi-vue/tree/master/src
 */

/**
 * 说明十三、加载指示器
 * 组件：vue-infinite-loading
 * 也可以参考网址： https://jkchao.github.io/vue-loading/
 */

/**
 * 说明十四、picker选择器
 * 组件：vue-picker
 */

/**
 * 说明十五、svg图库
 * 网址： http://www.sfont.cn/
 */

/**
 * 说明十六、瀑布流 gridlayout布局
 * 组件：vue-virtual-collection、vue-grid-layout
 *
 */

/**
 * 说明十七、很有意思的组件库
 * 组件：muse-ui、iView、element-ui
 * pc: element-ui
 * 移动端：mint-ui
 */

/**
 * 说明十八、右滑动返回上一页
 * 组件：vue-directive-touch
 */

/**
 * 说明十九、文字过多添加展开按钮
 * 地址：https://www.jianshu.com/p/09154ebf5f44
 */

 /**
 * 说明二十、仿淘宝的评论页面
 * 地址： https://www.jianshu.com/p/ea5195065283
 */
