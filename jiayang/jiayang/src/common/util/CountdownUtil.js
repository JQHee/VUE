export const resend = element => {
  console.log(element)
  var num = 60
  var timer = setInterval(function () {
    num--
    element.innerHTML = num + '秒后重新获取'
    element.style.color = ' #ccc'
    element.disabled = ' disabled'
    if (num === 0) {
      element.disabled = ''
      element.style.color = ' #ffa600'
      element.innerHTML = '获取验证码'
      clearInterval(timer)
    }
  }, 1000)
}
