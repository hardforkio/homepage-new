import React, { FunctionComponent, useState } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, Locale, getTranslation } from '../../data/i18n'
import { FAQPage } from '../../data/faqEntry'
import { LocalePicker } from './LocalePicker'
import { FAQComponent } from '../../components/FAQ/component'

export const FAQPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const [locale, setLocale] = useState<Locale>('de')
  const data: TranslationCollection<FAQPage> = getJSON(entry)
  const translated: FAQPage = getTranslation(locale)(data)

  return (
    <>
      <LocalePicker currentLocale={locale} setLocale={setLocale} />
      <FAQComponent {...translated} />
    </>
  )
}

export default FAQPreview
