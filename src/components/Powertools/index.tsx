import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import ReactMarkdown from 'react-commonmark'
import { Col, Container, Row } from 'reactstrap'

import { TitleBanner } from '../TitleBanner'
import CommingSoon from './commingSoon.md'

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
        title="Powertools Browser Erweiterung"
        subtitle="Versenden Sie Ihre Rechnungen direkt aus Lexoffice per Brief an Ihre Kunden."
      />
      <Container>
        <Row className="mt-5 mb-3">
          <Col className="pb-4">
            <Img
              className={'img-fluid pb-5'}
              alt={`Extension Screenshot`}
              fluid={data.extensionShot.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ReactMarkdown source={CommingSoon} />
          </Col>
        </Row>
      </Container>
    </article>
  )
}
