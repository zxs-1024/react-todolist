
export default {

  namespace: 'todo',

  state: {
    list: []
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
    initTodo() {

    },

    addTodo(state, { item }) {
      const list = [...state.list, item]
      return { ...state, list }
    },

    deleteTodo(state, { index }) {
      return {
        ...state,
        list: []
      }
    },

    changeIsDone() {

    },

    clearIsDone() { },

    checkedAll() { },

    changeIsAll() { }
  },

};
