import test from 'tape'
import { getTranslation, setTranslation } from './helpers'

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

test('setTranslation', t => {
  t.deepEqual(
    setTranslation('de', 'Kater')(translations),
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
    'returns an updated copy for existing locale',
  )
  t.deepEqual(
    setTranslation('es', 'gato')(translations),
    [
      {
        locale: 'de',
        value: 'Kater',
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
    'returns an extended copy for new locale',
  )
  t.end()
})
