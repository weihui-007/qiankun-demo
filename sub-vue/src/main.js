import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.config.productionTip = false

// new Vue({
//   el: '#app',
//   router,
//   store,
//   render: h => h(App)
// })

// 声明一个变量，可以用于卸载
let instance = null
// 挂载到自己的html中，基座会拿到这个挂载后的html插入进去
function render() {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
// 判断是否是qiankun环境
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 子组件的协议，必须暴露三个函数
export async function bootstrap(props) {
  console.log('bootstrap函数：', props)
}
export async function mount(props) {
  console.log('mount函数：', props)
  render(props)
}
export async function unmount(props) {
  console.log('unmount函数：', props)
  instance.$destroy()
  instance = null
}
