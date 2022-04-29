<template>
   <div>
      <h1>{{pais}}</h1>
      <button @click="escolherPais">Escolher pais</button>
   </div>
</template>
<script>
export default{
   props: [ 'pais' ],
   setup(props, {emit}) {
      function escolherPais() {
         emit('pais', props.pais)
      }
      return {
         escolherPais,
      }
   }
}
</script>