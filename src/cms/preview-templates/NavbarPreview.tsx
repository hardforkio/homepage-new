import '../../scss/main.scss'

import * as R from 'ramda'
import React, { FunctionComponent } from 'react'

import { SafeExternalLink } from '../../components/Link'
import {
  NavbarComponent,
  NavbarComponentProps,
} from '../../components/Navbar/component'
import { filterByLocale } from '../../data/i18n'
import { Navbar as NavbarData } from '../../data/navbar/types'
import { Locale, TranslationCollection } from '../../data/types'
import { getJSON, PreviewProps } from './helpers'
import { createPreview } from './Preview'

const Preview = createPreview<
  TranslationCollection<NavbarData>,
  NavbarComponentProps
>()

export const NavbarPreview: FunctionComponent<PreviewProps> = ({ entry }) => (
  <Preview
    Component={NavbarComponent}
    data={getJSON(entry)}
    translator={translator}
  />
)

const mergeLinkProps: (data: NavbarData) => NavbarComponentProps = R.mergeLeft({
  linkTag: SafeExternalLink,
})

const translator: (
  locale: Locale,
) => (
  data: TranslationCollection<NavbarData>,
) => NavbarComponentProps = locale =>
  R.pipe(filterByLocale(locale), mergeLinkProps)
