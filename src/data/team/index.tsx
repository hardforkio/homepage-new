import { SocialMediaData } from '../../components/Team/SocialIcon'

// NOTE: using the new i18n library
import { TranslationCollection } from '../../cms/i18n-lib'
type LocalizedString = TranslationCollection<string>

export interface TeamDataOnDisk {
  header: LocalizedString
  subheader: LocalizedString
  footer: LocalizedString
  members: TeamMemberDataOnDisk[]
}

export interface TeamMemberDataOnDisk {
  uuid: string
  name: string
  jobTitle: LocalizedString
  degree: LocalizedString
  avatar: string
  socialMedia: SocialMediaData[]
}

export interface TeamData {
  header: string
  subheader: string
  footer: string
  members: TeamMemberData[]
}

export interface TeamMemberData {
  uuid: string
  name: string
  jobTitle: string
  degree: string
  avatar: string
  socialMedia: SocialMediaData[]
}
