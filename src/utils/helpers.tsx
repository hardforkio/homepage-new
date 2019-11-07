import React from 'react'
import * as R from 'ramda'
import { FunctionComponent } from 'react'

export const mapToComponent = (Component: FunctionComponent<any>, list: any) =>
  R.addIndex<any>(R.map)(
    (item, index) => <Component index={index} {...item} />,
    list,
  )
