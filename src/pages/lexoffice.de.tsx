import React from 'react'
import { NavbarStateProvider, LocaleProvider } from '../utils/hooks'
import Layout from '../components/layout'
import { LexofficeComponent } from '../components/Lexoffice'

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
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo}>
          <LexofficeComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default Lexoffice
