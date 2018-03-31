import { createContext } from 'react'
import createContexts from './lib/'

export const { connect, providers } = createContexts({
  friends: createContext('friends'),
  counter: createContext('counter')
})
