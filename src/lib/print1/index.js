import print1 from './Print1.vue'

const print1Plugin = {
  install(Vue, options) {
    Vue.component(print1.name, print1)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(print1Plugin)
}

export default print1Plugin