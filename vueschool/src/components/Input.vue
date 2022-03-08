<template>
   <div>
      <input v-model="newItem" type="text" placeholder="Add an item">
      <!-- <InputChecks /> -->
      <InputChecksSelected />
      <h3>{{newItem}}</h3>
   </div>
</template>
<script setup>
import {ref} from 'vue'
import InputChecks from './InputChecks.vue'
import InputChecksSelected from './InputChecksSelected.vue'
const newItem = ref("")

</script>