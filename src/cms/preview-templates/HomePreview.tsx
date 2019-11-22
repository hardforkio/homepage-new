import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home'
import { HomeData, HomeDataOnDisk, expandTeamMembers } from '../../data/home'
import { createPreview } from './Preview'
import { filterByLocale } from '../../data/i18n'

const Preview = createPreview<HomeDataOnDisk, HomeData>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  return (
    <Preview
      Component={HomePageComponent}
      data={expandTeamMembers(getJSON(entry))}
      translator={filterByLocale}
    />
  )
}
