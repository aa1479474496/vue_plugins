import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter)
const Home = () => import('@/views/home')
const Message = () => import('@/views/message')



export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/message',
      name: 'MessageViews',
      component: Message
    }
  ]
})


