import React, { Component } from 'react'

class TodoRedux extends Component {
  hanldeSaySomething = () => {
    const msg = `啦啦啦啦啦啦 => ${Math.random()}`
    this.props.hanldeSaySomething(msg)
  }
  render() {
    return (
      <div className="todo-redux">
        this is test redux
        <p>{this.props.massage}</p>
        <span onClick={this.hanldeSaySomething} className="delete">SAY</span>
      </div>
    )
  }
}

export default TodoRedux