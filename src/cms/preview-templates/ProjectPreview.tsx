import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { createPreview } from './Preview'
import { ProjectPageComponent } from '../../components/PastProjects/Page'
import {
  ProjectData,
  translateAndConvert,
  ProjectDataOnDisk,
} from '../../data/project'

const Preview = createPreview<ProjectDataOnDisk, ProjectData>()

export const ProjectPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ProjectPageComponent}
    data={getJSON(entry)}
    translator={translateAndConvert}
  />
)
