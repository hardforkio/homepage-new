import * as R from 'ramda'

import { translate } from '../../cms/i18n'
import { filterByLocale } from '../i18n'
import { Locale } from '../types'
import data from './imprint.json'
import { Imprint, ImprintPageOnDisk } from './types'

const imprint: ImprintPageOnDisk = data

export const getImprint = (locale: Locale): Imprint =>
  R.pipe(filterByLocale(locale), translate(locale))(imprint)
