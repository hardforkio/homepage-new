import { Locale } from '../types'
import * as R from 'ramda'
import { importAll } from '../helpers'
import { importAllNode } from '../helpers-node'
import { ProjectDataOnDisk, ProjectData } from './types'
import { expandTechnologies } from '../technology'
import { filterByLocale } from '../i18n'

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
  R.pipe(R.map(expandTechnologies), R.map(filterByLocale(locale)))(data)
