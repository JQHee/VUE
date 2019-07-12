#### 一、环境搭建
##### 1、brew安装
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew -v
```

##### 2、nodejs安装
```
brew install nodejs
node -v
```

##### 3、npm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install webpack -g
cnpm install vue-cli -g
```

##### 4、新建工程
```
vue init webpack 项目名称
cnpm install
// 路由和网络模块
cnpm install vue-router vue-resource --save
cnpm run dev
```

#### 二、实战项目
- 喵喵电影：https://m.bilibili.com/video/av47535390.html?share_source=qq&p=1&ts=1561763243&share_medium=iphone&bbid=946d569a44c01d741aae8df6da3e6533
- 喵喵电影项目源码：https://github.com/zerogawdr/miaomiaoMovie
- 电商项目：https://github.com/qiuChengleiy/shop-vue
- mpvue仿美团小程序: https://www.jianshu.com/p/213db2c5cffc
- vue搭建小游戏：https://juejin.im/post/5d22b3ade51d4577770e73f1

#### 三、UI组件
手机端
- vant：https://github.com/youzan/vant
- 手机端Vux: https://github.com/airyland/vux
- 面向金融场景的Vue移动端UI组件库: https://github.com/didi/mand-mobile
- 移动端UI组件, material-design的风格:https://github.com/vuematerial/vue-material
- 基于 Vue.js 实现的精致移动端组件库, 由滴滴内部组件库精简提炼而来： https://didi.github.io/cube-ui/#/zh-CN
- 手机端：https://github.com/JosephusPaye/Keen-UI

BS端
- element：https://element.eleme.cn/#/zh-CN/component/installation
- iview：https://github.com/iview/iview

#### 四、登录拦截
- https://www.jianshu.com/p/5d7e9181fc70
