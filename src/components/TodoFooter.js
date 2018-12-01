import React, { Component } from 'react'
import { connect } from 'react-redux'

class TodoFooter extends Component {
  state = { isCheckedAll: false }

  handleChangeCheckedAll = () => {
    const isCheckedAll = !this.state.isCheckedAll
    console.log('handleChangeCheckedAll', isCheckedAll)
    this.setState({ isCheckedAll })
    this.props.checkedAll({ isCheckedAll })
  }

  clearIsDone = () => {
    this.props.clearIsDone()
  }

  render() {
    return (
      <div className="todo__footer">
        <div className="todo__list_nav">Operation</div>
        <div className="todo__item">
          <input
            className="todo__checkbox"
            type="checkbox"
            checked={this.props.isAllChecked}
            onChange={this.handleChangeCheckedAll}
          />
          <span className="todo__item_value">Select All</span>
          <span onClick={this.clearIsDone} className="todo__delete">
            Select Delete
          </span>
        </div>
        <p className="todo__log">Copyright © 2017 by Sailor</p>
      </div>
    )
  }
}

const mapDispatch = ({ todo: { checkedAll, clearIsDone } }) => ({
  checkedAll: payload => checkedAll(payload),
  clearIsDone: () => clearIsDone()
})

export default connect(
  null,
  mapDispatch
)(TodoFooter)
