import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { filterByLocale } from '../../data/i18n'
import * as R from 'ramda'
import { Navbar as NavbarData } from '../../data/navbar/types'
import { SafeExternalLink } from '../../components/Link'
import { createPreview } from './Preview'
import { TranslationCollection, Locale } from '../../data/types'
import {
  NavbarComponent,
  NavbarComponentProps,
} from '../../components/Navbar/component'

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
