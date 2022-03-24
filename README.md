
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

# 5th Lesson
## User Events in Vue 3

Currently, we can type an input, but we need some kind of UI element, a button, for instance, for the user to interact with, and then we need to be able to listen for the click event of that button to actually add the item to the list below.

- Add button
```js
<button
   v-on:click="items.push({id: items.length + 1,label: newItem})" 
   class="btn btn-primary"
   >
   Save item
</button>
```

We can add to send message with enter as like this:
```js
<template>
      <div>
         <h1>{{ header }}</h1>
         <form 
            class="add-item-form"
            > 
         <input 
            v-model.trim="newItem" 
            v-on:keyup.enter="items.push({id: items.length + 1,label: newItem})" 
            type="text" 
            placeholder="Add an item"
         >
         <label>
            <input type="checkbox" v-model="newItemHighPriority">
            High Priority
         </label>
         <button 
            v-on:click="items.push({id: items.length + 1,label: newItem})" 
            class="btn btn-primary"
            >
            Save item
         </button>
         </form>
            <ul>
               <li v-for="({id, label}) in items" :key="id">
                  {{ label }}
               </li>
            </ul>
      </div>
</template>
```

But, as we put all events in form, we can simplify like this:
```js
<template>
      <div>
         <h1>{{ header }}</h1>
         <form 
            class="add-item-form"
            v-on:submit.prevent="items.push({id: items.length + 1,label: newItem})"
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
            class="btn btn-primary"
            >
            Save item
         </button>
         </form>
            <ul>
               <li v-for="({id, label}) in items" :key="id">
                  {{ label }}
               </li>
            </ul>
      </div>
</template>
```
- Lastly, vue provides a shorthand for the v-on syntax, that is using an @symbol, using the v-on shorthand, makes our templates look a little nicer.

```js
<form 
   class="add-item-form"
   @submit.prevent="items.push({id: items.length + 1,label: newItem})"
> 
```

# 7th Class
## Conditionals in Vue
Conditional rendering is essential on any dynamic website. Vue.js offers two ways to render elements on our page conditionally, and in this lesson we're learning how the v-if and v-else directives work.

Vue provides us with the **v-if** and **v-else** directives.
```vue
<script setup>
import { ref } from 'vue'


const header = ref('Shopping List App')
const items = ref([
   {id: 1, label:"10 party hats"},
   {id: 2, label:"2 board games"},
   {id: 3, label:"20 cups"}   
])
const newItem = ref("")
const newItemHighPriority = ref(false)
const saveItem = () => {
   items.value.push({id: items.value.length + 1, label: newItem.value})
   newItem.value = ""
}
</script>
<template>
      <div>
         <h1>{{ header }}</h1>
         <form 
            class="add-item-form"
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
            class="btn btn-primary"
            >
            Save item
         </button>
         </form>
            <ul>
               <li v-for="({id, label}) in items" :key="id">
                  {{ label }}
               </li>
            </ul>
            <p v-if="!items.length">
               Nothing to see here
            </p>
      </div>
</template>
```
# 8th Class
## HTML Attribute Binding in Vue
We know how to render data in the DOM with Vue 3, and now it's time to take a closer look at how we can bind HTML attributes to our Vue data.

This is achieved with Vue's v-bind directive and would let us change the href (or any other HTML attribute) of a link or swap out an image if we need to.
```js
<script setup>
import { ref } from 'vue'
import main from './main.css'

const header = ref('Shopping List App')
const editing =ref(false)
const items = ref([
   // {id: 1, label:"10 party hats"},
   // {id: 2, label:"2 board games"},
   // {id: 3, label:"20 cups"}   
])
const newItem = ref("")
const newItemHighPriority = ref(false)
const saveItem = () => {
   items.value.push({id: items.value.length + 1, label: newItem.value})
   newItem.value = ""
}
const doEdit = (e) => {
   editing.value = e
   newItem.value = ""
}
</script>
<template>
      <div>
         <div class="header">
            <h1>{{ header }}</h1>
            <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
            <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
         </div>
         <a v-bind:href="newItem">Dynamic Link</a>
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
            class="btn btn-primary"
            >
            Save item
         </button>
         </form>
            <ul>
               <li v-for="({id, label}) in items" :key="id">
                  {{ label }}
               </li>
            </ul>
            <p v-if="!items.length">
               Nothing to see here
            </p>
      </div>
</template>
```
# 9th Class
## Dynamic CSS Classes with Vue

