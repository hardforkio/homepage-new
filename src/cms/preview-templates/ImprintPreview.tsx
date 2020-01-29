import React, { FunctionComponent } from 'react'

import { ImprintComponent } from '../../components/Imprint/component'
import { filterByLocale } from '../../data/i18n'
import { Imprint, ImprintPageOnDisk } from '../../data/imprint/types'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

const Preview = createPreview<ImprintPageOnDisk, Imprint>()

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ImprintComponent}
    data={getJSON(entry)}
    translator={filterByLocale}
  />
)
