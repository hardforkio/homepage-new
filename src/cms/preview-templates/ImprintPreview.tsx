import React, { FunctionComponent } from 'react'
import { ImprintComponent } from '../../components/Imprint'
import * as R from 'ramda'
import { Imprint } from '../../data/imprint'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const imprint: TranslationCollection<Imprint> = getJSON(entry)
  return <>{R.map(ImprintComponent, getTranslations(imprint))}</>
}

export default ImprintPreview
