import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export const pascalCase = str => upperFirst(camelCase(str))
