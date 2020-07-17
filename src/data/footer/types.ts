import { TranslationCollection } from '../../cms/i18n-lib'

export interface FooterData {
  imprintLinkText: string
  privacyLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

export interface FooterDataOnDisk {
  imprintLinkText?: TranslationCollection<string>
  privacyLinkText?: TranslationCollection<string>
  githubLinkURL?: string
  contactEmail?: string
  copyrightText?: string
}
