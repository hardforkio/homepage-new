import { filterByLocale } from '../i18n'
import data from './navbar.json'
import { Navbar } from './types'
import { TranslationCollection, Locale } from '../types'

const navbar: TranslationCollection<Navbar> = data

export const getNavbar = (locale: Locale): Navbar =>
  filterByLocale(locale)(navbar)
