import { Technology } from '../technology/types'
import { Head } from '../../components/Head'
import { TranslationCollection } from '../types'

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
  usedTechnologies: string[]
  slug: string
  head: TranslationCollection<Head>
} & TranslationCollection<TranslatedProjectData>
