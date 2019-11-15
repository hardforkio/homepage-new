import React, { FunctionComponent } from 'react'
import { FAQComponent } from './component'
import { useFAQPage, FAQPage } from '../../data/faqEntry'

export const FAQ: FunctionComponent = () => {
  const faqPageData: FAQPage = useFAQPage()
  return <FAQComponent {...faqPageData} />
}
