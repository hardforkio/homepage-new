import * as R from 'ramda'
import { Locale, TranslationCollection, filterByLocale } from '../i18n'
import { useLocale } from '../../utils/hooks'
import data from './navbar.json'

export interface Navbar {
  contactLinkText: string
  FAQLinkText: string
}

const navbar: TranslationCollection<Navbar> = data

const getNavbar = (locale: Locale): Navbar => filterByLocale(locale)(navbar)

export const useNavbar: () => Navbar = R.pipe(useLocale, getNavbar)
