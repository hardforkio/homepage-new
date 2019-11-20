import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslation } from '../../data/i18n'
import { FAQPage } from '../../data/faqEntry'
import { createPreview } from './Preview'
import { FAQComponent } from '../../components/FAQ/component'

const Preview = createPreview<TranslationCollection<FAQPage>, FAQPage>()

export const FAQPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={FAQComponent}
    data={getJSON(entry)}
    translator={getTranslation}
  />
)
