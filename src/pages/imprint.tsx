import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider } from '../utils/hooks'
import useImprints from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const imprints = useImprints('de')

  return (
    <NavbarStateProvider>
      <Layout isHeaderTransparent={false}>
        <Imprint imprint={imprints[0]} />
      </Layout>
    </NavbarStateProvider>
  )
}

export default ImprintPage
