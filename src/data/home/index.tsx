import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Head } from '../../components/Head'

interface Offering {
  headline: string
  image: string
  text: string
}

export interface ProjectProps {
  slug: string
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  technologies: string
  responsibilities: string
}

export interface HomeData {
  heroHeadline: string
  heroSubheadline: string
  offerings: Offering[]
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  contactEmail: string
  projectsHeadline?: string
  head: Head
  projects: ProjectProps[]
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
  projects: TranslationCollection<ProjectProps>[]
} & TranslationCollection<{
  heroHeadline: string
  heroSubheadline: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  emailButton: string
  projectsHeadline?: string
}>

const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData =>
  filterByLocale(locale)(home)
export const useHome: () => HomeData = R.pipe(useLocale, getHome)
