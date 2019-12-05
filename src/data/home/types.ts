import { TranslationCollection } from '../types'
import { TranslationCollection as NewStyleTranslationCollection } from '../../cms/i18n-lib'
import { Head } from '../../components/Head'
import { TeamData, TeamDataOnDisk } from '../team'

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
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
  team?: TeamDataOnDisk
  contactFormLabels: ContactFormPropsOnDisk
} & TranslationCollection<{
  heroHeadline: string
  heroSubheadline: string
  contactHeadline: string
  contactDescription: string
  contactButtonText: string
  moreLinkText: string
  projectsHeadline: string
  emailButton: string
}>

export interface ContactFormProps {
  name: string
  company: string
  phone: string
  body: string
  submitButtonText: string
  submitButtonSuccessText: string
  resetButtonText: string
}

export interface ContactFormPropsOnDisk {
  name: NewStyleTranslationCollection<string>
  company: NewStyleTranslationCollection<string>
  phone: NewStyleTranslationCollection<string>
  body: NewStyleTranslationCollection<string>
  submitButtonText: NewStyleTranslationCollection<string>
  submitButtonSuccessText: NewStyleTranslationCollection<string>
  resetButtonText: NewStyleTranslationCollection<string>
}
