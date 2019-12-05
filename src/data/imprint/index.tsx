import { filterByLocale } from '../i18n'
import data from './imprint.json'
import { ImprintPageOnDisk, Imprint } from './types'
import { Locale } from '../types'

const imprint: ImprintPageOnDisk = data

export const getImprint = (locale: Locale): Imprint =>
  filterByLocale(locale)(imprint)
