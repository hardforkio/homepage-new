import test from 'tape'
import {
  Locale,
  TranslationCollection,
  getTranslation,
  getTranslations,
  getTranslationRecursively,
} from './i18n'

const EN: Locale = 'en'
const DE: Locale = 'de'

test('getTranslation selects the desired language version', test => {
  type Word = { word: string }
  const PET: TranslationCollection<Word> = {
    translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
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
    translations: [{ locale: EN, word: 'dog' }, { locale: DE, word: 'hund' }],
  }

  test.plan(1)
  test.deepEqual(getTranslations(PET), [
    { locale: EN, word: 'dog' },
    { locale: DE, word: 'hund' },
  ])
})

test('findTranslationRecursively on objects without translations', test => {
  test.deepEqual(getTranslationRecursively(DE)({}), {}, 'empty map')
  test.deepEqual(getTranslationRecursively(DE)([]), [], 'empty array')
  test.deepEqual(
    getTranslationRecursively(DE)({ key: 'value' }),
    {
      key: 'value',
    },
    'map without translations key',
  )
  test.deepEqual(
    getTranslationRecursively(DE)([{ key: 'value' }]),
    [
      {
        key: 'value',
      },
    ],
    'array without translations map',
  )
  test.end()
})

test('findTranslationRecursively on map', test => {
  const heroSection = {
    title: 'heroSection',
    translations: [
      { locale: EN, header: 'Welcome' },
      { locale: DE, header: 'Wilkommen' },
    ],
  }

  const landingPage = {
    title: 'landingPage',
    translations: [
      {
        locale: EN,
        heroSection: heroSection,
      },
      {
        locale: DE,
        heroSection: heroSection,
      },
    ],
  }

  test.deepEqual(getTranslationRecursively(DE)(landingPage), {
    heroSection: { header: 'Wilkommen' },
  })
  test.deepEqual(getTranslationRecursively(EN)(landingPage), {
    heroSection: { header: 'Welcome' },
  })
  test.end()
})

test('findTranslationRecursively on arrays', test => {
  const pets = [
    {
      title: 'dog',
      translations: [{ locale: EN, name: 'dog' }, { locale: DE, name: 'Hund' }],
    },
    {
      title: 'cat',
      translations: [
        { locale: EN, name: 'cat' },
        { locale: DE, name: 'Katze' },
      ],
    },
  ]

  const petsStore = {
    title: 'petStore',
    translations: [
      {
        locale: EN,
        pets: pets,
      },
      {
        locale: DE,
        pets: pets,
      },
    ],
  }

  test.deepEqual(getTranslationRecursively(DE)(petsStore), {
    pets: [{ name: 'Hund' }, { name: 'Katze' }],
  })
  test.deepEqual(getTranslationRecursively(EN)(petsStore), {
    pets: [{ name: 'dog' }, { name: 'cat' }],
  })
  test.end()
})
