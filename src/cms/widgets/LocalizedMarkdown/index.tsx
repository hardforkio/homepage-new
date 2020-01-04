import { createLocalizedMarkdownControl } from './control'
import { createLocalizedMarkdownPreview } from './preview'
import { Locale } from '../../i18n-locales'

export const LocalizedMarkdownWidget = (locales: Locale[], opts = {}) => ({
  name: 'localizedMarkdown',
  controlComponent: createLocalizedMarkdownControl(locales),
  previewComponent: createLocalizedMarkdownPreview(locales),
  ...opts,
})
