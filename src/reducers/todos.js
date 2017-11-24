import { combineReducers } from 'redux'

// action types
const INIT_TODOS = 'INIT_TODOS'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const CHANGE_ISDONE = 'CHANGE_ISDONE'
const CLEAR_ISDONE = 'CLEAR_ISDONE'
const CHECKED_ALL = 'CHECKED_ALL'
const CHANGE_ISALL = 'CHANGE_ISALL'


const setLocalStorage = todos => {
  localStorage.setItem("todos", JSON.stringify(todos))
}
function todos(state = {}, action) {
  let todos = []
  switch (action.type) {
    case INIT_TODOS:
      todos = JSON.parse(localStorage.getItem('todos')) || []
      return {
        todos,
        isAllChecked: todos.every(todo => todo.isDone)
      }
    case ADD_TODO:
      todos = [
        ...state.todos,
        action.todo
      ]
      setLocalStorage(todos)
      return {
        todos
      }
    case DELETE_TODO:
      todos = [
        ...state.todos.slice(0, action.index),
        ...state.todos.slice(action.index + 1)
      ]
      setLocalStorage(todos)
      return {
        todos,
        isAllChecked: todos.every(todo => todo.isDone)
      }
    case CHANGE_ISDONE:
      const change = action.change
      state.todos[change.index].isDone = change.isDone
      todos = [
        ...state.todos
      ]
      setLocalStorage(todos)
      return {
        todos,
        isAllChecked: state.todos.every(todo => todo.isDone)
      }
    case CLEAR_ISDONE:
      todos = [
        ...state.todos.filter(todo => !todo.isDone)
      ]
      setLocalStorage(todos)
      return {
        todos
      }
    case CHECKED_ALL:
      const isAllChecked = !state.isAllChecked
      state.todos.map(todo => {
        return todo.isDone = isAllChecked
      })
      todos = [
        ...state.todos
      ]
      setLocalStorage(todos)
      return {
        todos,
        isAllChecked
      }
    default:
      return state
  }
}

export default combineReducers({
  todos
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

