import React, { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import Todo from './Todo'
import styles from '../routes/App.css'

class TodoNav extends Component {
  render() {
    const { todos = [], isDoing } = this.props
    return (
      <ul className={styles.main}>
        <li className={styles.nav}>{isDoing ? 'isDoing' : 'isDone'}</li>
        {
          isDoing ?
            todos.map((todo = {}, index) => (
              !todo.isDone &&
              <Todo index={index} todo={todo} key={index} />
            )) : todos.map((todo = {}, index) => (
              todo.isDone &&
              <Todo index={index} todo={todo} key={index} />
            ))
        }
      </ul>
    )
  }
}
class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoNav isDoing={true} {...this.props} />
        <TodoNav isDoing={false} {...this.props} />
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    todos: state.todo.todos
  }
}

export default connect(mapStateToProps)(TodoList)
