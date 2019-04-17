import Vue from 'vue'
import Main from './main.vue'

let extendConstructor = Vue.extend(Main)

let instance = new extendConstructor({
  data: {
    message: 'test'
  }
})

console.log('instance', instance)