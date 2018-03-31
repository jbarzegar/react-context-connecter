import React, { Component } from 'react'
import { providers } from '../state'

import CounterComponent from '../components/Counter'

const { CounterProvider } = providers

export default class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render = () => (
    <CounterProvider
      value={{
        state: { ...this.state },
        actions: {
          increment: this.increment,
          decrement: this.decrement
        }
      }}
    >
      <CounterComponent />
    </CounterProvider>
  )
}
