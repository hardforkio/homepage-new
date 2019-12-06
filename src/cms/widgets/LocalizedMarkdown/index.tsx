import { createLocalizedMarkdownControl } from './control'
import { Locale } from '../../i18n-locales'

export const LocalizedMarkdownWidget = (locales: Locale[], opts = {}) => ({
  name: 'localizedMarkdown',
  controlComponent: createLocalizedMarkdownControl(locales),
  ...opts,
})
