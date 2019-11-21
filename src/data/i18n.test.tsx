import test from 'tape'
import {
  Locale,
  TranslationCollection,
  getTranslations,
  filterByLocale,
  extractSingleTranslation,
} from './i18n'

const EN: Locale = 'en'
const DE: Locale = 'de'

test('extractSingleTranslation selects the desired language version', test => {
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

test('extractSingleTranslation returns some language version, when user asks for a language that does not exist', test => {
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

test('filterByLocal on basic objects', test => {
  test.deepEqual(filterByLocale(DE)({}), {}, 'empty dict')
  test.deepEqual(filterByLocale(DE)([]), [], 'empty list')

  const dict = { key1: 'string', key2: 2, key3: [] }
  const list = ['string', 2, {}]

  test.deepEqual(filterByLocale(DE)(dict), dict, 'non-empty dict')
  test.deepEqual(filterByLocale(DE)(list), list, 'non-empty list')
  test.end()
})

test('filterByLocal example: petstore', test => {
  const pets = [
    {
      id: 'dog',
      translations: [
        { locale: EN, name: 'dog' },
        { locale: DE, name: 'Hund' },
      ],
    },
    {
      id: 'cat',
      translations: [
        { locale: EN, name: 'cat' },
        { locale: DE, name: 'Katze' },
      ],
    },
  ]
  const toys = [
    {
      id: 'dog bone',
      translations: [
        { locale: EN, name: 'dog bone' },
        { locale: DE, name: 'Hundeknochen' },
      ],
    },
  ]

  const petShop = {
    id: 'pet shop',
    name: 'Johnnies Pets and Toys',
    toys,
    translations: [
      {
        locale: EN,
        description: 'A lot of pets and some toys',
        pets,
      },
      {
        locale: DE,
        description: 'Viele Tiere und deren Spielzeuge',
        pets: [pets[0]],
      },
    ],
  }

  test.deepEqual(
    filterByLocale(EN)(petShop),
    {
      id: 'pet shop',
      name: 'Johnnies Pets and Toys',
      description: 'A lot of pets and some toys',
      pets: [
        { id: 'dog', name: 'dog' },
        { id: 'cat', name: 'cat' },
      ],
      toys: [{ id: 'dog bone', name: 'dog bone' }],
    },
    'english',
  )
  test.deepEqual(
    filterByLocale(DE)(petShop),
    {
      id: 'pet shop',
      name: 'Johnnies Pets and Toys',
      description: 'Viele Tiere und deren Spielzeuge',
      pets: [{ id: 'dog', name: 'Hund' }],
      toys: [{ id: 'dog bone', name: 'Hundeknochen' }],
    },
    'german',
  )
  test.end()
})
