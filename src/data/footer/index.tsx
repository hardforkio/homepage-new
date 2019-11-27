import * as R from 'ramda'
import data from './footer.json'
import { Locale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import { Localized, translate } from '../../cms/widgets/helpers'

export interface FooterData {
  imprintLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

export interface FooterDataOnDisk {
  imprintLinkText?: Localized<string>[]
  githubLinkURL?: string
  contactEmail?: string
  copyrightText?: string
}

// TODO: add type analysis of imported data
//       checkout https://github.com/pelotom/runtypes
const getFooter = (locale: Locale): FooterData => translate(locale)(data)
export const useFooter = R.pipe(useLocale, getFooter)
