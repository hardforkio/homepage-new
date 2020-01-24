import { createLocalizedObjectControl } from './control'
import { createLocalizedObjectPreview } from './preview'
import { Locale } from '../../i18n-locales'

export const LocalizedObjectWidget = (locales: Locale[], opts = {}) => ({
  name: 'localizedObject',
  controlComponent: createLocalizedObjectControl(locales),
  previewComponent: createLocalizedObjectPreview(locales),
  ...opts,
})
