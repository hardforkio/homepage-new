import test from 'tape'
import {
  findTranslation,
  uppendTranslation,
  isTranslationCollection,
  TranslationCollection,
  translate,
  getTranslation,
} from './i18n-lib'

const cat: TranslationCollection<string> = [
  {
    locale: 'de',
    value: 'Katze',
  },
  {
    locale: 'en',
    value: 'cat',
  },
]

test('isTranslationCollection', t => {
  t.false(isTranslationCollection([]), 'false for empty arrays')
  t.false(isTranslationCollection({}), 'false for empty objects')
  t.true(
    isTranslationCollection(cat),
    'true for arrays of objects with exactly two keys: "locale" and "value"',
  )
  t.false(
    isTranslationCollection([{ value: 'Katze' }]),
    'false for arrays of objects without "locale" key',
  )
  t.false(
    isTranslationCollection([{ locale: 'de' }]),
    'false for arrays of objects without "value" key',
  )
  t.false(
    isTranslationCollection([{ locale: 'de', value: 'Katze', name: 'Paula' }]),
    'false for arrays of objects with more than two keys',
  )
  t.end()
})

test('getTranslation', t => {
  t.equals(getTranslation('en')(cat), 'cat', 'gets existing translation')
  t.equals(
    getTranslation('es')(cat),
    undefined,
    'returns undefined if translation does not exist',
  )
  t.end()
})

test('uppendTranslation', t => {
  t.deepEqual(
    uppendTranslation('de', 'Kater')(cat),
    [
      {
        locale: 'en',
        value: 'cat',
      },
      {
        locale: 'de',
        value: 'Kater',
      },
    ],
    'uppend (remove existing and append updated) translation for known locale',
  )
  t.deepEqual(
    uppendTranslation('es', 'gato')(cat),
    [
      {
        locale: 'de',
        value: 'Katze',
      },
      {
        locale: 'en',
        value: 'cat',
      },
      {
        locale: 'es',
        value: 'gato',
      },
    ],
    'adds new translation for unknown locale',
  )
  t.deepEqual(
    uppendTranslation('de', '')(cat),
    [
      {
        locale: 'en',
        value: 'cat',
      },
    ],
    'removes translation if value is empty string',
  )
  t.end()
})

test('findTranslation', t => {
  t.deepEquals(
    findTranslation(['de', 'en'])(cat),
    'Katze',
    'returns demanded translation',
  )
  t.equal(
    findTranslation(['es', 'en'])(cat),
    'cat',
    'returns fallback translation',
  )
  t.equal(
    findTranslation(['de', 'en'])([{ locale: 'es', value: 'gato' }]),
    undefined,
    'returns undefined if no matching translations exist',
  )
  t.end()
})

test('translate', t => {
  t.deepEquals(
    translate(['en'])({ favoriteAnimal: cat }),
    { favoriteAnimal: 'cat' },
    'returns matching translation',
  )
  t.deepEquals(
    translate(['es'])({ favoriteAnimal: cat }),
    { favoriteAnimal: undefined },
    'by default: no fallback',
  )
  t.deepEquals(
    translate(['es', 'de-AT', 'de'])({ favoriteAnimal: cat }),
    { favoriteAnimal: 'Katze' },
    'finds fallback locale',
  )

  const persona = {
    name: 'Jahriza Harisson',
    age: 29,
    favoriteAnimal: cat,
    posts: [{ title: 'About a cat.' }],
    logins: { last: '2000-20-04' },
  }
  t.deepEquals(
    translate(['de'])(persona),
    {
      name: 'Jahriza Harisson',
      age: 29,
      favoriteAnimal: 'Katze',
      posts: [{ title: 'About a cat.' }],
      logins: { last: '2000-20-04' },
    },
    'only translate TranslationCollections',
  )
  t.end()
})
