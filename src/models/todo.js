// function to create a one second delay
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time))

const data = localStorage.getItem('todo') || []
let localTodo = []

try {
  localTodo = JSON.parse(data)
} catch (error) {
  localTodo = []
}

function saveTodoToLocal(todo) {
  localStorage.setItem('todo', JSON.stringify(todo))
}

const todo = {
  state: localTodo,
  reducers: {
    addTodo(state, payload) {
      const local = [...state, payload]
      saveTodoToLocal(local)
      return local
    },
    deleteTodo(state, { index }) {
      state.splice(index - 1, 1)
      saveTodoToLocal([...state])
      return [...state]
    },
    changeIsDone(state, { index, done }) {
      state[index].done = done
      saveTodoToLocal([...state])
      return [...state]
    },
    checkedAll(state, { isCheckedAll }) {
      state.map(item => (item.done = isCheckedAll))
      saveTodoToLocal([...state])
      return [...state]
    },
    clearIsDone(state, payload) {
      const local = state.filter(item => !item.done)
      saveTodoToLocal([...local])
      return [...local]
    }
  },
  effects: dispatch => ({
    async addTodoAsync(payload, rootState) {
      await delay(1000)
      dispatch.todo.addTodo(payload)
    }
  })
}

export { todo }
