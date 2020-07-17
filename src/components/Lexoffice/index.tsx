import React, { useCallback, useState } from 'react'
import ReactMarkdown from 'react-commonmark'
import {
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from 'reactstrap'

import { CONTACT_EMAIL, ContactForm, onSubmit } from '../Contact/ContactForm'
import { TitleBanner } from '../TitleBanner'
import PartnerAPI from './partnerApi.md'
import PublicAPI from './publicApi.md'

export const LexofficeComponent = () => {
  const [showPublicApi, setShowPublicAPI] = useState(true)
  const switchToPublicApi = useCallback(
    e => {
      e.preventDefault()
      setShowPublicAPI(true)
    },
    [setShowPublicAPI],
  )
  const switchToPartnerApi = useCallback(
    e => {
      e.preventDefault()
      setShowPublicAPI(false)
    },
    [setShowPublicAPI],
  )
  return (
    <article>
      <TitleBanner
        title="Lexoffice Integration"
        subtitle="Ihre persönliche lexoffice-Anbindung"
      />
      <Container>
        <Row className="mt-4 mt-sm-5 mb-3">
          <Col className="pb-4">
            <p>
              Im Folgenden möchten wir Ihnen einen Überblick über die Leistungen
              der Hardfork GmbH für die Anbindung von verschiedenen Systemen an
              die Buchhaltungssoftware{' '}
              <a
                href="https://lexoffice.de?pid=hardfork"
                target="_blank"
                rel="noopener noreferrer"
              >
                lexoffice
              </a>{' '}
              geben. Lexoffice bietet zwei Varianten für die automatische
              Anbindung von Software an Ihre Systeme an.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  href="/#"
                  active={showPublicApi}
                  onClick={switchToPublicApi}
                >
                  Public API
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/#"
                  active={!showPublicApi}
                  onClick={switchToPartnerApi}
                >
                  Partner API
                </NavLink>
              </NavItem>
            </Nav>
            <Card className="p-3">
              <CardBody>
                {showPublicApi ? (
                  <ReactMarkdown source={PublicAPI} />
                ) : (
                  <ReactMarkdown source={PartnerAPI} />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <h2>Unverbindliche Anfrage stellen</h2>
            <p>
              Senden Sie uns eine Nachricht und beschreiben Sie Ihr Projekt. Wir
              melden uns zeitnah bei Ihnen für ein Angebot.
            </p>
            <ContactForm sendData={onSubmit(CONTACT_EMAIL)} />
          </Col>
        </Row>
      </Container>
    </article>
  )
}
