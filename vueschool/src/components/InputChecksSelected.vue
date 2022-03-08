<template>
   <div>
      <h4>Priority:</h4>
         <select v-model="newItemPriority">
            <option value="low">Low</option>
            <option value="high">High</option>
         </select>
         <br />
         {{newItemPriority}}
   </div>
</template>
<script setup>
import { ref } from 'vue'
const newItemPriority = ref("low")

</script>