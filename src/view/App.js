import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import TodoRedux from './TodoRedux'
import { initTodo, addTodo, deleteTodo, changeIsDone, clearIsDone, checkedAll, changeIsAll, sayAbout } from '../reducers/todos'
import fetch from 'isomorphic-fetch'

import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
// import fetch from 'isomorphic-fetch'
class App extends Component {
  componentDidMount() {
    this.props.initTodo()
  }

  addTodo = todo => {
    this.props.addTodo(todo)
  }

  handleChangeIsDone = (index, isDone) => {
    this.props.changeIsDone({ index, isDone })
  }

  setLocalStorage = todos => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  handleDeleteTodo = index => {
    this.props.deleteTodo(index)
  }

  handleChangeCheckedAll = isAllChecked => {
    this.props.checkedAll()
  }

  clearIsDone = () => {
    this.props.clearIsDone()
  }

  hanldeSaySomething = (msg) => {
    this.props.sayAbout(msg)
  }

  render() {
    const isAllChecked = this.props.todos.isAllChecked || false
    console.log('render this.props.speak is ' + this.props.speak.message)
    const speaker = this.props.speak
    console.log('Start render === ' + new Date())
    console.log(speaker)
    return (
      <div>
        <TodoHeader addTodo={this.addTodo} />
        <TodoRedux message={speaker.message} hanldeSaySomething={this.hanldeSaySomething} />
        <TodoList {...this.props.todos} handleChangeIsDone={this.handleChangeIsDone} handleDeleteTodo={this.handleDeleteTodo} />
        <TodoFooter isAllChecked={isAllChecked} handleChangeCheckedAll={this.handleChangeCheckedAll} clearIsDone={this.clearIsDone} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    speak: state.speak
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
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
    },
    sayAbout: (msg) => {
      // fetchSecretSauce().then(
      //   sauce => dispatch(makeASandwich(forPerson, sauce)),
      //   error => dispatch(apologize('The Sandwich Shop', forPerson, error))
      // )
      console.log('Start dispatch ==== ' + new Date())
      fetch('http://ip.taobao.com/service/getIpInfo.php?ip=59.108.51.32', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log('fetch-success' + res)
        dispatch(sayAbout(msg))
      }, err => {
        console.log('fetch-err' + err)
        dispatch(sayAbout('error'))
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
