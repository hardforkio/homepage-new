import React, { FunctionComponent } from 'react'
import Layout from '../components/layout'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import { FAQ } from '../components/FAQ'
import { getFAQPage } from '../data/faqEntry'

const FAQPage: FunctionComponent<{}> = () => {
  const { seo, title } = getFAQPage('de')
  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo} title={title}>
          <FAQ />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default FAQPage
