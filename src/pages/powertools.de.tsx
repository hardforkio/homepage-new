import React from 'react'

import Layout from '../components/layout'
import { PowertoolsComponent } from '../components/Powertools'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const seo = {
  title: 'Hardfork GmbH - Powertools Browser Extension',
  meta: {
    description:
      'Browsererweiterung für das Versedeb von Rechnungen aus Lexoffice.',
    keywords: 'Lexoffice, Software, Entwicklung, Extension',
  },
}

const Powertools = () => {
  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo}>
          <PowertoolsComponent />
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default Powertools
