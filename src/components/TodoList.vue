<template>
  <div
    class="todo-item"
    :class="{completed: todo.done}">
    <h3 class="tit_todo" @dblclick="editing = true" v-show="!editing">{{todo.title}}</h3>
    <p class="txt_todo" @dblclick="editing = true" v-show="!editing">{{todo.description}}</p>
    <form
      v-show="editing"
      @submit.prevent="doneEdit">
      <input
        type="text"
        v-show="editing"
        v-model="todo.title">
      <textarea
        v-show="editing"
        v-model="todo.description"></textarea>
      <button
        type="submit"
        class="btn btn_edit">수정</button>
    </form>
    <div v-show="!editing">
      <button type="submit" :class="{completed: todo.done}" class="btn btn_done" @click="toggleTodo({ todo })">완료</button>
      <button type="submit" :class="{completed: todo.done}" class="btn btn_del" @click="deleteTodo({ id: todo.id })">삭제</button>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'todo-list',
    props: ['todo'],
    data () {
      return {
        editing: false
      }
    },
    methods: {
      ...mapMutations([
        'toggleTodo',
        'deleteTodo'
      ]),
      doneEdit () {
        this.editing = false
      }
    }
  }
</script>
<style scoped>
  .todo-item {
    border: 1px solid #eaeaea;
    width: 500px;
    margin: 0 auto;
    padding-bottom: 1rem;
  }
  .tit_todo,
  .txt_todo{
    overflow: hidden;
    padding: 0 .75rem;
    text-overflow: ellipsis;
    word-wrap:break-word;
  }
  .tit_todo{
    display:block;
    white-space: nowrap;
  }
  .txt_todo{
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    line-height: 1.2em;
  }
  input {
    padding: .75rem;
    border-radius: 3px;
    margin: 0.5em auto;
    border: 1px solid #eaeaea;
    font-size: 1.1rem;
  }
  input[type="text"]{
    display:block;
    width:80%;
    padding:.5rem .75rem;
  }
  textarea{
    display:block;
    width:80%;
    padding:2rem .75rem;
    margin: 0.5em auto;
    resize:none;
    border-radius: 3px;
    border:1px solid #eaeaea;
  }
  .btn {
    border: none;
    background-color: gray;
    border-radius: 3px;
    padding: 0.5rem;
  }
  .btn_edit {
    width:30%;
    background-color: #3385ff;
    color: #fff;
  }
  .btn_del {
    background-color: orangered;
    color: #fff;
  }
  .btn_done {
    background-color: #1f913b;
    color: #fff;
  }
  .completed {
    background-color: #777;
    border-color: #5b5b5b;
    color: #ccc;
  }
</style>
