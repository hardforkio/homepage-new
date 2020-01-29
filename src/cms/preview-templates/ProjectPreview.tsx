import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { ProjectPageComponent } from '../../components/PastProjects/Page'
import { filterByLocale } from '../../data/i18n'
import { ProjectData, ProjectDataOnDisk } from '../../data/project/types'
import { expandTechnologies } from '../../data/technology'
import { Locale } from '../../data/types'
import { translate } from '../i18n'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

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
