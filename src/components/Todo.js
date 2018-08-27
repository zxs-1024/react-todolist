import React, { Component } from 'react'

class Todo extends Component {
  hanldeDelete = () => {
    this.props.handleDeleteTodo(this.props.index)
  }

  handleChange = () => {
    const isDone = !this.props.isDone
    this.props.handleChangeIsDone(this.props.index, isDone)
  }

  render() {
    const { value, isDone, index } = this.props
    return (
      <li className="todo">
        <input className="checkbox" type="checkbox" checked={isDone} onChange={this.handleChange} />
        <span className="value">{`${index + 1}、`}{value}</span>
        <span className="delete" onClick={this.hanldeDelete}>Delete</span>
      </li>
    )
  }
}

export default Todo