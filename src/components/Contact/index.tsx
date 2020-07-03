import React, { FunctionComponent } from 'react'
import { Col, Container, Row } from 'reactstrap'

import { ContactForm } from './ContactForm'

interface ContactSectionProps {
  headline: string
  description: string
}

export const ContactSection: FunctionComponent<ContactSectionProps> = ({
  headline,
  description,
}) => (
  <div className="py-3 py-md-5 bg-white text-dark">
    <Container>
      <Row className="py-3 py-md-5 justify-content-center">
        <Col md={8} className="text-center text-md-left">
          <header>
            <h4 className="mb-4">{headline}</h4>
            <p>{description}</p>
          </header>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </div>
)
