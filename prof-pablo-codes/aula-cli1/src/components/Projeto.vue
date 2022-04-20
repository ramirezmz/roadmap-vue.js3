<template>
   <div>
      <input v-model="nome" name="nome" type="text" />
      {{nome}}
   </div>
</template>

<script>
import { ref } from 'vue'
export default {
   setup () {  
      const nome = ref('')

      return {nome}
   }
}
</script>