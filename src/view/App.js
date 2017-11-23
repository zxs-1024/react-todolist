import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { initTodo, addTodo, deleteTodo, changeIsDone, clearIsDone, checkedAll, changeIsAll } from '../reducers/todos'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    // this.checkAllChecked()
    this.props.initTodo()
    console.log(this.props)
  }

  addTodo = todo => {
    // this.setState({
    //   todos: todos
    // })
    this.props.addTodo(todo)
    // this.setLocalStorage(todos)
  }

  handleChangeIsDone = (index, isDone) => {
    this.props.changeIsDone({ index, isDone })
    // const todos = this.state.todos
    // todos[index].isDone = isDone
    // this.setState({
    //   todos: todos
    // })
    // this.checkAllChecked()
    // this.setLocalStorage(todos)s
  }

  setLocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  handleDeleteTodo = index => {
    // this.state.todos.splice(index, 1)
    // this.setState({
    //   todos: this.state.todos
    // })
    // this.checkAllChecked()
    // this.setLocalStorage(this.state.todos)
    this.props.deleteTodo(index)
  }

  handleChangeCheckedAll = isAllChecked => {
    // const todos = this.state.todos
    // todos.map(todo => {
    //   return todo.isDone = isAllChecked
    // })
    // this.setState({
    //   todos: todos,
    //   isAllChecked
    // })
    // this.setLocalStorage(todos)
    this.props.checkedAll()
  }

  checkAllChecked = () => {
    // let isAllChecked = false
    // if (this.state.todos.every(todo => todo.isDone)) isAllChecked = true
    // this.setState({
    //   isAllChecked: isAllChecked
    // })
  }

  clearDone = () => {
    let todos = this.state.todos.filter(todo => !todo.isDone)
    // this.setState({
    //   todos: todos
    // })
    this.setLocalStorage(todos)
  }

  render() {
    return (
      <div>
        <TodoHeader addTodo={this.addTodo} />
        <TodoList {...this.props.todos} handleChangeIsDone={this.handleChangeIsDone} handleDeleteTodo={this.handleDeleteTodo} />
        <TodoFooter isAllChecked={this.props.isAllChecked} handleChangeCheckedAll={this.handleChangeCheckedAll} clearDone={this.clearDone} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // TODO: undifind
    todos: state.todos,
    isAllChecked: state.isAllChecked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // initTodo, addTodo, deleteTodo, changeIsDone, clearIsDone
    initTodo: () => {
      dispatch(initTodo())
    },
    addTodo: (todo) => {
      dispatch(addTodo(todo))
    },
    deleteTodo: (todo) => {
      dispatch(deleteTodo(todo))
    },
    changeIsDone: (change) => {
      dispatch(changeIsDone(change))
    },
    clearIsDone: () => {
      dispatch(clearIsDone())
    },
    checkedAll: () => {
      dispatch(checkedAll())
    },
    changeIsAll: () => {
      dispatch(changeIsAll())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
