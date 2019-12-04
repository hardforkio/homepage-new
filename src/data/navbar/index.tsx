import { Locale, TranslationCollection, filterByLocale } from '../i18n'
import data from './navbar.json'

export interface Navbar {
  contactLinkText: string
  FAQLinkText: string
}

const navbar: TranslationCollection<Navbar> = data

export const getNavbar = (locale: Locale): Navbar =>
  filterByLocale(locale)(navbar)
