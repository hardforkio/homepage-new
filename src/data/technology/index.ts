import { importAll, expandRelation } from '../helpers'
import * as R from 'ramda'
import { importAllNode } from '../helpers-node'
import { TechnologyOnDisk } from './types'

const loadData = (): TechnologyOnDisk[] => {
  try {
    const context = require.context('./', false, /\.json$/)
    return importAll<TechnologyOnDisk>(context)
  } catch (error) {
    return importAllNode<TechnologyOnDisk>(__dirname)
  }
}

const data = loadData()

export const expandTechnologies = R.partial(expandRelation, [
  ['usedTechnologies'],
  data,
])
