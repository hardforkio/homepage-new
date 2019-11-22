import { createLocalizedStringControl } from './control'
import { Locale } from '../../i18n-locales'

export const LocalizedStringWidget = (locales: Locale[], opts = {}) => ({
  name: 'localizedString',
  controlComponent: createLocalizedStringControl(locales),
  ...opts,
})
