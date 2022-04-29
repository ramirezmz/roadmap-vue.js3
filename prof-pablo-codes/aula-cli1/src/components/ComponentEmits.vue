<template>
   <div>
      <div v-for="(pais, index) in paises" :key="index">
      <Pais :pais="pais" @pais="setaPais($event)"/>
      </div>
      <h1 style="color: red;">{{paisEscolhido}}</h1>
   </div>
</template>
<script>
import Pais from './Pais.vue'
import { ref } from 'vue'
export default {
   components: {
      Pais
   },
   setup() {
      const paises = ['Brasil', 'Angola', 'Cabo verde', 'Alemanha', 'Argentina']

      const paisEscolhido = ref('')

      function setaPais(e) {
         paisEscolhido.value = e
      }

      return {
         paises,
         setaPais,
         paisEscolhido
      }
   }
}
</script>