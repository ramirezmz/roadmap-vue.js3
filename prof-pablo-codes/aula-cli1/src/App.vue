<template>
  <div>
    <h1>Olá</h1>
    <ComponentEmits />
  </div>
</template>

<script>
import ComponentEmits from "./components/ComponentEmits.vue";

export default {
  name: 'App',
  components: {
    ComponentEmits
},
  setup(){
    const message = "Robertopaolo está praticando Vue"
    const isMostrarMessagem = true
    
    return {
    message,
    isMostrarMessagem
    }
  }
}
</script>
<style>

</style>