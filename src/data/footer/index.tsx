import data from './footer.json'
import { translate, Locale, TranslationCollection } from '../../cms/i18n'

export interface FooterData {
  imprintLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

export interface FooterDataOnDisk {
  imprintLinkText?: TranslationCollection<string>
  githubLinkURL?: string
  contactEmail?: string
  copyrightText?: string
}

// TODO: add type analysis of imported data
//       checkout https://github.com/pelotom/runtypes
const typecheckedData: FooterDataOnDisk = data

export const getFooter = (locale: Locale): FooterData =>
  translate(locale)(typecheckedData)
