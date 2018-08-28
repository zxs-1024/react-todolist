import React from 'react'
import { connect } from 'dva'
import styles from '../routes/App.css'

class TodoHeader extends React.Component {

  handleKeyUp = e => {
    if (e.keyCode === 13) {
      const value = e.target.value
      if (!value) return
      e.target.value = ''
      this.addTodo(value)
    }
  }

  addTodo(value) {
    this.props.dispatch({
      type: 'todo/addTodo',
      payload: {
        value,
        isDone: false
      }
    })
  }

  render() {
    return (
      <div className={styles.header}>
        <div>To Do List</div>
        <input className={styles['header-input']} onKeyUp={this.handleKeyUp} type="text" placeholder="Come On Add Todo" />
      </div>
    )
  }
}

export default connect()(TodoHeader)
