import test from 'tape'
import { isSubset } from './helpers'

test('isSubset', test => {
  const subset = [1, 1, 1, 2, 2, 2]
  const superset = [3, 2, 1]
  test.plan(2)
  test.equals(isSubset(subset)(superset), true)
  test.equals(isSubset(superset)(subset), false)
})

test('isSubset - strings', test => {
  const subset = ['a', 'a', 'b']
  const superset = ['c', 'b', 'a']
  test.plan(2)
  test.equals(isSubset(subset)(superset), true)
  test.equals(isSubset(superset)(subset), false)
})
