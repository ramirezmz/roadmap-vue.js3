<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/sobre">Sobre</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  setup(){
 
    return {}
  }
}
</script>
<style>

</style>