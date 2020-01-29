import { graphql } from 'gatsby'
import React from 'react'
import ReactMarkdown from 'react-commonmark'
import { Col, Container, Row } from 'reactstrap'

import { ContactForm } from '../Contact'
import { TitleBanner } from '../TitleBanner'
import CommingSoon from './commingSoon.md'
import image from './extensionScreenShot.png'

export const PowertoolsComponent = () => (
  <article>
    <TitleBanner
      title="Powertools Browser Erweiterung"
      subtitle="Versenden Sie Ihre Rechnungen direkt aus Lexoffice per Brief an Ihre Kunden."
    />
    <Container>
      <Row className="mt-5 mb-3">
        <Col className="pb-4">
          <img
            className={'img-fluid pb-5'}
            alt={`Extension Screenshot`}
            src={image}
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
