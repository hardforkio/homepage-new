import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { FAQ } from '../components/FAQ'
import { getFAQPage } from '../data/faqEntry'

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
