import React, { FC } from 'react'
import { Container } from 'reactstrap'

import Layout from '../../components/layout'
import data from '../../components/software/imprint.html'
import { TitleBanner } from '../../components/TitleBanner'
import { LocaleProvider, NavbarStateProvider } from '../../utils/hooks'

const banner = {
  title: 'Impressum',
  subtitle: 'Browser Extension Briefversand',
}

const seo = {
  title: 'Hardfork GmbH - Impressum - Browser Extension Briefversand',
  meta: {
    description: 'Impressum der Browser Extension Briefversand',
    keywords: 'Impressum, Briefversand, Hardfork, Extension',
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
