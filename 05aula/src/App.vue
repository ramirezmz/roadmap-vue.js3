<template>
  <div>
    <PrimeiroComponente />
    <h1>Hola mundo</h1> 
  </div>
</template>
<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue"

export default {
  name: 'App',
  components: {
    PrimeiroComponente
}
}
</script>