import React, { FunctionComponent, useState } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, Locale, getTranslation } from '../../data/i18n'
import { HomePageTemplate } from '../../components/Home'
import { HomeData } from '../../data/home'
import { LocalePicker } from './LocalePicker'

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const [locale, setLocale] = useState<Locale>('de')
  const data: TranslationCollection<HomeData> = getJSON(entry)
  const homeTranslated: HomeData = getTranslation(locale)(data)

  return (
    <>
      <LocalePicker currentLocale={locale} setLocale={setLocale} />
      <HomePageTemplate {...homeTranslated} />
    </>
  )
}
