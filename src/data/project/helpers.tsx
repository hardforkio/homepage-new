import * as R from 'ramda'
import { filterByLocale } from '../i18n'
import { ProjectDataOnDisk, ProjectData } from './types'
import { convertToObjectList } from '../helpers'
import { Locale } from '../types'

export const translateAndConvert = (
  locale: Locale,
): ((data: ProjectDataOnDisk) => ProjectData) =>
  R.pipe(filterByLocale(locale), deserializeTechnologies)

export const deserializeTechnologies: (
  data: Omit<ProjectData, 'usedTechnologies'> & {
    usedTechnologies: string[]
  },
) => ProjectData = R.evolve({
  usedTechnologies: convertToObjectList,
})
