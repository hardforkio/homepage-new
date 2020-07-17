import '../../scss/main.scss'

import * as R from 'ramda'
import React, { ComponentProps, FunctionComponent } from 'react'

import { FooterComponent } from '../../components/Footer/component'
import { SafeExternalLink } from '../../components/Link'
import { FooterData, FooterDataOnDisk } from '../../data/footer/types'
import { getPathPrefix } from '../../utils/hooks'
import { Locale, translate } from '../i18n'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

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
    privacyLink: getPathPrefix(locale)('/privacy-policy'),
  })

const translator = (locale: Locale) =>
  R.pipe(translate(locale), mergeLinkProps(locale))
