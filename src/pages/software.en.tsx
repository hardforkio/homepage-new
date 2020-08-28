import React from 'react'

import Layout from '../components/layout'
import { SoftwareComponent } from '../components/Software'
import { LocaleProvider, NavbarStateProvider } from '../utils/hooks'

const seo = {
  title: 'Hardfork GmbH - Sending letters with lexoffice',
  meta: {
    description:
      'Browser extension for sending documents as letters directly from Lexoffice.',
    keywords:
      'lexoffice, software, development, extension, letter, invoice, send, mail, invoice, offer, order confirmation, integration',
  },
}

const Software = () => (
  <LocaleProvider value="de">
    <NavbarStateProvider>
      <Layout {...seo}>
        <SoftwareComponent />
      </Layout>
    </NavbarStateProvider>
  </LocaleProvider>
)

export default Software
