import React from 'react'
import { connect } from 'dva'
import './App.css'
import TodoHeader from '../components/TodoHeader'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(App)
