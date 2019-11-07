import React, { FunctionComponent } from 'react'
import { ImprintComponent } from '../../components/Imprint'
import { getTranslations, Localized } from '../../data/queryHelpers'
import * as R from 'ramda'
import { Imprint } from '../../data/imprint'
import { PreviewProps, getJSON } from './helpers'

export const ImprintPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const imprint: Localized<Imprint> = getJSON(entry)
  return <>{R.map(ImprintComponent, getTranslations(imprint))}</>
}

export default ImprintPreview
