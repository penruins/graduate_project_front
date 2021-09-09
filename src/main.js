import Vue from 'vue'
import './plugins/axios'
import App from './App2.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import "mavon-editor/dist/css/index.css"
import  store from './store'

import VueMarkdown from 'vue-markdown'


import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.component('vue-simplemde', VueSimplemde)
Vue.component('VueMarkdown', VueMarkdown)

import VueShowdown from 'vue-showdown'

// Vue.use() 的第二个参数是可选的
Vue.use(VueShowdown, {
  // 设置 showdown 默认 flavor
  flavor: 'github',
  // 设置 showdown 默认 options （会覆盖上面 flavor 的 options）
  options: {
    emoji: false,
  },
})


Vue.use(mavonEditor)

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    if(store.state.user.username) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}

      })
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

