import test from 'tape'
import {
  Locale,
  TranslationCollection,
  getTranslation,
  getTranslations,
} from './i18n'

const EN: Locale = 'en'
const DE: Locale = 'de'

test('getTranslation selects the desired language version', test => {
  type Word = { word: string }
  const PET: TranslationCollection<Word> = {
    translations: [
      { locale: EN, word: 'dog' },
      { locale: DE, word: 'hund' },
    ],
  }

  test.plan(2)
  test.deepEqual(getTranslation(DE)(PET), { word: 'hund' })
  test.deepEqual(getTranslation(EN)(PET), { word: 'dog' })
})

test('getTranslation returns some language version, when user asks for a language that does not exist', test => {
  type Word = { word: string }
  const data: TranslationCollection<Word> = {
    translations: [{ locale: DE, word: 'hund' }],
  }

  test.plan(1)
  test.deepEqual(getTranslation(EN)(data), { word: 'hund' })
})

test('getTranslations gets a list of language versions', test => {
  type Word = { word: string }
  const PET: TranslationCollection<Word> = {
    translations: [
      { locale: EN, word: 'dog' },
      { locale: DE, word: 'hund' },
    ],
  }

  test.plan(1)
  test.deepEqual(getTranslations(PET), [
    { locale: EN, word: 'dog' },
    { locale: DE, word: 'hund' },
  ])
})
