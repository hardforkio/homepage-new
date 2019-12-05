import data from './footer.json'
import { translate, Locale } from '../../cms/i18n'
import { FooterDataOnDisk, FooterData } from './types.js'

// TODO: add type analysis of imported data
//       checkout https://github.com/pelotom/runtypes
const typecheckedData: FooterDataOnDisk = data

export const getFooter = (locale: Locale): FooterData =>
  translate(locale)(typecheckedData)
