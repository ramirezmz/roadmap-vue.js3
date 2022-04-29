<template>
   <div>
      <h1 v-if="isMostrarMessagem"> {{message}} </h1>
   </div>
</template>
<script>
export default {
   props: {
      message: String,
      isMostrarMessagem: Boolean
   },
   setup(){
      return {}
   }
}

</script>