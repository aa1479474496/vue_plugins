<template>
  <transition name="zz-message-fade">
    <div 
      :class="[
      'zz-message',
      type && !iconClass ? `zz-message--${ type }` : '',
      center ? 'is-center' : ''
      ]" 
      v-show="visible">
      <i :class="iconClass" v-if="iconClass"></i>
      <icon :name="typeClass" v-else/>
      <slot>
        <p>
          {{message}}
        </p>
      </slot>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}
export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      timer: null,
      closed: false,
      type: 'success',
      iconClass: ''
    };
  },

  computed: {
    typeClass() {
      return this.type && !this.iconClass
        ? `${typeMap[this.type]}`
        : ''
    }
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



