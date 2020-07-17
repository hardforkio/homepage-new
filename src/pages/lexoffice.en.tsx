import React from 'react'

import Layout from '../components/layout'
import { LexofficeComponent } from '../components/Lexoffice'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const seo = {
  title: 'Hardfork GmbH - Lexoffice Integrationspartnerschaft',
  meta: {
    description:
      'Beratungs- und Entwicklungsdienstleistung für Lexoffice von Hardfork GmbH',
    keywords: 'Lexoffice, Software, Entwicklung, Integration, API',
  },
}

const Lexoffice = () => {
  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...seo}>
          <LexofficeComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default Lexoffice
