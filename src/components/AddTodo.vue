<template>
  <form @submit.prevent="todoAdd">
    <input type="text" v-model="title" placeholder="제목">
    <input type="text" v-model="description" placeholder="내용">
    <button type="submit">추가</button>
  </form>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'add-todo',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    ...mapMutations([ 'addTodo' ]),
    todoAdd () {
      this.addTodo({
        title: this.title,
        description: this.description
      })
      this.title = this.description = ''
    }
  }
}
</script>
<style scoped>
  form {
    background-color: #eaeaea;
    width: 500px;
    margin: 1rem auto;
    padding: 1rem;
  }
  input {
    height:44px;
    padding: .75rem;
    border: 0;
    border-radius: 3px;
    box-sizing:border-box;
    vertical-align: top;
  }

  button {
    height:44px;
    background-color: orange;
    border: 0;
    padding: .75rem;
    box-sizing:border-box;
    vertical-align: top;
    border-radius: 3px;
  }
</style>
