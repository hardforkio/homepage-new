import test from 'tape'
import {
  getTranslation,
  upsertTranslation,
  isTranslationCollection,
  translate,
  TranslationCollection,
} from './helpers'

const translations: TranslationCollection<string> = Object.freeze([
  {
    locale: 'de',
    value: 'Katze',
  },
  {
    locale: 'en',
    value: 'cat',
  },
])

test('getTranslation', t => {
  t.deepEquals(
    getTranslation('de')(translations),
    'Katze',
    'returns value for existing locale',
  )
  t.equal(
    getTranslation('es')(translations),
    undefined,
    'returns undefined for unknown locale',
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
  t.true(isTranslationCollection([]))
  t.true(isTranslationCollection(translations))
  t.false(isTranslationCollection({}))
  t.false(isTranslationCollection([{ value: 'cat' }]))
  t.end()
})

test('translate', t => {
  t.equals(translate('en')(translations), 'cat', 'picks existing translation')
  t.equals(translate('es')(translations), 'Katze', 'picks head otherwise')
  t.equals(translate('de')([]), '', 'defaults to empty string')
  t.equals(translate('de')(34), 34, 'ignores literals: int')
  t.equals(translate('de')('string'), 'string', 'ignores literals: string')
  t.deepEquals(translate('de')([0, 1, 3]), [0, 1, 3], 'ignores literals: array')
  t.deepEquals(
    translate('de')({ key: 'value' }),
    { key: 'value' },
    'ignores literals: object',
  )
  t.end()
})
