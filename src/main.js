import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.scss'

// import 'at.alicdn.com/t/font_1147568_d7tkkrli8h4.js'

// import '@/assets/css/message.scss'
// import '@/components/test/Extend/main.js'

// import Message from '@/components/test/Message/main.js'
import Message from '@/components/test/Message/main.js'

import print1 from '@/lib/print1'
Vue.use(print1)

import Icon from '@/components/test/Icon'
Vue.use(Icon)

Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
