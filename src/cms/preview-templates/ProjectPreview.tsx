import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { createPreview } from './Preview'
import { ProjectPageComponent } from '../../components/PastProjects/Page'
import { ProjectData, ProjectDataOnDisk } from '../../data/project/types'
import { translateAndConvert } from '../../data/project/helpers'

const Preview = createPreview<ProjectDataOnDisk, ProjectData>()

export const ProjectPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ProjectPageComponent}
    data={getJSON(entry)}
    translator={translateAndConvert}
  />
)
