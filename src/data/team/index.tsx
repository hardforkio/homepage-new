import { TranslationCollection } from '../i18n'
import { importAll } from '../helpers'
import { SocialMediaData } from '../../components/Team/SocialIcon'

export const teamMembers = importAll<TeamMemberData>(
  require.context('./member/', true, /\.json$/),
)

export interface TeamMemberData {
  uuid: string
  name: string
  jobTitle: string
  degree: string
  avatar: string
  socialMedia: SocialMediaData[]
}

export interface TeamData {
  header: string
  subheader: string
  footer: string
  members: TeamMemberData[]
}

type Relation = string[]
export type TeamDataOnDisk = TranslationCollection<{
  header: string
  subheader: string
  footer: string
}> & { members: Relation }
