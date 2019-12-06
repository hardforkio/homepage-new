import { TranslationCollection as TranslationCollectionOld } from '../types'
import { Head, HeadLocalized } from '../../components/Head'
import { TeamData, TeamDataOnDisk } from '../team'
import { TranslationCollection } from '../../cms/i18n-lib'

export interface Offering {
  headline: string
  image: string
  text: string
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
  head: Head
  metaTitle: string
  metaDescription: string
  projectsHeadline: string
  team: TeamData
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollectionOld<Offering>[]
  contactEmail: string
  head: HeadLocalized
  team?: TeamDataOnDisk
} & {
  heroHeadline: TranslationCollection<string>
  heroSubheadline: TranslationCollection<string>
  contactHeadline: TranslationCollection<string>
  contactDescription: TranslationCollection<string>
  contactButtonText: TranslationCollection<string>
  moreLinkText: TranslationCollection<string>
  projectsHeadline: TranslationCollection<string>
  emailButton: TranslationCollection<string>
}
