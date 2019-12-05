import React, { FunctionComponent } from 'react'
import { Imprint as ImprintData } from '../../data/imprint/types'
import { useImprint } from '../../hooks/data'
import { ImprintComponent } from './component'

export const Imprint: FunctionComponent<{}> = () => {
  const imprint: ImprintData = useImprint()
  return <ImprintComponent {...imprint} />
}
