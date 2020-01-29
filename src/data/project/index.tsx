import * as R from 'ramda'

import { translate } from '../../cms/i18n'
import { importAll } from '../helpers'
import { importAllNode } from '../helpers-node'
import { filterByLocale } from '../i18n'
import { expandTechnologies } from '../technology'
import { Locale } from '../types'
import { ProjectData, ProjectDataOnDisk } from './types'

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
  R.pipe(
    R.map(expandTechnologies),
    R.map(filterByLocale(locale)),
    R.map(translate(locale)),
  )(data)
