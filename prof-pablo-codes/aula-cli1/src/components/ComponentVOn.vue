<template>
   <div>
      <h1>Testando v-on</h1>
      <input v-model="nome" type="text" />
      {{nome}}
      <button @click="showName()">Clique Aqui</button>
      <button @mouseup="showName">Clique AUU</button>
      <button @dblclick="showName()">Clique AUU</button>
      <button @mousemove="showName()">Passar mouse por cima</button>
      <button @mouseout="showName()">TIrar o mouse de cima</button>
      <br/>
      <input type="text" @keyup="showName" /><br/>
   </div>
</template>
<script>
import {ref} from 'vue';

export default{
   setup() {
      const nome = ref('')
   
      function showName() {
         alert("Olá " + nome.value)
      }

   return {
      nome,
      showName
      }
   }
}
</script>