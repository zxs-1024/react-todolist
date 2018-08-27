import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Todo from './Todo'
import styles from '../routes/App.css'

class TodoNav extends Component {
  render() {
    const todos = this.props.todos || []
    return (
      <ul className={styles.main}>
        <li className={styles.nav}>{this.props.isDoing ? 'isDoing' : 'isDone'}</li>
        {
          this.props.isDoing ?
            todos.map((todo, index) => (
              !todo.isDone &&
              < Todo index={index} key={index} {...todo} {...this.props} />
            )) : todos.map((todo, index) => (
              todo.isDone &&
              < Todo index={index} key={index} {...todo} {...this.props} />
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
  // onDelete: PropTypes.func.isRequired,
  // products: PropTypes.array.isRequired,
}

export default TodoList
