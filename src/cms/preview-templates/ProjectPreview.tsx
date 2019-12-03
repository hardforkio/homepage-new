import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { filterByLocale, Locale } from '../../data/i18n'
import { createPreview } from './Preview'
import { ProjectPageComponent } from '../../components/PastProjects/Page'
import { ProjectData } from '../../data/project'
import { convertTechnologies } from '../../data/helpers'

const Preview = createPreview<ProjectData, ProjectData>()

export const ProjectPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ProjectPageComponent}
    data={getJSON(entry)}
    translator={translateAndConvert}
  />
)

const translateAndConvert = (locale: Locale) => (data: any) => {
  const filteredProject = filterByLocale(locale)(data)
  return convertTechnologies(filteredProject)
}
