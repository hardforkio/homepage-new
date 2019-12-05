import { importAll, expandRelation } from '../helpers'
import * as R from 'ramda'
import { importAllNode } from '../helpers-node'
import { Technology } from './types'

const loadData = (): Technology[] => {
  try {
    const context = require.context('./', false, /\.json$/)
    return importAll<Technology>(context)
  } catch (error) {
    return importAllNode<Technology>(__dirname)
  }
}

const data = loadData()

export const expandTechnologies = R.partial(expandRelation, [
  ['usedTechnologies'],
  data,
])
