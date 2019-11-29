import React, { FunctionComponent, ComponentProps } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import * as R from 'ramda'
import { FooterData, FooterDataOnDisk } from '../../data/footer'
import { FooterComponent } from '../../components/Footer/component'
import { SafeExternalLink } from '../../components/Link'
import { createPreview } from './Preview'
import { getPathPrefix } from '../../utils/hooks'
import { translate } from '../widgets/i18n'
import { Locale } from '../../data/i18n'

const Preview = createPreview<
  FooterDataOnDisk,
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

const translator = (locale: Locale) =>
  R.pipe(translate(locale), mergeLinkProps(locale))
