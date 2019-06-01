/*
* function: 发送http request
* 依赖组件: axios
* 依赖组件：promiss
* 适配promiss的组件： babel-polyfill 在总入口文件导入（index.js）
* */

import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

/**
 * 检查当前返回的状态码
 * @param response
 * @return {*}
 */
function checkStatus (response) {
  NProgress.done()
  if (response.status === 200 || response.status === 304) {
    return response
  }
  return {
    data: {
      code: -404,
      message: response.statusText,
      data: response.statusText
    }
  }
}

function checkCode (res) {
  if (res.data.code !== 200) {
    alert(res.data.message)
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(checkStatus).then(checkCode)
  },
  get (url, params) {
    return axios({
      method: 'get',
      url,
      params,
      timeout: 30000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(checkStatus).then(checkCode)
  }
}

/**
 * 使用实例
 *
 import api from '../api.js' // 改成对应的路径
 export default {
  async mounted() {
    // await实现同步请求
    const { data: { code, data }} = await api.post('/api/comment/post', {title: 'title'})
    if (code === 200) {
        console.log(data)
    }
    const { data: { code, data }} = await api.get('/api/comment/get', {page: 1})
    if (code === 200) {
        console.log(data)
    }
  }
}
 */
