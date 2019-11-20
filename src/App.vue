<template>
  <div id="app">
    <keyboard></keyboard>
  </div>
</template>

<script>
import Keyboard from "./vue-keyboard/compoents/Keyboard";

export default {
  name: 'app',
  components: {
    Keyboard,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
