<template>
  <div id="app">
    <header>
      <h1>Vue + Vuex Todo List</h1>
    </header>
    <main>
      <add-todo></add-todo>
      <todo-list
        v-for="(todo, index) in todos"
        :todo="todo"
        :key="index"></todo-list>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: { AddTodo, TodoList },
  computed: {
    ...mapState(['todos'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
