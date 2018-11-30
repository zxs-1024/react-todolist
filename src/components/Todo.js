import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  // handleDelete = () => {
  //   const { index } = this.props
  //   this.props.dispatch({
  //     type: 'todo/deleteTodo',
  //     payload: { index }
  //   })
  // }

  // handleChange = () => {
  //   const {
  //     index,
  //     todo: { isDone }
  //   } = this.props
  //   this.props.dispatch({
  //     type: 'todo/changeIsDone',
  //     payload: { index, isDone }
  //   })
  // }

  render() {
    const {
      todo: { isDone, value },
      index
    } = this.props
    return (
      <li className="todo">
        <input
          className="checkbox"
          type="checkbox"
          checked={isDone}
          onChange={this.props.handleChange}
        />
        <span className="value">
          {`${index + 1}、`}
          {value}
        </span>
        <span className="delete" onClick={this.props.handleDelete}>
          Delete
        </span>
      </li>
    )
  }
}

const mapDispatch = ({ todo: { deleteTodo, changeIsDone } }) => ({
  deleteTodo: index => deleteTodo(index),
  changeIsDone: (index, isDone) => changeIsDone({ index, isDone: !isDone })
})

export default connect(
  null,
  mapDispatch
)(Todo)
