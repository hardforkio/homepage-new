import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home'
import { HomeData, HomeDataOnDisk } from '../../data/home'
import { createPreview } from './Preview'
import { filterByLocale } from '../../data/i18n'
import { ProjectProps } from '../../data/project'

const Preview = createPreview<
  HomeDataOnDisk,
  HomeData & { projects: ProjectProps[] }
>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={HomePageComponent}
    data={getJSON(entry)}
    translator={filterByLocale}
  />
)
