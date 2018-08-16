import React, { Component } from 'react'
class Footer extends Component {
  handleChangeCheckedAll = () => {
    const isAllChecked = !this.props.isAllChecked
    this.props.handleChangeCheckedAll(isAllChecked)
  }

  clearIsDone = () => {
    this.props.clearIsDone()
  }
  render() {
    return (
      <div className="footer">
        <div className="nav">Operation</div>
        <div className="todo">
          <input className="checkbox" type="checkbox" checked={this.props.isAllChecked} onChange={this.handleChangeCheckedAll} />
          <span className="value">Select All</span>
          <span onClick={this.clearIsDone} className="delete">Select Delete</span>
        </div>
        <p className="log">Copyright © 2017 by Sailor</p>
      </div>
    )
  }
}

export default Footer