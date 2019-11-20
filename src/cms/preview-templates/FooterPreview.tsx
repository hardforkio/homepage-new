import React, { FunctionComponent, ComponentProps } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'
import * as R from 'ramda'
import { Footer as FooterData } from '../../data/footer'
import { Footer as FooterComponent } from '../../components/Footer/component'
import { SafeExternalLink } from '../../components/Link'

export const FooterPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const data: TranslationCollection<FooterData> = getJSON(entry)
  return (
    <>{R.map(FooterComponent, R.map(mergeLinkProps, getTranslations(data)))}</>
  )
}

const mergeLinkProps: (
  data: FooterData,
) => ComponentProps<typeof FooterComponent> = R.mergeLeft({
  ExternalLink: SafeExternalLink,
  InternalLink: SafeExternalLink,
})
