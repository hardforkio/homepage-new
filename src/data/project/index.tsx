import { Technology, StringifiedTechnologies } from '../technology'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import * as R from 'ramda'
import { useLocale } from '../../utils/hooks'

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

const home: HomeDataOnDisk = data
export const getProject = (locale: Locale): HomeData => {
  return filterByLocale(locale)(home)
  // const filteredHome = filterByLocale(locale)(home)
  // return convertTechnologies(filteredHome)
}

export const useHome: () => HomeData = R.pipe(useLocale, getProject)
