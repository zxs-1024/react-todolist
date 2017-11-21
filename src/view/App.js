import React, { Component } from 'react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

class App extends Component {
  constructor() {
    super()
    let todos = localStorage.getItem('todos')
    this.state = {
      todos: JSON.parse(todos) || [],
      isAllChecked: false
    }
  }
  addTodo = todo => {
    const todos = this.state.todos
    todos.push(todo)
    this.setState({
      todos: todos
    })
    this.setLocalStorage(todos)
  }

  handleChangeIsDone = (index, isDone) => {
    const todos = this.state.todos
    todos[index].isDone = isDone
    this.setState({
      todos: todos
    })
    this.setLocalStorage(todos)
  }

  setLocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  handleDeleteTodo = index => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
    this.setLocalStorage(this.state.todos)
  }

  handleChangeCheckedAll = state => {
    this.setState({
      isAllChecked: state
    })
  }

  clearDone = () => {
    let todos = this.state.todos.filter(todo => !todo.isDone)
    this.setState({
      todos: todos
    })
    this.setLocalStorage(todos)
  }

  render() {
    return (
      <div>
        <TodoHeader addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} handleChangeIsDone={this.handleChangeIsDone} handleDeleteTodo={this.handleDeleteTodo} />
        <TodoFooter isAllChecked={this.state.isAllChecked} handleChangeCheckedAll={this.handleChangeCheckedAll} clearDone={this.clearDone} />
      </div>
    )
  }
}

export default App
