import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageTemplate } from '../../components/Home'
import { HomeData, HomeDataOnDisk } from '../../data/home'
import { createPreview } from './Preview'
import { filterByLocale } from '../../data/i18n'

const Preview = createPreview<HomeDataOnDisk, HomeData>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={HomePageTemplate}
    data={getJSON(entry)}
    translator={filterByLocale}
  />
)
