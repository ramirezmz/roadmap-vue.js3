
There are 2 primary ways in which you can interact with vue.

**Options API** = version 2
**Composition API** = latest version

```JS
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>
<template>
   <h1>{{ msg }}</h1>
   <input v-model="msg">
</template>
```
- We have that message displayed in an h1 tag, it uses what's known as the vue templating syntax, or, sometimes known, as the double moustache syntax.
- **Data binding** means "ligação de dados", Data binding is the process that establishes a connection between the app UI and the data it displays. If the binding has the correct settings and the data provides the proper notifications, when the data changes its value, the elements that are bound to the data reflect changes automatically.

# 2nd Class
- Inside of these double mustaches, we can do a lot of cool things.(Javascript syntax) Ex: `TemplateSyntax.vue`.
  ```Javascript
  <template>
   <div>
      <h1>{{ msg.toLocaleUpperCase() }}</h1>
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
  ```
- We can't declare new variables or evaluate if statements.

# 3rd Class
Vue makes it super easy to loop over and  render Arrays and objects.
```javascript
<template>
      <div>
         <h1>{{ header }}</h1>
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
```
https://vueschool.io/lessons/vue-fundamentals-capi-list-rendering-in-vue

# 4th Class
## User Inputs in Vue

```javascript
<input type="text" placeholder="Add an item">
```
With this, we can also type out a new item, no problem.
But, how do we now access the value of the input?

That's where **v-model** comes in, Vue's v-model directive makes it easy to bind reactive data to a form input.
So that whether the data is modified by the user via the input or by the code, the data always stays in sync.
- First, we need to create a new reactive ref, called newItem. It will be inizialization an empty string.
- Next, we need to add v-model to our input.
Just like that we've established a two-way data binding, between our input and the newItem data.
```js
const newItem = ref('')
&&
<input v-model="newItem" type="text" placeholder="Add an Item">
```
That way they'll always stay in-sync.

- Let's print out the value off the newItem just under the input.
```js
const newItem = ref('')
&&
<input v-model="newItem" type="text" placeholder="Add an Item">
{{ newItem }}
```