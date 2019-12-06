import { Technology } from '../technology/types'
import { Head } from '../../components/Head'
import { TranslationCollection as TranslationCollectionOld } from '../types'
import { TranslationCollection } from '../../cms/i18n-lib'

export type ProjectData = {
  usedTechnologies: Technology[]
  slug: string
  head: Head
} & TranslatedProjectData

export interface TranslatedProjectData {
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  responsibilities: string
}

export type ProjectDataOnDisk = {
  usedTechnologies: Technology[]
  slug: string
  head: TranslationCollection<Head>
} & TranslationCollectionOld<TranslatedProjectData>