# 10th Class
## Computed Properties in Vue with the Composition API
Computed properties  lets us perform transformations or calculations based on our data

Example:
In order to get an idea of what computed props are. Let's say we wanted to enforce a character limit on our newItem field, and we wanted to show our users how many characters they had left, while they type. Well, that's the perfect use case, for a computed property.

- The first thing that we need to do, is import a computed function from vue.
- Just like ref, computed is a helper function provided by vue that helps us interact with its reactivity system.
 
  ```js
  <script setup>
  import { ref, computed } from 'vue'
  ```

- Next we need to create a variable called "characterCount"
  ```js
  <script setup>
  import { ref, computed } from 'vue'

  const characterCount = () => {
     return newItem.value.length
  }
  ```

- Now, in order to handle this as a computed prop, that will behave in a performant manner and only update when newItem updates will pass the function to the computed function. And that's how you create a computed prop.

```js
  <script setup>
  import { ref, computed } from 'vue'
  
  const characterCount = computed(() => {
     return newItem.value.length
  })
```

- Now let's use it to display the characterCount on the screen. I'll use a p tag with the class of counter, print out the characterCount, and the just hardcode in a static 200 here.
```js
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
```
- You can see the character count update in real time.
- Computed properties are extremely powerful tools for encapsulating data transformations and manipulations

# 11th Class - Reactivity Fundamentals




# Composition API vs. Options API
### Options API
```js
export default {
  data() {
    return {
      name: 'John',
    };
  },
  methods: {
    doIt() {
      console.log(`Hello ${this.name}`);
    },
  },
  mounted() {
    this.doIt();
  },
};
```
### Composition API
```js
export default {
  setup() {
    const name = ref('John');
    
    const doIt = () => console.log(`Hello ${name.value}`);
    
    onMounted(() => {
      doIt();
    });
    
    return { name };
  },
};
```
The options API uses options like `data`, `methods`, and `mounted`.
With the composition API, we have a single `setup` hook in which we write our reactive code.


## REF and REACTIVE
- `reactive()` only takes objects, NOT Js primitives (strings, Boolean, NUmber, BigInt, Symbol, null, undefined)
- `ref()` is calling `reactive()` behind the scenes
- Since `reactive() works for objects and `refs()` calls `reactive()`, objects work for both.
- BUT, `ref()` has a `.value` property for reassigning, `reactive()` does not have this and thereforeCANNOT be reassigned.

## USE
`ref()` when...
   
   - It's a primitives (for example 'strings', true, 23, etc)
   - It's an objects you need to later reassign (like an array )




There is a good reason for using both ref and reactive in that example.

When you write reactive([]) you are making that array reactive. That allows Vue to track when that array is mutated but there's no way to change it for a different array.

When you write ref([]) it is equivalent to ref(reactive([])). Any object (including an array) passed to ref will be passed to reactive internally. Because the array is wrapped in a ref we also have a value property that can be used if we want to swap out that array for a different array.

That's the key difference in that example. One of the arrays needs to be reassigned in the onBeforeUpdate hook and we wouldn't be able to do that if it just used reactive.

They could both be written using ref but that would introduce an extra wrapper object for list that the example doesn't need.

There are other ways it could be written. In that example we never see divs used for anything, so whether it even needs reactivity is unclear. If it isn't needed outside the setup method then we could potentially assign a new value directly to divs itself (switching the const to let) and skip all the reactivity stuff altogether.

Another way of writing it would be to set the length to 0 rather than assigning a new array. Implemented that way it could use reactive instead of ref for both.

The current example tries to strike a balance. It doesn't show the other parts of the component, such as how list is modified or how divs is used. It shows the principle via a reasonable implementation but in practice it may be possible to simplify/complicate it depending the specifics.

# <script setup>
is a compile-time syntactic sugar for using Composition API inside Single File Components (SFCs). It is the recommended syntax if you are using both SFCs and Composition API. It provides a number of advanges over the normal `<script>` syntax:

- More succinct code with less boilerplate.
- Ability to declare props and emitted events using pure TypeScript
- Better runtime performance (the template is compiled into a render function in the same scope, without an intermediate proxy)
- Better IDE type-inference performance (less work for the language server to extract types from code)

### Links:
https://markus.oberlehner.net/blog/vue-3-composition-api-vs-options-api/
https://github.com/vuejs/docs/issues/801
