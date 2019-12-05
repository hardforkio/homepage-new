import React, { FunctionComponent } from 'react'
import { PreviewProps, getJSON } from './helpers'
import { createPreview } from './Preview'
import { ProjectPageComponent } from '../../components/PastProjects/Page'
import { ProjectData, ProjectDataOnDisk } from '../../data/project/types'
import * as R from 'ramda'
import { Locale } from '../../data/types'
import { translate } from '../i18n'
import { filterByLocale } from '../../data/i18n'
import { expandTechnologies } from '../../data/technology'

const Preview = createPreview<ProjectDataOnDisk, ProjectData>()

export const ProjectPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ProjectPageComponent}
    data={getJSON(entry)}
    translator={translator}
  />
)

const translator = (locale: Locale) =>
  R.pipe(expandTechnologies, filterByLocale(locale), translate(locale))
