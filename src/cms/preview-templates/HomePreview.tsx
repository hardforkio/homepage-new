import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { HomePageComponent } from '../../components/Home/component'
import { HomeData, HomeDataOnDisk } from '../../data/home/types'
import { filterByLocale } from '../../data/i18n'
import { getProjects } from '../../data/project'
import { ProjectData } from '../../data/project/types'
import { Locale, translate } from '../i18n'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

const Preview = createPreview<
  HomeDataOnDisk,
  HomeData & { projects: ProjectData[] }
>()

export const HomePreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const data: HomeDataOnDisk = getJSON(entry)
  return (
    <Preview
      Component={HomePageComponent}
      data={data}
      translator={translator}
    />
  )
}

const translator = (
  locale: Locale,
): ((json: HomeDataOnDisk) => HomeData & { projects: ProjectData[] }) =>
  R.pipe(
    filterByLocale(locale),
    translate(locale) as (_: any) => HomeData,
    R.mergeRight({ projects: getProjects(locale) }), //impure; necessary as the HomeDataOnDisk does not contain the Project Data that homepages display.
  )
