import * as R from 'ramda'

import { getFAQPage } from '../data/faqEntry'
import { FAQPage } from '../data/faqEntry/types'
import { getFooter } from '../data/footer'
import { FooterData } from '../data/footer/types'
import { getHome } from '../data/home'
import { HomeData } from '../data/home/types'
import { getImprint } from '../data/imprint'
import { Imprint } from '../data/imprint/types'
import { getProjects } from '../data/project'
import { ProjectData } from '../data/project/types'
import { useLocale } from '../utils/hooks'

export const useProjects: () => ProjectData[] = R.pipe(useLocale, getProjects)

export const useImprint: () => Imprint = R.pipe(useLocale, getImprint)

export const useHome: () => HomeData = R.pipe(useLocale, getHome)

export const useFooter: () => FooterData = R.pipe(useLocale, getFooter)

export const useFAQPage: () => FAQPage = R.pipe(useLocale, getFAQPage)
