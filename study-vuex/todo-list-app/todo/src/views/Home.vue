<template>
  <div class="container grid-xs py-2">
      <img class="img-responsive img-logo" src="@/assets/logo.png" alt="Logo do Vue">
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group">
          <input type="text" 
            v-model="todo.description"
            class="form-input" placeholder="Novo todo">
            
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>
      <div class="todo-list">
        <!-- renderizar a lista  :key = é para o vue nao se perder-->
        <Todo v-for="t in todos" :key="t.id" @toggle="toggleTodo" @remove="removeTodo" :todo="t" />
      </div>
    </div>
</template>
<script>
import Todo from "@/components/Todo.vue"
export default {
  name: 'Home',
  components: { Todo },
  data() {
    return { 
      todos: [], 
      todo: { checked: false } }
    },
    methods: {
      addTodo(todo) {
        //adicionar um ID
        todo.id = Date.now()
        this.todos.push(todo)

        this.todo = { checked: false}
      },
      toggleTodo(todo) {
        const index = this.todos.findIndex(item => item.id === todo.id)
        if( index > -1) {
          const checked = !this.todos[index].checked
          this.todos[index].checked = checked
        }
      },
      removeTodo(todo) {
        const index = this.todos.findIndex(item => item.id === todo.id)
        if(index > - 1) {
          this.todos.splice(index, 1)
        }
      }
  }
}
</script>
<style scoped>
.img-logo {
  max-width: 200px;
  margin: 0 auto;
}

.todo-list {
  padding-top: 2rem;
}
</style>
