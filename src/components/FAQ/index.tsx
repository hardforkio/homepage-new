import React, { FunctionComponent } from 'react'

import { FAQPage } from '../../data/faqEntry/types'
import { useFAQPage } from '../../hooks/data'
import { FAQComponent } from './component'

export const FAQ: FunctionComponent = () => {
  const faqPageData: FAQPage = useFAQPage()
  return <FAQComponent {...faqPageData} />
}
