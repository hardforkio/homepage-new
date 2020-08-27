import test from 'tape'

import { findDefaultingToHead } from './helpers'

const isEven = (x: number) => x % 2 === 0

test('findDefaultingToHead finds an element in a list', (test) => {
  test.plan(1)
  test.equals(findDefaultingToHead(isEven)([1, 2, 3, 4]), 2)
})

test('findDefaultingToHead returns the head of the list when the find fails', (test) => {
  test.plan(1)
  test.equals(findDefaultingToHead(isEven)([3, 5, 7, 9]), 3)
})

test('findDefaultingToHead returns undefined when the list is empty', (test) => {
  test.plan(1)
  test.equals(findDefaultingToHead(isEven)([]), undefined)
})
