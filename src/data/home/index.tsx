import data from './home.json'
import { filterByLocale } from '../i18n'
import { HomeDataOnDisk, HomeData } from './types'
import { Locale } from '../types'

const home: HomeDataOnDisk = data

export const getHome = (locale: Locale): HomeData =>
  filterByLocale(locale)(home)
