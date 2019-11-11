import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider } from '../utils/hooks'
import getImprints from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const imprint = getImprints('en')[0]

  return (
    <NavbarStateProvider>
      <Layout title={imprint.metaTitle}>
        <Imprint imprint={imprint} />
      </Layout>
    </NavbarStateProvider>
  )
}

export default ImprintPage
