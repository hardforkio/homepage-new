import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home'
import { HomeData, HomeDataOnDisk } from '../../data/home'
import { createPreview } from './Preview'
import { translate, Locale } from '../i18n'
import { filterByLocale } from '../../data/i18n'
import * as R from 'ramda'

const Preview = createPreview<HomeDataOnDisk, HomeData>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  return (
    <Preview
      Component={HomePageComponent}
      data={getJSON(entry)}
      translator={translator}
    />
  )
}

const translator = (locale: Locale) =>
  R.pipe(filterByLocale(locale), translate(locale))
