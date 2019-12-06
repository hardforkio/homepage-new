import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { filterByLocale } from '../../data/i18n'
import { FAQPage, FAQPageOnDisk } from '../../data/faqEntry/types'
import { createPreview } from './Preview'
import { FAQComponent } from '../../components/FAQ/component'
import * as R from 'ramda'
import { Locale, translate } from '../i18n'

const Preview = createPreview<FAQPageOnDisk, FAQPage>()

export const FAQPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={FAQComponent}
    data={getJSON(entry)}
    translator={translator}
  />
)

const translator = (locale: Locale) =>
  R.pipe(filterByLocale(locale), translate(locale))
