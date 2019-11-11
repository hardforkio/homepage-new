import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { getImprint } from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const { metaTitle } = getImprint('en')

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout title={metaTitle}>
          <Imprint />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
