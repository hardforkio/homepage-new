import { Locale } from '../types'
import * as R from 'ramda'
import { importAll } from '../helpers'
import { translateAndConvert } from './helpers'
import { importAllNode } from '../helpers-node'
import { ProjectDataOnDisk, ProjectData } from './types'

const loadData = (): ProjectDataOnDisk[] => {
  try {
    const context = require.context('./', false, /\.json$/)
    return importAll<ProjectDataOnDisk>(context)
  } catch (error) {
    return importAllNode<ProjectDataOnDisk>(__dirname)
  }
}

const data = loadData()

export const getProjects = (locale: Locale): ProjectData[] =>
  R.map(translateAndConvert(locale), data)
