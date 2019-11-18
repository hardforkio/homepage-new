import React, { FunctionComponent } from 'react'
import * as R from 'ramda'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'
import { HomePageTemplate } from '../../components/Home'
import { HomeData } from '../../data/home'

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const home: TranslationCollection<HomeData> = getJSON(entry)
  return <>{R.map(HomePageTemplate, getTranslations(home))}</>
}

export default HomePreview
