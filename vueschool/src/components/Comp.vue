<template>
      <div>
         <h1>{{ header }}</h1>
         <Input />
            <ul>
               <li v-for="({id, label}, index) in items" :key="id">
                  {{ index }} -
                  {{ label }}
               </li>
            </ul>
      </div>
</template>
<script setup>
import { ref } from 'vue'
import main from './main.css'
import Input from './Input.vue'

const header = ref('Shopping List App')
const items = ref([
   {id: 1, label:"10 party hats"},
   {id: 2, label:"2 board games"},
   {id: 3, label:"20 cups"},
   {id: 3, label:"20 cups"},
   {id: 3, label:"20 cups"},
   {id: 3, label:"20 cups"},
   
])
</script>