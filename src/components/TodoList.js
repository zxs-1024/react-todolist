import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

class TodoNav extends React.Component {
  render() {
    const { todo = [], isDoing } = this.props
    return (
      <ul className="main">
        <li className="nav">{isDoing ? 'isDoing' : 'isDone'}</li>
        {isDoing
          ? todo.map(
              (todo, index) =>
                !todo.isDone && <Todo index={index} todo={todo} key={index} />
            )
          : todo.map(
              (todo, index) =>
                todo.isDone && <Todo index={index} todo={todo} key={index} />
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

const mapState = state => ({
  todo: state.todo
})

export default connect(mapState)(TodoList)
