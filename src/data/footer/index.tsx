import * as R from 'ramda'
import data from './footer.json'
import { useLocale } from '../../utils/hooks'
import { translate, Locale } from '../../cms/i18n'
import { TranslationCollection } from '../../cms/i18n-lib'

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
const getFooter = (locale: Locale): FooterData =>
  translate(locale)(typecheckedData)
export const useFooter = R.pipe(useLocale, getFooter)
