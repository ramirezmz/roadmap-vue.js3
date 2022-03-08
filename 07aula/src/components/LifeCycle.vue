<template>
   <h1>Testando Lifecycle: {{ nome }} </h1>
</template>
<script>
export default {
   name: 'LifeCycle',
   data() {
      return {
         nome: 'Helloooooooooo'
      }
   },
   created() {
      setTimeout(() => {
         this.nome = 'Pedrinho vendo Cleo e Cuquin'
      }, 1000)
   },
   mounted() {
      setTimeout(() => {
         this.nome = 'Pato'
      }, 2000)
   }
}
</script>