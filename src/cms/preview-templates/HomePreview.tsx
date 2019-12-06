import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { HomePageComponent } from '../../components/Home/component'
import { HomeData, HomeDataOnDisk } from '../../data/home/types'
import { createPreview } from './Preview'
import { translate, Locale } from '../i18n'
import { filterByLocale } from '../../data/i18n'
import { ProjectData } from '../../data/project/types'
import * as R from 'ramda'
import { getProjects } from '../../data/project'

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

const translator = (
  locale: Locale,
): ((json: HomeDataOnDisk) => HomeData & { projects: ProjectData[] }) =>
  R.pipe(
    filterByLocale(locale),
    translate(locale) as (_: any) => HomeData,
    R.mergeRight({ projects: getProjects(locale) }), //impure; necessary as the HomeDataOnDisk does not contain the Project Data that homepages display.
  )
