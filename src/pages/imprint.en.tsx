import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider } from '../utils/hooks'
import getImprints from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const imprints = getImprints('en')

  return (
    <NavbarStateProvider>
      <Layout>
        <Imprint imprint={imprints[0]} />
      </Layout>
    </NavbarStateProvider>
  )
}

export default ImprintPage
