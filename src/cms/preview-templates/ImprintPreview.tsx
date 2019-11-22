import React, { FunctionComponent } from 'react'
import { ImprintComponent } from '../../components/Imprint'
import { Imprint } from '../../data/imprint'
import { PreviewProps, getJSON } from './helpers'
import {
  TranslationCollection,
  extractSingleTranslation,
} from '../../data/i18n'
import { createPreview } from './Preview'

const Preview = createPreview<TranslationCollection<Imprint>, Imprint>()

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={ImprintComponent}
    data={getJSON(entry)}
    translator={extractSingleTranslation}
  />
)
