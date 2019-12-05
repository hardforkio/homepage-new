import * as R from 'ramda'
import { FAQPage, FAQEntry } from './types'

export const hasFAQEntries: (faqPage: FAQPage) => boolean = R.pipe<
  FAQPage,
  FAQEntry[],
  number,
  boolean
>(R.prop('faqEntries'), R.length, R.lte(1))
