export const state = {
  todos: [
    {id: 0, title: 'Javascript Study', description: 'Learning Functional JS', done: false},
    {id: 1, title: 'Javascript Vue', description: 'Make Components', done: false},
    {id: 2, title: 'Javascript Vuex', description: 'Manage state', done: false}
  ]
}

export const mutations = {
  addTodo (state, { title, description }) {
    let id = state.todos[ state.todos.length - 1 ].id
    id += 1

    state.todos.push({
      id,
      title,
      description
    })
  },
  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },
  deleteTodo (state, { id }) {
    state.todos = state.todos.filter(todo => todo.id !== id)
  }
}
