// function to create a one second delay
const delay = time => new Promise(resolve => setTimeout(() => resolve(), time))

const todo = {
  state: [{ value: '冲鸭！！！', isDone: true }],
  reducers: {
    addTodo(state, payload) {
      console.log([...state, payload])
      return [...state, payload]
    },
    handleChange(state, payload) {
      console.log([...state, payload])
      return [...state, payload]
    },
    increment(state, payload) {
      console.log('increment', state)
      return { ...state, count: state.count + payload }
    }
  },
  effects: dispatch => ({
    async incrementAsync(payload, rootState) {
      await delay(1000)
      dispatch.todo.increment(payload)
    }
  })
}

export { todo }
