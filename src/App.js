import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoHeader />
        <TodoList />
      </div>
    )
  }
}

const mapState = state => ({
  todo: state.todo
})

export default connect(mapState)(App)
