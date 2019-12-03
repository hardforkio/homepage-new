import test from 'tape'
import {
  importSingleFile,
  importFiles,
  expandCollection,
  parseString,
  convertToObjectList,
} from './helpers'

import testItem1 from './testCollection/item1.json'
import testItem2 from './testCollection/item2.json'
import {
  asObject,
  asString,
  objectList,
  stringList,
} from './testCollection/withStringObject.json'

test('importSingleFile', async t => {
  const data = await importSingleFile('./testCollection/item1.json')

  t.deepEqual(data, testItem1)
  t.end()
})

test('importFiles', async t => {
  const data = await importFiles('./testCollection/', ['item1', 'item2'])

  t.deepEqual(data, [testItem1, testItem2])
  t.end()
})

test('expandCollection', async t => {
  const data = {
    someKey: 'someValue',
    testCollection: ['item1', 'item2'],
  }

  const dataExpanded = await expandCollection(
    'testCollection',
    './testCollection/',
    data,
  )
  t.deepEqual(dataExpanded, {
    someKey: 'someValue',
    testCollection: [testItem1, testItem2],
  })
  t.end()
})

test('String parser', assert => {
  assert.deepEqual(parseString(asString), asObject, 'Remove all backslashes')
  assert.end()
})

test('Map string list to object list', assert => {
  assert.deepEqual(
    convertToObjectList(stringList),
    objectList,
    'Remove all backslashes',
  )
  assert.end()
})
