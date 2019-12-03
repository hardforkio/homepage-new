import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home'
import { HomeData, HomeDataOnDisk } from '../../data/home'
import { createPreview } from './Preview'
import { translate } from '../i18n'

const Preview = createPreview<HomeDataOnDisk, HomeData>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  return (
    <Preview
      Component={HomePageComponent}
      data={getJSON(entry)}
      translator={translate}
    />
  )
}
