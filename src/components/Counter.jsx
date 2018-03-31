import React from 'react'

import { connect } from '../state'

const Counter = ({ state, actions }) => (
  <div>
    <h1>{state.count}</h1>
    <button onClick={actions.decrement}>-</button>
    <button onClick={actions.increment}>+</button>
  </div>
)

export default connect(Counter, 'counter')
