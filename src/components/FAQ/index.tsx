import React, { FunctionComponent } from 'react'
import { FAQComponent } from './component'
import { FAQEntry, useFAQEntries } from '../../data/faqEntry'

export const FAQ: FunctionComponent<{}> = () => {
  const faqs: FAQEntry[] = useFAQEntries()
  return <FAQComponent faqEntries={faqs} title="FAQs" subtitle="" />
}
