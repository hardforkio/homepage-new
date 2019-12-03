import { Technology } from '../technology'
import { TranslationCollection, Locale } from '../i18n'
import * as R from 'ramda'
import { useLocale } from '../../utils/hooks'
import { importAll } from '../helpers'
import { Head } from '../../components/Head'
import { translateAndConvert } from './helpers'

export type ProjectData = {
  usedTechnologies: Technology[]
  slug: string
  head: Head
} & TranslatedProjectData

interface TranslatedProjectData {
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  responsibilities: string
}

export type ProjectDataOnDisk = {
  usedTechnologies: string[]
  slug: string
  head: TranslationCollection<Head>
} & TranslationCollection<TranslatedProjectData>

const context = require.context('./', false, /\.json$/)
const data: ProjectDataOnDisk[] = importAll<ProjectDataOnDisk>(context)

export const getProjects = (locale: Locale): ProjectData[] =>
  R.map(translateAndConvert(locale), data)

export const useProjects: () => ProjectData[] = R.pipe(useLocale, getProjects)
