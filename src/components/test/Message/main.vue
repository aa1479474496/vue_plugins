<template>
  <div class="zz-message" v-show="visible">{{message}}</div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 1000,
      timer: null,
      closed: false
    }
  },
  mounted() {
    console.log('mounted')
    this.startTimer()
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false
      }
    }
  },
  methods: {
    close() {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close()
        }, this.duration)
      }
    }
  }
};
</script>

