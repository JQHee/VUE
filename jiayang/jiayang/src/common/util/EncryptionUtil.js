/**
 * 加密工具类
 * 需要组件； js-md5
 */

import md5 from 'js-md5'

export default {
/**
 * md5加密
 */
  md5Encryption (content) {
    return md5(content)
  }
}
