import React from 'react'

import { connect } from '../state'

/* Curry your handleClick event so you can pass params through a stateless functional component */
const handleClick = (fn, ...params) => e => {
  e.preventDefault()
  return fn(...params)
}

const styles = {
  display: 'flex',
  alignItems: 'center',
  h2: {
    marginRight: 10
  },
  a: {
    cursor: 'pointer'
  }
}

const Friends = ({ friends, actions }) => (
  <div>
    <h1>MY friends</h1>
    {friends.map((friend, i) => (
      <div key={i} style={styles}>
        <h2 style={styles.h2}>{friend.name}</h2>
        <button onClick={handleClick(actions.removeFriend, friend.name)}>
          X
        </button>
      </div>
    ))}
  </div>
)

export default connect(Friends, 'friends')
