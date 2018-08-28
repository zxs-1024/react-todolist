import React, { Component } from 'react'
import { connect } from 'dva'
import styles from '../routes/App.css'

class Todo extends Component {
  handleDelete = () => {
    const { index } = this.props
    this.props.dispatch({
      type: 'todo/deleteTodo',
      payload: { index }
    })
  }

  handleChange = () => {
    const { index, todo: { isDone } } = this.props
    this.props.dispatch({
      type: 'todo/changeIsDone',
      payload: { index, isDone }
    })
  }

  render() {
    const { todo: { isDone, value }, index } = this.props
    return (
      <li className={styles.todo}>
        <input className={styles.checkbox} type="checkbox" checked={isDone} onChange={this.handleChange} />
        <span className={styles.value}>{`${index + 1}、`}{value}</span>
        <span className={styles.delete} onClick={this.handleDelete}>Delete</span>
      </li>
    )
  }
}

export default connect()(Todo)