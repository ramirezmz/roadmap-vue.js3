<template>
   <div>
      <h1>Hola Vue</h1>
      <p>Meu nome é <strong>{{nome}}</strong> e trabalho com <strong>{{profissao}}</strong></p>
   </div>
</template>
<script>
export default {
   name: 'PrimeiroComponente',
   data() {
      return {
         nome: "Robertopaolo",
         profissao: "Programador"
      }
   }
}
</script>