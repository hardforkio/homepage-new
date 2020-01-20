import React, { FC } from 'react'
import Layout from '../../components/layout'
import { NavbarStateProvider, LocaleProvider } from '../../utils/hooks'
import { TitleBanner } from '../../components/TitleBanner'
import { Container } from 'reactstrap'
import data from '../../data/powertools/imprint.html'

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
          <Container className="p-5">
            <Imprint />
          </Container>
        </Layout>
      </NavbarStateProvider>
    </LocaleProvider>
  )
}

export default ImprintPage
