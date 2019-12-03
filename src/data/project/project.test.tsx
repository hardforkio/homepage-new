import test from 'tape'
import homeMock from '../testCollection/homeMock.json'
import { deserializeTechnologies } from './index'

test('converter', assert => {
  assert.deepEqual(
    deserializeTechnologies(homeMock.withString),
    homeMock.withObject,
    'Should convert only the technologies to objects',
  )
  assert.end()
})
