import React, { FunctionComponent } from 'react'
import { FAQComponent } from './component'
import { useFAQPage } from '../../hooks/data'
import { FAQPage } from '../../data/faqEntry/types'

export const FAQ: FunctionComponent = () => {
  const faqPageData: FAQPage = useFAQPage()
  return <FAQComponent {...faqPageData} />
}
