let defaultCity = '南宁'
// 有些浏览器不兼容localStorage，防止崩溃
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
