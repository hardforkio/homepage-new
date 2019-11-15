import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { FAQ } from '../components/FAQ'

const FAQPage: FunctionComponent<{}> = () => (
  <LocaleProvider value="en">
    <NavbarStateProvider>
      <Layout title={'FAQ'}>
        <FAQ />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)

export default FAQPage
