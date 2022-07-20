<template>
  <div>
    <TheHeader v-show="showHeader" />

    <div v-if="showInfo">
      Teu nome: {{ name }} <br>
      Teu email: {{ email }}
    </div>
    <div v-if="accessLevel === 'admin'">Usuário admin</div>
    <div v-else-if="accessLevel === 'marketing'">Usuário marketing</div>
    <div v-else>Usuário normal</div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data() {
    return {
      showHeader: true,
      name: 'Robertopaolo',
      email: 'roberto@test.com',
      showInfo: false,
      accessLevel: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
