import { TranslationCollection } from '../../cms/i18n-lib'

export interface Head {
  title: string
  meta: {
    description: string
    keywords: string
  }
}

export interface HeadLocalized {
  title: TranslationCollection<string>
  meta: {
    description: TranslationCollection<string>
    keywords: TranslationCollection<string>
  }
}
