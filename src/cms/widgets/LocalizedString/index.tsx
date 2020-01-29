import { TranslationCollection } from '../../i18n-lib'
import { Locale } from '../../i18n-locales'
import { createLocalizedStringControl } from './control'

export type LocalizedString = TranslationCollection<string>

export const LocalizedStringWidget = (locales: Locale[], opts = {}) => ({
  name: 'localizedString',
  controlComponent: createLocalizedStringControl(locales),
  ...opts,
})
