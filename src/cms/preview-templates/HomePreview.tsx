import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslation } from '../../data/i18n'
import { HomePageComponent } from '../../components/Home'
import { HomeData } from '../../data/home'
import { createPreview } from './Preview'

const Preview = createPreview<TranslationCollection<HomeData>, HomeData>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={HomePageComponent}
    data={getJSON(entry)}
    translator={getTranslation}
  />
)
