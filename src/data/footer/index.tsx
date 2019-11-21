import * as R from 'ramda'
import data from './footer.json'
import { TranslationCollection, Locale, getTranslation } from '../i18n'
import { useLocale } from '../../utils/hooks'
export interface Footer {
  imprintLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

const footer: TranslationCollection<Footer> = data
const getFooter = (locale: Locale) => getTranslation<Footer>(locale)(footer)
export const useFooter: () => Footer = R.pipe(useLocale, getFooter)
