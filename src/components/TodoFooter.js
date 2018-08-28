import React, { Component } from 'react'
import { connect } from 'dva'
import styles from '../routes/App.css'

class TodoFooter extends Component {
  handleChangeCheckedAll = () => {
    const isAllChecked = !this.props.isAllChecked
    this.props.dispatch({
      type: 'todo/checkedAll',
      payload: {
        isAllChecked
      }
    })
  }

  clearIsDone = () => {
    this.props.dispatch({
      type: 'todo/clearIsDone'
    })
  }

  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.nav}>Operation</div>
        <div className={styles.todo}>
          <input className={styles.checkbox} type="checkbox" checked={this.props.isAllChecked} onChange={this.handleChangeCheckedAll} />
          <span className={styles.value}>Select All</span>
          <span onClick={this.clearIsDone} className={styles.delete}>Select Delete</span>
        </div>
        <p className={styles.log}>Copyright © 2017 by Sailor</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAllChecked: state.todo.isAllChecked
  }
}

export default connect(mapStateToProps)(TodoFooter)
