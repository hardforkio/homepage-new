import * as R from 'ramda'
import { Locale, filterByLocale } from '../i18n'
import { ProjectDataOnDisk, ProjectData } from '.'
import { convertToObjectList } from '../helpers'

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
