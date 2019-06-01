/**
 * 正则
 */

export default {

  /* 方法名：isTel
  *  参数：t (需要验证的手机号码)
  *  说明：返回结果为true或false
  */
  isTel (t) {
    var reg = /^[1](([38][0-9])|([4][579])|([5][0-35-9])|([6]{2})|([7][0135-8])|([9][8|9]))[0-9]{8}$/
    var text = reg.test(t)
    return text
  },
  /*
  * 方法名：isMail
  * 参数  ： t(需要验证的邮箱)
  * 结果  ： 返回值为验证结果，true/false
  */
  isMail (t) {
    var reg = /^[0-9a-zA-Z._-]+@[a-zA-Z0-9]{2,}.((com)|(cn))$/
    var text = reg.test(t)
    return text
  }

}
