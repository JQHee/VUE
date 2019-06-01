/* eslint-disable one-var */

export default {
/**
 * 时间戳格式化对应的日期格式
 */
  formatDate (now) {
    var year = now.getFullYear(),
      month = now.getMonth() + 1,
      date = now.getDate(),
      hour = now.getHours(),
      minute = now.getMinutes(),
      second = now.getSeconds()
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
  }
}
