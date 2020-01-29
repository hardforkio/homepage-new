import { filterByLocale } from '../i18n'
import { Locale, TranslationCollection } from '../types'
import data from './navbar.json'
import { Navbar } from './types'

const navbar: TranslationCollection<Navbar> = data

export const getNavbar = (locale: Locale): Navbar =>
  filterByLocale(locale)(navbar)
