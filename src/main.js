import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/index.scss'

// import '@/assets/css/message.scss'
// import '@/components/test/Extend/main.js'

// import Message from '@/components/test/Message/main.js'
import Message from '@/components/test/Message/main.js'

Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
