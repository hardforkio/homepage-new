import * as R from 'ramda'
import data from './footer.json'
import {
  TranslationCollection,
  Locale,
  extractSingleTranslation,
} from '../i18n'
import { useLocale } from '../../utils/hooks'
export interface Footer {
  imprintLinkText: string
  githubLinkURL: string
  contactEmail: string
  copyrightText: string
}

const footer: TranslationCollection<Footer> = data
const getFooter = (locale: Locale) =>
  extractSingleTranslation<Footer>(locale)(footer)
export const useFooter: () => Footer = R.pipe(useLocale, getFooter)
