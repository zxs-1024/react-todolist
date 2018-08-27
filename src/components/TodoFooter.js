import React, { Component } from 'react'
import styles from '../routes/App.css'
// import PropTypes from 'prop-types'

class TodoFooter extends Component {
  handleChangeCheckedAll = () => {
    const isAllChecked = !this.props.isAllChecked
    this.props.handleChangeCheckedAll(isAllChecked)
  }

  clearIsDone = () => {
    this.props.clearIsDone()
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

TodoFooter.propTypes = {
  // onDelete: PropTypes.func.isRequired,
  // products: PropTypes.array.isRequired,
}

export default TodoFooter
