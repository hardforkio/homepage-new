import * as R from 'ramda'

import { Locale, translate } from '../../cms/i18n'
import { filterByLocale } from '../i18n'
import data from './faq.json'
import { FAQPage, FAQPageOnDisk } from './types'

const faq: FAQPageOnDisk = data

export const getFAQPage = (locale: Locale): FAQPage =>
  R.pipe(filterByLocale(locale), translate(locale))(faq)
