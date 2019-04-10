<template>
  <div id="app">
    <div class="textarea">
      <TextareaVerticalMiddle/>
    </div>
  </div>
</template>

<script>
import TextareaVerticalMiddle from './components/TextareaVerticalMiddle.vue'

export default {
  name: 'app',
  components: {
    TextareaVerticalMiddle
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

.textarea {
  margin: 0 auto;
  padding: 16px;
  width: 300px;
  height: 200px;
  background-color: #ddd;
  border-radius: 10px;
}
</style>
