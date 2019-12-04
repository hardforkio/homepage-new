import * as R from 'ramda'
import { ProjectData, getProjects } from '../data/project'
import { useLocale } from '../utils/hooks'
import { Navbar, getNavbar } from '../data/navbar'
import { Imprint, getImprint } from '../data/imprint'
import { getHome, HomeData } from '../data/home'
import { getFooter, FooterData } from '../data/footer'
import { getFAQPage, FAQPage } from '../data/faqEntry'

export const useProjects: () => ProjectData[] = R.pipe(useLocale, getProjects)

export const useNavbar: () => Navbar = R.pipe(useLocale, getNavbar)

export const useImprint: () => Imprint = R.pipe(useLocale, getImprint)

export const useHome: () => HomeData = R.pipe(useLocale, getHome)

export const useFooter: () => FooterData = R.pipe(useLocale, getFooter)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)
