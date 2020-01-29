import React, { FC } from 'react'
import { Container } from 'reactstrap'

import Layout from '../../components/layout'
import data from '../../components/powertools/imprint.html'
import { TitleBanner } from '../../components/TitleBanner'
import { LocaleProvider, NavbarStateProvider } from '../../utils/hooks'

const banner = {
  title: 'Impressum',
  subtitle: 'Powertools Extension',
}

const seo = {
  title: 'Hardfork GmbH - Powertools Impressum',
  meta: {
    description: 'Impressum der Powertools Extension',
    keywords: 'Impressum, Powertools, Hardfork',
  },
}

const Imprint: FC = () => <div dangerouslySetInnerHTML={{ __html: data }}></div>

const ImprintPage: FC = () => {
  return (
    <LocaleProvider value="de">
      <NavbarStateProvider>
        <Layout {...seo}>
          <TitleBanner {...banner} />
          <Container className="py-5">
            <Imprint />
          </Container>
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
