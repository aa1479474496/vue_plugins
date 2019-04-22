<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div v-repeat-click="increase">test v-repeat-click</div>
    <print1></print1>
    <icon name="error" styleObj="font-size: 24px;"/>
    <router-view></router-view>
  </div>
</template>

<script>
import RepeatClick from "@/directives/repeat-click.js"
import Vue from "vue"
export default {
  name: "app",
  directives: {
    repeatClick: RepeatClick
  },
  components: {
    // SelfMessage
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      Success: 'info',
    };
  },
  mounted() {
    this.$nextTick(() => {
      // console.log('server', Vue.prototype);
      // console.log('this', this);
      // console.log('__proto__', this.__proto__);
      // console.log('vue :::', Vue);
    });
  },
  methods: {
    increase() {
      console.log("increase");
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.flex {
  display: flex;
}
/* .button {
  width: 300px;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}
.button1 {
  background: skyblue;
}
.button2 {
  background: gold;
} */
</style>
