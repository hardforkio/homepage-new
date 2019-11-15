import test from 'tape'
import {
  Locale,
  TranslationCollection,
  extractSingleTranslation,
  getTranslations,
  filterByLocale,
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
  test.deepEqual(extractSingleTranslation(DE)(PET), { word: 'hund' })
  test.deepEqual(extractSingleTranslation(EN)(PET), { word: 'dog' })
})

test('getTranslation returns some language version, when user asks for a language that does not exist', test => {
  type Word = { word: string }
  const data: TranslationCollection<Word> = {
    translations: [{ locale: DE, word: 'hund' }],
  }

  test.plan(1)
  test.deepEqual(extractSingleTranslation(EN)(data), { word: 'hund' })
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

test('findTranslationRecursively on objects without translations', test => {
  test.deepEqual(filterByLocale(DE)({}), {}, 'empty map')
  test.deepEqual(filterByLocale(DE)([]), [], 'empty array')
  test.deepEqual(
    filterByLocale(DE)({ key: 'value' }),
    {
      key: 'value',
    },
    'map without translations key',
  )
  test.deepEqual(
    filterByLocale(DE)([{ key: 'value' }]),
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

  test.deepEqual(filterByLocale(DE)(landingPage), {
    heroSection: { header: 'Wilkommen' },
  })
  test.deepEqual(filterByLocale(EN)(landingPage), {
    heroSection: { header: 'Welcome' },
  })
  test.end()
})

test('findTranslationRecursively on arrays', test => {
  const pets = [
    {
      title: 'dog',
      translations: [
        { locale: EN, name: 'dog' },
        { locale: DE, name: 'Hund' },
      ],
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
    name: 'Johnnies Pets and Toys',
    translations: [
      {
        locale: DE,
        description: 'Viele Tiere und keine Spielzeuge',
        pets: pets[0],
        toys: {
          number: 4,
          price: 10,
        },
      },
      {
        locale: EN,
        description: 'A lot of pets and some toys',
        pets,
      },
    ],
  }

  test.deepEqual(filterByLocale(DE)(petsStore), {
    name: 'Johnnies Pets and Toys',
    description: 'Viele Tiere und keine Spielzeuge',
    pets: [{ name: 'Hund' }],
    toys: {
      number: 4,
      price: 10,
    },
  })
  test.deepEqual(filterByLocale(EN)(petsStore), {
    name: 'Johnnies Pets and Toys',
    description: 'A lot of pets and some toys',
    pets: [{ name: 'dog' }, { name: 'cat' }],
  })
  test.end()
})
