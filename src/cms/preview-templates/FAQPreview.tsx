import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'
import { FAQPage } from '../../data/faqEntry'
import { FAQComponent } from '../../components/FAQ/component'
import * as R from 'ramda'

export const FAQPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const faq: TranslationCollection<FAQPage> = getJSON(entry)
  return <>{R.map(FAQComponent, getTranslations(faq))}</>
}

export default FAQPreview
