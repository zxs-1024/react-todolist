import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

import '../style/todo.css'

class App extends Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    )
  }
}

const mapState = state => ({
  todo: state.todo
})

export default connect(mapState)(App)
