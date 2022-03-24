<template>
   <div>
      <h1>{{ msg || 'Welcome' }}</h1>
      <input v-model="msg">
   </div>
</template>
<script>
export default {
   name: "TemplateSyntax",
      data() {
         return {
            msg: ""
         }
      }    
   }
</script>