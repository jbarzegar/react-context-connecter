import React, { Component } from 'react'
import { providers } from '../state'

import FriendsComponent from '../components/Friends'

const { FriendsProvider } = providers

export default class Friends extends Component {
  state = {
    friends: [
      { name: 'Kacee', age: 25 },
      { name: 'Wahid', age: 21 },
      { name: 'Jordyn', age: 30 },
      { name: 'Teegan', age: 22 }
    ]
  }
  addFriend = (name, age) => {
    this.setState({ friends: [...this.state.friends, { name, age }] })
  }
  removeFriend = name => {
    const newGroupOfFriends = this.state.friends.filter(
      friend => friend.name !== name
    )

    this.setState({ friends: newGroupOfFriends })
  }
  render = () => (
    <FriendsProvider
      value={{
        friends: [...this.state.friends],
        actions: {
          addFriend: this.addFriend,
          removeFriend: this.removeFriend
        }
      }}
    >
      <FriendsComponent />
    </FriendsProvider>
  )
}
