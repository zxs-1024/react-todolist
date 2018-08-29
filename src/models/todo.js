export default {

  namespace: 'todo',

  state: {
    todos: [],
    isAllChecked: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        console.log('subscriptions', pathname)
      })
    },
  },

  effects: {
    *save({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'addTodo' });
    },
  },

  reducers: {
    addTodo(state, { payload }) {
      const todos = [...state.todos, payload]
      return { ...state, todos }
    },

    deleteTodo(state, { index }) {
      let todos = [...state.todos]
      todos.splice(index - 1, 1)
      return {
        ...state,
        todos,
        isAllChecked: todos.every(todo => todo.isDone)
      }
    },

    changeIsDone(state, { payload: { index, isDone } }) {
      let todos = [...state.todos]
      let isAllChecked = state.isAllChecked
      todos[index].isDone = !isDone
      const isDoneLength = todos.filter(todo => todo.isDone).length
      if (isDoneLength === todos.length) {
        isAllChecked = true
      } else if (isDoneLength === 0) {
        isAllChecked = false
      }
      return { ...state, todos, isAllChecked }
    },

    clearIsDone(state, { payload }) {
      const todos = [
        ...state.todos.filter(todo => !todo.isDone)
      ]
      if (todos.length === 0) state.isAllChecked = false
      return { ...state, todos }
    },

    checkedAll(state, params) {
      const isAllChecked = !state.isAllChecked
      state.todos.map(todo => {
        return todo.isDone = isAllChecked
      })
      const todos = [...state.todos]
      return {
        ...state,
        todos,
        isAllChecked
      }
    }
  }
}
