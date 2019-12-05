import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home/component'
import { HomeData, HomeDataOnDisk } from '../../data/home/types'
import { createPreview } from './Preview'
import { translate, Locale } from '../i18n'
import { filterByLocale } from '../../data/i18n'
import { ProjectData } from '../../data/project/types'
import * as R from 'ramda'

const Preview = createPreview<
  HomeDataOnDisk,
  HomeData & { projects: ProjectData[] }
>()

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
