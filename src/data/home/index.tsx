import * as R from 'ramda'

import { translate } from '../../cms/i18n'
import { useLocale } from '../../utils/hooks'
import { filterByLocale } from '../i18n'
import { Locale } from '../types.js'
import data from './home.json'
import { HomeData, HomeDataOnDisk } from './types.js'

// FIXME: Mixes old and new translation methods
const home: HomeDataOnDisk = data
export const getHome = (locale: Locale): HomeData =>
  R.pipe<HomeDataOnDisk, any, any>(
    filterByLocale(locale),
    translate(locale),
  )(home)

export const useHome: () => HomeData = R.pipe(useLocale, getHome)
