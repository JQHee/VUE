import Vue from 'vue'
import AlertComponent from './index.vue'

const merge = ($data, option) => {
  for (let prop in option) {
    if ($data.hasOwnProperty(prop)) {
      $data[prop] = option[[prop]]
    }
  }
}

// extend 是构造一个组件的语法器.传入参数，返回一个组件
// 1.创建构造器
let AlertConstructor = Vue.extend(AlertComponent)

const Alert = (option = {}) => {
  let initComponent = new AlertConstructor()
  if (document.querySelector('.alert-mask')) {
    return
  }
  // 2.创建 AlertConstructor 实例，并挂载到一个元素上。
  initComponent.$mount()
  if (typeof option !== 'object') {
    initComponent.content = option
  } else {
    merge(initComponent.$data, option)
  }
  return new Promise((resolve, reject) => {
    initComponent.success = () => {
      initComponent.show = false
      resolve()
    }
    document.querySelector(option.container || 'body').appendChild(initComponent.$el)
  })
}

export default Alert
