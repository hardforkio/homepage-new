import React, { FunctionComponent, useState } from 'react'
import { ImprintComponent } from '../../components/Imprint'
import { Imprint } from '../../data/imprint'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslation, Locale } from '../../data/i18n'
import { HomeData } from '../../data/home'
import { LocalePicker } from './LocalePicker'

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const [locale, setLocale] = useState<Locale>('de')
  const data: TranslationCollection<HomeData> = getJSON(entry)
  const translated: Imprint = getTranslation(locale)(data)

  return (
    <>
      <LocalePicker currentLocale={locale} setLocale={setLocale} />
      <ImprintComponent {...translated} />
    </>
  )
}

export default ImprintPreview
