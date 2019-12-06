import { filterByLocale } from '../i18n'
import data from './faq.json'
import { FAQPageOnDisk, FAQPage } from './types'
import { Locale, translate } from '../../cms/i18n'
import * as R from 'ramda'

const faq: FAQPageOnDisk = data

export const getFAQPage = (locale: Locale): FAQPage =>
  R.pipe(filterByLocale(locale), translate(locale))(faq)
