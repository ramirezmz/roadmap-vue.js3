<script setup>
import { ref, computed } from 'vue'
import main from './main.css'

const characterCount = computed(() => {
   return newItem.value.length
})
const header = ref('Shopping List App')
const editing =ref(false)
const items = ref([
   {id: 1, label:"10 party hats", purchased: true, highPriority: false},
   {id: 2, label:"2 board games", purchased: true, highPriority: false},
   {id: 3, label:"20 cups", purchased: false, highPriority: true}   
])
const newItem = ref("")
const newItemHighPriority = ref(false)
const saveItem = () => {
   items.value.push(
      {
         id: items.value.length + 1,
         label: newItem.value,
         highPriority: newItemHighPriority.value
      })
   newItem.value = ""
   newItemHighPriority.value = ""
}
const doEdit = (e) => {
   editing.value = e
   newItem.value = ""
   newItemHighPriority.value = ""
}

const togglePurchased = (item) => {
   item.purchased = !item.purchased
}
</script>
<template>
      <div>
         <div class="header">
            <h1>{{ header }}</h1>
            <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
            <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
         </div>
         <form 
            class="add-item-form"
            v-if="editing"
            @submit.prevent="saveItem"
            > 
         <input 
            v-model.trim="newItem"  
            type="text" 
            placeholder="Add an item"
         >
         <label>
            <input type="checkbox" v-model="newItemHighPriority">
            High Priority
         </label>
         <button 
            :disabled="newItem.length < 5"
            class="btn btn-primary"
            >
            Save item
         </button>
         </form>
         <p class="counter">
            {{characterCount}}/200
         </p>
            <ul>
               <li 
                  v-for="(item, index) in items" 
                  @click="togglePurchased(item)"
                  :key="item.id"
                  class="static-class"
                  :class="{strikeout: item.purchased, priority: item.highPriority}"
                  >
                  {{ item.label }}
               </li>
            </ul>
            <p v-if="!items.length">
               Nothing to see here
            </p>
      </div>
</template>