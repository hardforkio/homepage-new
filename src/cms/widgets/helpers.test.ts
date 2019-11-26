import test from 'tape'
import { getTranslation, upsertTranslation, areValidLocales } from './helpers'

const translations = Object.freeze([
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

test('areValidLocales', t => {
  t.true(areValidLocales(['de', 'en']))
  t.end()
})
