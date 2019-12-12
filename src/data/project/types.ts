import { Technology } from '../technology/types'
import { Head, HeadLocalized } from '../head/types'
import { TranslationCollection as TranslationCollectionOld } from '../types'

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
  head: HeadLocalized
} & TranslationCollectionOld<TranslatedProjectData>
