import { filterByLocale } from '../i18n'
import data from './imprint.json'
import { ImprintPageOnDisk, Imprint } from './types'
import { Locale } from '../types'
import { translate } from '../../cms/i18n'
import * as R from 'ramda'

const imprint: ImprintPageOnDisk = data

export const getImprint = (locale: Locale): Imprint =>
  R.pipe(filterByLocale(locale), translate(locale))(imprint)
