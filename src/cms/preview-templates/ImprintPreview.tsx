import React, { FunctionComponent } from 'react'
import { ImprintComponent } from '../../components/Imprint'
import { Imprint, ImprintPageOnDisk } from '../../data/imprint'
import { PreviewProps, getJSON } from './helpers'
import { filterByLocale } from '../../data/i18n'
import { createPreview } from './Preview'

const Preview = createPreview<ImprintPageOnDisk, Imprint>()

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ImprintComponent}
    data={getJSON(entry)}
    translator={filterByLocale}
  />
)
