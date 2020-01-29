import '../../scss/main.scss'

import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { FAQComponent } from '../../components/FAQ/component'
import { FAQPage, FAQPageOnDisk } from '../../data/faqEntry/types'
import { filterByLocale } from '../../data/i18n'
import { Locale, translate } from '../i18n'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

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
