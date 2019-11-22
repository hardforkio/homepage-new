import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { Imprint } from '../components/Imprint'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { getImprint } from '../data/imprint'

const ImprintPage: FunctionComponent<{}> = () => {
  const { seo, title } = getImprint('en')

  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...seo} title={title}>
          <Imprint />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
