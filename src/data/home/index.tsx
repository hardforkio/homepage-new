import * as R from 'ramda'
import data from './home.json'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Head } from '../../components/Head'
import { StringifiedTechnologies, Technology } from '../technology'
import { convertTechnologies } from '../helpers'

interface Offering {
  headline: string
  image: string
  text: string
}

interface TranslatedProjectProps {
  slug: string
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  responsibilities: string
}

export type ProjectProps = {
  usedTechnologies: Technology[]
} & TranslatedProjectProps

type ProjectPropsOnDisk = {
  usedTechnologies: StringifiedTechnologies // Apparently the relation widget returns a list of stringified Technology objects. They are parsed later in the component whre they are used.
} & TranslationCollection<TranslatedProjectProps>

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
  projects: ProjectPropsOnDisk[]
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
export const getHome = (locale: Locale): HomeData => {
  const filteredHome = filterByLocale(locale)(home)
  return convertTechnologies(filteredHome)
}

export const useHome: () => HomeData = R.pipe(useLocale, getHome)
