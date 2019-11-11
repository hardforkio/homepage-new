import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import getImprints from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const imprint = getImprints('en')[0]

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout title={imprint.metaTitle}>
          <Imprint />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
