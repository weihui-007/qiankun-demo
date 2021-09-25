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
function render(props = {}) {
  const { container } = props

  // 用于子应用内部路由跳转逻辑处理，加上前缀
  // if (window.__POWERED_BY_QIANKUN__) {
  //   router.beforeEach((to, from, next) => {
  //     console.log('tototo:', to, props, props.base)
  //     if (!to.path.includes('/subvue') && window.appName === 'subvue') {
  //       console.log('改了', to)
  //       next({
  //         path: '/subvue' + to.path,
  //         query: to.query
  //       })
  //     } else {
  //       console.log('不改', to)
  //       next()
  //     }
  //   })
  // }

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// // webpack打包公共文件路径
// if (window.__POWERED_BY_QIANKUN__) {
//   __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
// }

// 独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 子组件的协议，必须暴露三个函数
export async function bootstrap(props) {
  console.log('bootstrap函数：', props)
}
export async function mount(props) {
  console.log('mount函数：', props)
  // window.appName = 'subvue'
  render(props)
}
export async function unmount(props) {
  console.log('unmount函数：', props)
  instance.$destroy()
  instance = null
}