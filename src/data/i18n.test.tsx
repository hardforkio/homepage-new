import test from 'tape'
import {
  Locale,
  Localized,
  getTranslation,
  getTranslations,
  assertHasAllLocales,
} from './i18n'

const EN: Locale = 'en'
const DE: Locale = 'de'

test('getTranslation selects the desired language version', test => {
  type Word = { word: string }
  const data: Localized<Word> = {
    translations: [
      { locale: 'en', word: 'dog' },
      { locale: 'de', word: 'hund' },
    ],
  }

  test.plan(2)
  test.deepEqual(getTranslation(DE)(data), { word: 'hund' })
  test.deepEqual(getTranslation(EN)(data), { word: 'dog' })
})

test('getTranslations gets a list of language versions', test => {
  type Word = { word: string }
  const data: Localized<Word> = {
    translations: [
      { locale: 'en', word: 'dog' },
      { locale: 'de', word: 'hund' },
    ],
  }

  test.plan(1)
  test.deepEqual(getTranslations(data), [
    { locale: 'en', word: 'dog' },
    { locale: 'de', word: 'hund' },
  ])
})

test('assertHasAllLocales throws when the data does not contain all valid language versions', test => {
  type Word = { word: string }
  const data: Localized<Word> = {
    translations: [
      { locale: 'en', word: 'dog' },
      { locale: 'hu', word: 'kutya' },
    ],
  }

  test.plan(1)
  test.throws(() => assertHasAllLocales(data))
})
test('assertHasAllLocales does not throw when the data has all valid language versions', test => {
  type Word = { word: string }
  const data: Localized<Word> = {
    translations: [
      { locale: 'en', word: 'dog' },
      { locale: 'de', word: 'dog' },
    ],
  }

  test.plan(1)
  test.doesNotThrow(() => assertHasAllLocales(data))
})
