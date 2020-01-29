import { Locale, translate } from '../../cms/i18n'
import data from './footer.json'
import { FooterData, FooterDataOnDisk } from './types.js'

// TODO: add type analysis of imported data
//       checkout https://github.com/pelotom/runtypes
const typecheckedData: FooterDataOnDisk = data

export const getFooter = (locale: Locale): FooterData =>
  translate(locale)(typecheckedData)
