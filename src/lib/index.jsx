import React from 'react'

import { configureConsumers, configureProviders } from './configure'
import { pascalCase } from './helpers'

/**
 * @description Get an object of consumers.  Grab a consumer by name, render component that subscribes to a context provider
 * @param {Object} consumers Consumers
 * @param {Function} Component a react component to render in a consumer
 * @param {String} contextName Name of the consumer you want to subscribe to
 */
const connect = consumers => (Component, contextName) => props => {
  const Consumer = consumers[pascalCase(contextName)]

  return <Consumer>{state => <Component {...state} {...props} />}</Consumer>
}

/**
 * @description Configure the consumers and pass them to a connect function
 * @param {Object} contexts
 */
export const createConsumerConnecter = contexts => {
  const consumers = configureConsumers(...Object.values(contexts))

  return connect(consumers)
}

/**
 * @description Initializer
 * @returns {Object} returns an object of providers and a connect function
 */
export default contexts => {
  const values = Object.values(contexts)

  return {
    providers: configureProviders(...values),
    connect: createConsumerConnecter(configureConsumers(...values))
  }
}
