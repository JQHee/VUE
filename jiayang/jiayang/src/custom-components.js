import Alert from 'common/dialog/index'
import NavigationBar from 'common/navigationbar/NavigationBar'
import BetterScroll from 'common/better-scroll/better-scroll'

const install = Vue => {
  // 全局导入导航条
  Vue.component('NavigationBar', NavigationBar)
  Vue.component('BetterScroll', BetterScroll)

  Vue.prototype.$alert = Alert
}

export default install

/* element-ui 组件导入
import
{
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
} from 'element-ui'
let variable = {
  Button,
  Select,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Loading,
  Rate
}
for (let item in variable) {
  if (variable.hasOwnProperty(item)) {
    Vue.use(variable[item])
  }
}
*/
