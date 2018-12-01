import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoNav extends React.Component {
  render() {
    const { todo = [], isDoing } = this.props
    return (
      <ul className="todo__list">
        <li className="todo__list_nav">{isDoing ? 'isDoing' : 'isDone'}</li>
        {isDoing
          ? todo.map(
              (todo, index) =>
                !todo.done && <Todo index={index} todo={todo} key={index} />
            )
          : todo.map(
              (todo, index) =>
                todo.done && <Todo index={index} todo={todo} key={index} />
            )}
      </ul>
    )
  }
}

class TodoList extends React.Component {
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
  todo: PropTypes.array.isRequired
}
const mapState = state => ({
  todo: state.todo
})

export default connect(mapState)(TodoList)
