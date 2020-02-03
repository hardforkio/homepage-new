import React from 'react'
import Helmet from 'react-helmet'

import { Freshchat } from '../components/Freshchat'
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

const Powertools = () => (
  <LocaleProvider value="de">
    <NavbarStateProvider>
      <Layout {...seo}>
        <Helmet>
          <script src="https://wchat.freshchat.com/js/widget.js"></script>
        </Helmet>
        <PowertoolsComponent />
        <Freshchat />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)

export default Powertools
