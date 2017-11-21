import React, { Component } from 'react'
import Todo from './Todo'

class TodoNav extends Component {
  render() {
    return (
      <ul className="main">
        <li className="nav">{this.props.isDoing ? 'isDoing' : 'isDone'}</li>
        {
          this.props.isDoing ?
            this.props.todos.map((todo, index) => (
              !todo.isDone &&
              < Todo index={index} key={index} { ...todo } { ...this.props } />
            )) : this.props.todos.map((todo, index) => (
              todo.isDone &&
              < Todo index={index} key={index} { ...todo } { ...this.props } />
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

export default TodoList