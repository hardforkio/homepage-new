import React from 'react'
import Helmet from 'react-helmet'

import { BriefversandComponent } from '../components/Briefversand'
import { Freshchat } from '../components/Freshchat'
import Layout from '../components/layout'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const seo = {
  title: 'Hardfork GmbH - Briefversand für lexoffice',
  meta: {
    description:
      'Browsererweiterung für das Versenden von Belegen aus Lexoffice als Brief.',
    keywords:
      'Lexoffice, Software, Entwicklung, Extension, Brief, Versand, Beleg, Rechnung, Angebot, Auftragsbestätigung, Integration',
  },
}

const Briefversand = () => (
  <LocaleProvider value="de">
    <NavbarStateProvider>
      <Layout {...seo}>
        <Helmet>
          <script src="https://wchat.freshchat.com/js/widget.js"></script>
        </Helmet>
        <BriefversandComponent />
        <Freshchat />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)

export default Briefversand
