import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  handleDelete = () => {
    const { index } = this.props
    this.props.deleteTodo({ index })
  }

  handleChange = () => {
    const {
      index,
      todo: { done }
    } = this.props
    this.props.changeIsDone({ index, done: !done })
  }

  render() {
    const {
      todo: { done, value },
      index
    } = this.props
    return (
      <li className="todo__item">
        <input
          className="todo__checkbox"
          type="checkbox"
          checked={done}
          onChange={this.handleChange}
        />
        <span className="todo__item_value">
          {`${index + 1}、`}
          {value}
        </span>
        <span className="delete" onClick={this.handleDelete}>
          Delete
        </span>
      </li>
    )
  }
}

const mapDispatch = ({ todo: { deleteTodo, changeIsDone } }) => ({
  deleteTodo: payload => deleteTodo(payload),
  changeIsDone: payload => changeIsDone(payload)
})

export default connect(
  null,
  mapDispatch
)(Todo)
