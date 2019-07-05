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
