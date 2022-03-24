<template>
  <div>
    <PrimeiroComponente />
    <h1>Hola mundo</h1> 
    <LifeCycle />
    <TemplateSyntax />
    <WithSetup />
  </div>
</template>
<script>
import PrimeiroComponente from "./components/PrimeiroComponente.vue"
import LifeCycle from "./components/LifeCycle.vue"
import TemplateSyntax from "./components/TemplateSyntax.vue"
import WithSetup from "./components/WithSetup.vue"

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    TemplateSyntax,
    WithSetup
  },
}
</script>