<template>
  <svg class="icon" aria-hidden="true" :style="styleObj">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>

<script>
import './iconfont.js'
export default {
  name:  'Icon',

  props: {
    name: String,
    styleObj: String
  },

  computed: {
    iconClass() {
      return `#icon-${this.name}`
    }
  },

  mounted() {
    console.log(this.styleObj)
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>