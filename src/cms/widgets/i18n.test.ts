import test from 'tape'
import {
  getTranslationDefault,
  upsertTranslation,
  isTranslationCollection,
  translate,
  TranslationCollection,
  hasTranslation,
} from './i18n'

const translations: TranslationCollection<string> = [
  {
    locale: 'de',
    value: 'Katze',
  },
  {
    locale: 'en',
    value: 'cat',
  },
]
test('hasTranslation', t => {
  t.true(hasTranslation('de')(translations))
  t.true(hasTranslation('en')(translations))
  t.false(hasTranslation('es')(translations))
  t.false(hasTranslation(null)(translations))
  t.end()
})

test('getTranslationDefault', t => {
  t.deepEquals(
    getTranslationDefault('de')(translations),
    'Katze',
    'returns translation if existing',
  )
  t.equal(
    getTranslationDefault('es')(translations),
    undefined,
    'returns undefined if non-existing',
  )
  t.equal(
    getTranslationDefault('es', 'en')(translations),
    'cat',
    'with default locale: returns translation if existing',
  )
  t.equal(
    getTranslationDefault('es', 'es')(translations),
    undefined,
    'with default locale: returns undefined if non-existing',
  )
  t.end()
})

test('upsertTranslation', t => {
  t.deepEqual(
    upsertTranslation('de', 'Kater')(translations),
    [
      {
        locale: 'de',
        value: 'Kater',
      },
      {
        locale: 'en',
        value: 'cat',
      },
    ],
    'updates translation for known locale.',
  )
  t.deepEqual(
    upsertTranslation('es', 'gato')(translations),
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
    'adds new translation for unknown locale.',
  )
  t.deepEqual(
    upsertTranslation('de', '')(translations),
    [
      {
        locale: 'en',
        value: 'cat',
      },
    ],
    'removes translation if value is empty string.',
  )
  t.end()
})

test('isTranslationCollection', t => {
  t.false(isTranslationCollection([]), 'false for empty arrays')
  t.false(isTranslationCollection({}), 'false for empty objects')
  t.true(
    isTranslationCollection(translations),
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
    isTranslationCollection([{ locale: 'de', value: 'Katze', name: 'Paul' }]),
    'false for arrays of objects with more than two key',
  )
  t.end()
})

test('translate', t => {
  t.equals(translate('en')(translations), 'cat', 'picks existing translation')
  t.equals(
    translate('es')(translations),
    'cat',
    'if locale not present defaults to english',
  )
  t.equals(
    translate('es', 'de')(translations),
    'Katze',
    'if locale not present defaults to given locale',
  )
  t.equals(
    translate('es')([{ locale: 'de', value: 'Katze' }]),
    undefined,
    'if local and default local not given return undefined',
  )

  const otherTypes = {
    favoriteAnimal: translations,
    number: 1,
    string: 'string',
    empytArray: [],
    emptyObject: {},
  }
  t.deepEquals(
    translate('de')(otherTypes),
    {
      favoriteAnimal: 'Katze',
      number: 1,
      string: 'string',
      empytArray: [],
      emptyObject: {},
    },
    'only translate TranslationCollections',
  )
  t.end()
})
