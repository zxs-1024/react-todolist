import React from 'react'
import { connect } from 'react-redux'
// import styles from '../App.css'

class TodoHeader extends React.Component {
  handleKeyUp = e => {
    if (e.keyCode === 13) {
      const value = e.target.value
      if (!value) return
      e.target.value = ''
      this.props.addTodo(value)
    }
  }

  render() {
    return (
      <div className="header">
        <div>To Do List</div>
        <input
          className="header-input"
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Come On Add Todo"
        />
      </div>
    )
  }
}

const mapDispatch = ({ todo: { addTodo } }) => ({
  addTodo: value =>
    addTodo({
      value,
      isDone: false
    })
})

export default connect(
  null,
  mapDispatch
)(TodoHeader)
