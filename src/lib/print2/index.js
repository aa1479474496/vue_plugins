import print2 from './Print2.vue'

const print2Plugin = {
  install(Vue, options) {
    Vue.component(print2.name, print2)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(print2Plugin)
}

export default print2Plugin