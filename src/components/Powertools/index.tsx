import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React, { FC, ReactElement } from 'react'
import ReactMarkdown from 'react-commonmark'
import { FaChrome, FaFirefox, FaSafari } from 'react-icons/fa'
import { Button, Col, Container, Row } from 'reactstrap'

import { mapToComponent } from '../../utils/helpers'
import { SafeExternalLink } from '../Link'
import { TitleBanner } from '../TitleBanner'
import PowertoolsIcon from './assets/extensionLogoTransparent.svg'
import Description from './description.md'

const extensionChromeStoreLink =
  'https://chrome.google.com/webstore/detail/hardfork-powertools/ocfgkhnplliadmaifkhhjncimaobcchh'

const downloadItems: DownloadItemProps[] = [
  {
    link: extensionChromeStoreLink,
    available: true,
    browser: 'Chrome',
    icon: <FaChrome className="mr-2 mr-md-3" size="2em" />,
  },
  {
    link: '',
    available: false,
    browser: 'Firefox',
    icon: <FaFirefox className="mr-2 mr-md-3" size="2em" />,
  },
  {
    link: '',
    available: false,
    browser: 'Safari',
    icon: <FaSafari className="mr-2 mr-md-3" size="2em" />,
  },
]

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
            <h2 id="installation">Installation</h2>
            <Downloads />
            <h2 id="screenshots">Screenshots</h2>
            <Img
              className={'img-fluid'}
              alt={`Extension Screenshot`}
              fluid={data.extensionShot.childImageSharp.fluid}
            />
            <h2 id="preis">Preis</h2>
            <p>
              Für jeden Brief, den sie versenden, bezahlen sie den aktuellen
              <SafeExternalLink to="https://letterxpress.de/preise">
                {' Versandpreis von LetterXpress '}
              </SafeExternalLink>
              zuzüglich einer Servicegebühr von 0,99€ an Hardfork.
            </p>
          </Col>
        </Row>
      </Container>
    </article>
  )
}

const Downloads = () => (
  <div className=" d-flex flex-column flex-md-row my-5 text-center align-items-stretch justify-content-around">
    {mapToComponent(DownloadButton, downloadItems)}
  </div>
)

interface DownloadItemProps {
  link: string
  browser: string
  icon: ReactElement
  available: boolean
}

const DownloadButton: FC<DownloadItemProps> = ({
  link,
  browser,
  icon,
  available,
}) => (
  <Button
    className="d-flex align-items-center justify-content-center my-3 my-md-0 p-4"
    color={available ? 'primary' : 'secondary'}
    size="large"
    tag="a"
    disabled={!available}
    href={link}
  >
    <div className="d-flex align-items-center">
      {icon}
      <div>
        <div className="text-uppercase">{`${browser} Extension`}</div>
        {!available ? <small>(bald verfügbar)</small> : null}
      </div>
    </div>
  </Button>
)
