import test from 'tape'
import {
  importAll,
  expandRelation,
  filterDataByUuid,
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

interface TestItem {
  uuid: string
  name: string
  material: string
  color: string
}

const items: TestItem[] = [testItem1, testItem2]

// TODO: Run this test in a headless browser
test.skip('importAll', t => {
  const context = require.context('./testCollection/', true, /\.json$/)
  const imported = importAll<TestItem>(context)

  t.deepEqual(imported, [testItem1, testItem2])
  t.end()
})

test('filterDataByUUid', t => {
  t.deepEqual(
    filterDataByUuid(['items', 'forSale'], items, {
      name: 'Schmidts Haushaltswaren',
      items: { forSale: ['1'], inStock: ['1', '2'] },
    }),
    [testItem1],
    'should only filter matching path.',
  )
  t.deepEqual(
    filterDataByUuid(['items', 'forSale'], [], {
      name: 'Schmidts Haushaltswaren',
      items: { forSale: ['1'], inStock: ['1', '2'] },
    }),
    [],
    'should omit missing data.',
  )
  t.end()
})

test('expandRelation', t => {
  t.deepEqual(
    expandRelation(['books'], items, {
      name: 'Schmidts Haushaltswaren',
      items: ['1'],
    }),
    {
      name: 'Schmidts Haushaltswaren',
      items: ['1'],
    },
    'should only expand matching key.',
  )
  t.deepEqual(
    expandRelation(['items', 'forSale'], items, {
      name: 'Schmidts Haushaltswaren',
      items: { forSale: ['1'], inStock: ['1', '2'] },
    }),
    {
      name: 'Schmidts Haushaltswaren',
      items: { forSale: [testItem1], inStock: ['1', '2'] },
    },
    'should only expand matching nested path.',
  )
  t.deepEqual(
    expandRelation(['items'], items, {
      name: 'Schmidts Haushaltswaren',
      items: ['1'],
    }),
    {
      name: 'Schmidts Haushaltswaren',
      items: [testItem1],
    },
    'should only expand specified relations.',
  )
  t.deepEqual(
    expandRelation(['items'], [], {
      name: 'Schmidts Haushaltswaren',
      items: ['1'],
    }),
    {
      name: 'Schmidts Haushaltswaren',
      items: [],
    },
    'should omit missing/unknown relations data.',
  )
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
