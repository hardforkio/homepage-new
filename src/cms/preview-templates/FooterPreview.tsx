import React, { FunctionComponent, ComponentProps } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import {
  TranslationCollection,
  Locale,
  extractSingleTranslation,
} from '../../data/i18n'
import * as R from 'ramda'
import { Footer as FooterData } from '../../data/footer'
import { FooterComponent } from '../../components/Footer/component'
import { SafeExternalLink } from '../../components/Link'
import { createPreview } from './Preview'
import { getPathPrefix } from '../../utils/hooks'

const Preview = createPreview<
  TranslationCollection<FooterData>,
  ComponentProps<typeof FooterComponent>
>()

export const FooterPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={FooterComponent}
    data={getJSON(entry)}
    translator={translator}
  />
)

const mergeLinkProps: (
  locale: Locale,
) => (data: FooterData) => ComponentProps<typeof FooterComponent> = locale =>
  R.mergeLeft({
    ExternalLink: SafeExternalLink,
    InternalLink: SafeExternalLink,
    imprintLink: getPathPrefix(locale)('/imprint'),
  })

const translator: (
  locale: Locale,
) => (
  data: TranslationCollection<FooterData>,
) => ComponentProps<typeof FooterComponent> = locale =>
  R.pipe(extractSingleTranslation(locale), mergeLinkProps(locale))
