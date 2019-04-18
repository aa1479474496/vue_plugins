<template>
  <transition name="zz-message-fade">
    <div 
      :class="[
      'zz-message',
      type && !iconClass ? `zz-message--${ type }` : '',
      center ? 'is-center' : ''
      ]" 
      v-show="visible">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 30000,
      timer: null,
      closed: false,
      type: 'success',
      iconClass: ''
    };
  },
  mounted() {
    console.log("mounted");
    this.startTimer();
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    }
  }
};
</script>



