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

App.propTypes = {
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

export default connect(mapStateToProps)(App)
