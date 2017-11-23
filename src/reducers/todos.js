import { combineReducers } from 'redux'

// action types
const INIT_TODOS = 'INIT_TODOS'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const CHANGE_ISDONE = 'CHANGE_ISDONE'
const CLEAR_ISDONE = 'CLEAR_ISDONE'
const CHECKED_ALL = 'CHECKED_ALL'
const CHANGE_ISALL = 'CHANGE_ISALL'

function isAllChecked(state = {}, action) {
  switch (action.type) {
    case CHANGE_ISALL:
      return !state.isAllChecked
    default:
      return state
  }
}

function todos(state = {}, action) {
  switch (action.type) {
    case INIT_TODOS:
      return {
        todos: JSON.parse(localStorage.getItem('todos')) || []
      }
    case ADD_TODO:
      console.log(state)
      return {
        todos: [
          ...state.todos,
          action.todo
        ]
      }
    case DELETE_TODO:
      return {
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      }
    case CHANGE_ISDONE:
      const change = action.change
      state.todos[change.index].isDone = change.isDone
      return {
        todos: [
          ...state.todos
        ]
      }
    case CLEAR_ISDONE:
      return {
        todos: [
          ...state.todos.filter(todo => !todo.isDone)
        ]
      }
    case CHECKED_ALL:
      console.log(state)
      state.todos.map(todo => {
        return todo.isDone = !state.isAllChecked
      })
      return {
        todos: [
          ...state.todos
        ]
      }
    default:
      return state
  }
}

export default combineReducers({
  todos,
  isAllChecked
})

//action creaters

export const initTodo = () => {
  return { type: INIT_TODOS }
}

export const addTodo = (todo) => {
  return { type: ADD_TODO, todo }
}

export const deleteTodo = (index) => {
  return { type: DELETE_TODO, index }
}

export const changeIsDone = (change) => {
  return { type: CHANGE_ISDONE, change }
}

export const clearIsDone = () => {
  return { type: CLEAR_ISDONE }
}

export const checkedAll = () => {
  return { type: CHECKED_ALL }
}

export const changeIsAll = () => {
  return { type: CHANGE_ISALL }
}
