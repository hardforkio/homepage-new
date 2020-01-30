import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import ReactMarkdown from 'react-commonmark'
import { FaChrome, FaFirefox, FaSafari } from 'react-icons/fa'
import { Button, Col, Container, Row } from 'reactstrap'

import { TitleBanner } from '../TitleBanner'
import PowertoolsIcon from './assets/extensionLogoTransparent.svg'
import Description from './description.md'

const extensionChromeStoreLink =
  'https://chrome.google.com/webstore/detail/hardfork-powertools/ocfgkhnplliadmaifkhhjncimaobcchh'

const extensionScreenShotQuery = graphql`
  query extensionShot {
    extensionShot: file(relativePath: { eq: "extensionScreenShot.png" }) {
      childImageSharp {
        fluid(maxWidth: 1280, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const PowertoolsComponent = () => {
  const data = useStaticQuery(extensionScreenShotQuery)

  return (
    <article>
      <TitleBanner
        title="Browser Erweiterung"
        subtitle="Versenden Sie Ihre Rechnungen direkt aus Lexoffice per Brief an Ihre Kunden."
      />
      <Container>
        <Row className="mt-5 mb-3 ">
          <Col className="pb-4 justify-content-center">
            <PowertoolsIcon className="img-fluid" />
          </Col>
        </Row>
        <ReactMarkdown source={Description} />
        <Row className="mt-5 mb-3">
          <Col xs={12}>
            <Downloads />
            <h2>Screenshots</h2>
            <Img
              className={'img-fluid pb-5'}
              alt={`Extension Screenshot`}
              fluid={data.extensionShot.childImageSharp.fluid}
            />
          </Col>
        </Row>
      </Container>
    </article>
  )
}

const Downloads = () => (
  <>
    <h2>Installation</h2>
    <div className="d-flex mt-5 mb-4 justify-content-center ">
      <Button
        className="p-4 m-3 text-uppercase"
        color="primary"
        size="large"
        tag="a"
        href={extensionChromeStoreLink}
      >
        <FaChrome className="mr-3" size="2em" />
        Chrome Extension
      </Button>
      <Button
        className="p-4 m-3 text-uppercase"
        color="secondary"
        size="large"
        tag="a"
        disabled
        href={extensionChromeStoreLink}
      >
        <FaFirefox className="mr-3" size="2em" />
        Firefox Extension
      </Button>
      <Button
        className="p-4 m-3 text-uppercase"
        color="secondary"
        size="large"
        tag="a"
        disabled
        href={extensionChromeStoreLink}
      >
        <FaSafari className="mr-3" size="2em" />
        Safari Extension
      </Button>
    </div>
  </>
)
