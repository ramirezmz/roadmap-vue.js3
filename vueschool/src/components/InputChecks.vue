<template>
   <div>
      <h4>Priority:</h4>
         <label>
            <input type="radio" v-model="newItemPriority" value="low">
               Low
         </label>
         <label>
            <input type="radio" v-model="newItemPriority" value="high">
               High
         </label>
         <br />
         {{newItemPriority}}
   </div>
</template>
<script setup>
import { ref } from 'vue'
const newItemPriority = ref("low")

</script>