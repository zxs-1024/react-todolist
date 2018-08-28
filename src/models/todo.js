
const setLocalStorage = todos => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

export default {

  namespace: 'todo',

  state: {
    todos: [],
    isDone: false,
    isAllChecked: false
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    initTodo(state) {
      const todos = JSON.parse(localStorage.getItem('todos')) || []
      return {
        ...state,
        todos,
        isAllChecked: todos.every(todo => todo.isDone)
      }
    },

    addTodo(state, { payload }) {
      const todos = [...state.todos, payload]
      setLocalStorage(todos)
      return { ...state, todos }
    },

    deleteTodo(state, { index }) {
      let todos = [...state.todos]
      todos.splice(index - 1, 1)
      setLocalStorage(state.todos)
      return {
        ...state,
        todos,
        isAllChecked: todos.every(todo => todo.isDone)
      }
    },

    changeIsDone(state, { payload: { index, isDone } }) {
      let todos = [...state.todos]
      todos[index].isDone = !isDone
      setLocalStorage(state.todos)
      return { ...state, todos }
    },

    clearIsDone(state, { payload }) {
      const todos = [
        ...state.todos.filter(todo => !todo.isDone)
      ]
      if (todos.length === 0) state.isAllChecked = false
      setLocalStorage(todos)
      return { ...state, todos }
    },

    checkedAll(state, params) {
      const isAllChecked = !state.isAllChecked
      state.todos.map(todo => {
        return todo.isDone = isAllChecked
      })
      const todos = [...state.todos]
      setLocalStorage(todos)
      return {
        ...state,
        todos,
        isAllChecked
      }
    }
  }
}
