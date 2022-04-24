<template>
   <div>
      <p v-for="pais in paises" :key="pais.id" >
         {{pais.nome}}
      </p>
      
   </div>
</template>
<script>
import { reactive } from "vue"
export default {
   setup() {
      const objetos = reactive({
         paises: [
            {id: 1, nome: "Angola"},
            {id: 2, nome: "Brasil"},
            {id: 3, nome: "Cabo Verde"},
            {id: 4, nome: "Portugal"},
         ]
      })
      return {
         ...objetos
      }
   }
}
</script>