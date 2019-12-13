import { TranslationCollection as TranslationCollectionOld } from '../types'
import { Head, HeadLocalized } from '../head/types'
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
  contactFormLabels: ContactFormProps
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollectionOld<Offering>[]
  contactEmail: string
  head: HeadLocalized
  team?: TeamDataOnDisk
  contactFormLabels: ContactFormPropsOnDisk
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
export interface ContactFormProps {
  name: string
  company: string
  phone: string
  body: string
  resetButtonText: string
}

export interface ContactFormPropsOnDisk {
  name: TranslationCollection<string>
  company: TranslationCollection<string>
  phone: TranslationCollection<string>
  body: TranslationCollection<string>
  resetButtonText: TranslationCollection<string>
}
