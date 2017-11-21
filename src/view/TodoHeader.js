import React, { Component } from 'react'

class Header extends Component {
  handlekeyUp = e => {
    if (e.keyCode === 13) {
      const value = e.target.value
      if (!value) return
      e.target.value = ''
      this.props.addTodo({
        value: value,
        isDone: false
      })
    }
  }
  render() {
    return (
      <div className="header">
        <div>To Do List</div>
        <input onKeyUp={this.handlekeyUp} className="header-input" type="text" placeholder="Come On Add Todo" />
      </div>
    )
  }
}

export default Header