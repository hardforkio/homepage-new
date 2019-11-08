import { Locale, Localized, getTranslation, getTranslations } from './i18n'

const EN: Locale = 'en'
const DE: Locale = 'de'

describe('getTranslation', () => {
  it('selects the desired language version', () => {
    type Word = { word: string }
    const PET: Localized<Word> = {
      translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
    }

    expect(getTranslation(DE)(PET)).toEqual({ word: 'hund' })
    expect(getTranslation(EN)(PET)).toEqual({ word: 'dog' })
  })
})

describe('getTranslations', () => {
  it('gets a list of language versions', () => {
    type Word = { word: string }
    const PET: Localized<Word> = {
      translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
    }

    expect(getTranslations(PET)).toEqual([
      { locale: EN, word: 'dog' },
      { locale: DE, word: 'hund' },
    ])
  })
})
