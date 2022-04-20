<template>
   <div>
      <h1>Hellooo novo componente {{ value }}</h1>
      <button @click="value = 8">acrescentando +8</button>
      <keep-alive v-if="true">
         <component :is="componente"></component>
      </keep-alive>
   </div>
</template>
<script>
import {ref,
   onBeforeMount,
   onMounted,
   onBeforeUpdate,
   onUpdated,
   onBeforeUnmount,
   onUnmounted,
   defineAsyncComponent } from "vue"

export default {
   setup() {
   const value = ref(0)
   const componente = defineAsyncComponent(() => import('./PerfilComponent.vue'))


   onBeforeMount(() => {
      console.log("Antes de ser montado")
   })
   onMounted(() => {
      console.log("Montado");
   })
   onBeforeUpdate(() => {
      console.log("Antes de atualizar");
   })
   onUpdated(() => {
      console.log("Atualizado");
   })
   onBeforeUnmount(() =>{
      console.log("Antes de desmontar");
   })
   onUnmounted(() => {
      console.log("Desmontado");
   })
      return { value, componente}
   }
}
</script>