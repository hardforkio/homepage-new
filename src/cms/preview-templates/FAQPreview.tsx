import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'
import { FAQEntry } from '../../data/faqEntry'
import { FAQComponent } from '../../components/FAQ/component'

export const FAQPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const faq: TranslationCollection<FAQEntry> = getJSON(entry)
  const translations = getTranslations(faq)
  return (
    <>
      <FAQComponent title={'Test'} subtitle="" faqEntries={translations} />
    </>
  )
}

export default FAQPreview
