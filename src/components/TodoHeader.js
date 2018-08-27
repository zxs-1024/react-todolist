import React from 'react'
import styles from '../routes/App.css'
// import PropTypes from 'prop-types'

class TodoHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

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
    this.setState({ value: '' })
  }

  render() {
    return (
      <div className={styles.header}>
        <div>To Do List</div>
        <input className={styles['header-input']} value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} onKeyUp={this.handleKeyUp} type="text" placeholder="Come On Add Todo" />
      </div>
    )
  }
}

TodoHeader.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  // products: PropTypes.array.isRequired,
}

export default TodoHeader
