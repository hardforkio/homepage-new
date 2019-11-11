import React, { ReactNode } from 'react'
import * as R from 'ramda'
import { FunctionComponent } from 'react'

export const mapToComponent = <Props extends unknown>(
  Component: FunctionComponent<Props>,
  list: ReadonlyArray<Props>,
) =>
  R.addIndex<Props, ReactNode>(R.map)(
    (item, index) => <Component key={index} {...item} />,
    list,
  )

export const isSubset: <T = any>(
  subset: T[],
) => (superset: T[]) => boolean = R.curryN(
  2,
  R.pipe(
    R.difference as (<T>(list1: T[], list2: T[]) => T[]),
    R.isEmpty,
  ),
)
