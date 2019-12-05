import { TranslationCollection } from '../types'
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
}

export type HomeDataOnDisk = {
  id: string
  offerings: TranslationCollection<Offering>[]
  contactEmail: string
  head: TranslationCollection<Head>
  team?: TeamDataOnDisk
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
