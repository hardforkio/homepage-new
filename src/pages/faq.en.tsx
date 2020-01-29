import React, { FunctionComponent } from 'react'

import { FAQ } from '../components/FAQ'
import Layout from '../components/layout'
import { getFAQPage } from '../data/faqEntry'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const FAQPage: FunctionComponent<{}> = () => {
  const { head } = getFAQPage('en')
  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...head}>
          <FAQ />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default FAQPage
