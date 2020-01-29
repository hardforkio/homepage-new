import React, { FunctionComponent } from 'react'

import { FAQ } from '../components/FAQ'
import Layout from '../components/layout'
import { getFAQPage } from '../data/faqEntry'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const FAQPage: FunctionComponent<{}> = () => {
  const { head } = getFAQPage('de')
  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...head}>
          <FAQ />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default FAQPage
