import { pascalCase } from './helpers'

/**
 * @description Configure and return a provider or Consumer
 * @param {String} type
 * @returns {Object}
 */
const configureContext = type => (...params) => {
  let values = {}

  params.forEach(context => {
    const name = pascalCase(
      type === 'Provider' ? context._defaultValue + type : context._defaultValue
    )
    values[name] = context[type]
  })

  return values
}

export const configureProviders = (...params) => ({
  ...configureContext('Provider')(...params)
})
export const configureConsumers = (...params) => ({
  ...configureContext('Consumer')(...params)
})
