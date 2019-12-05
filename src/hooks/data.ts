import * as R from 'ramda'
import { getProjects } from '../data/project'
import { useLocale } from '../utils/hooks'
import { getNavbar } from '../data/navbar'
import { getImprint } from '../data/imprint'
import { getHome } from '../data/home'
import { getFooter } from '../data/footer'
import { getFAQPage } from '../data/faqEntry'
import { ProjectData } from '../data/project/types'
import { Navbar } from '../data/navbar/types'
import { Imprint } from '../data/imprint/types'
import { HomeData } from '../data/home/types'
import { FooterData } from '../data/footer/types'
import { FAQPage } from '../data/faqEntry/types'

export const useProjects: () => ProjectData[] = R.pipe(useLocale, getProjects)

export const useNavbar: () => Navbar = R.pipe(useLocale, getNavbar)

export const useImprint: () => Imprint = R.pipe(useLocale, getImprint)

export const useHome: () => HomeData = R.pipe(useLocale, getHome)

export const useFooter: () => FooterData = R.pipe(useLocale, getFooter)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)
