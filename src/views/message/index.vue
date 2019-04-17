<template>
  <div>
    message -index
    <div class="button button1" @click="open">button1</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    open() {
      console.log('open')
      this.$message({
        message: 'open message',
        onClose(el) {
          console.log('el:', el)
        }
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.button {
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;

  &1 {
    background: skyblue;
  }
  &-button2 {
    background: gold;
  }
}
</style>




