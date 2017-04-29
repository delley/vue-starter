<template>
  <div class="hello">
    <h1 :title="msg">{{ msg }}</h1>
  </div>
</template>

<style>

</style>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Bem vindo a sua primeira app com "Vue.js"'
      }
    }
  }
</script>
