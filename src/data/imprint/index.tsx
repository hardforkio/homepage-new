import * as R from 'ramda'
import { Locale, getTranslation, Localized } from '../i18n'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  content: string
}

const importAll = (r: any) => r.keys().map(r)
const data: Localized<Imprint>[] = importAll(
  require.context('./', true, /\.json$/),
) //Implements ' import data from './*.json ' From https://webpack.js.org/guides/dependency-management/#context-module-api

export const getImprints = (locale: Locale): Imprint[] =>
  R.map(getTranslation(locale), data)

export default getImprints
