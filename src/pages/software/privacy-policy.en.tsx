import React, { FC } from 'react'
import { Container } from 'reactstrap'

import Layout from '../../components/layout'
import data from '../../components/software/privacy-policy.html'
import { TitleBanner } from '../../components/TitleBanner'
import { LocaleProvider, NavbarStateProvider } from '../../utils/hooks'

const banner = {
  title: 'Dateschutzerklärung',
  subtitle: 'Briefversand Extension',
}

const seo = {
  title: 'Hardfork GmbH - Datenschutzerklärung Briefversand',
  meta: {
    description: 'Datenschutzerklärung der Briefversand Extension',
    keywords: 'Datenschutz, Briefversand, Hardfork',
  },
}

const PrivacyPolicy: FC = () => (
  <div dangerouslySetInnerHTML={{ __html: data }}></div>
)

const PrivacyPolicyPage: FC = () => {
  return (
    <LocaleProvider value="en">
      <NavbarStateProvider>
        <Layout {...seo}>
          <TitleBanner {...banner} />
          <Container className="p-5">
            <PrivacyPolicy />
          </Container>
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default PrivacyPolicyPage
