import React, { useState, useCallback } from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { TitleBanner } from '../TitleBanner'
import PublicAPI from './publicApi.md'
import PartnerAPI from './partnerApi.md'

import ReactMarkdown from 'react-commonmark'
import { ContactForm } from '../Contact'

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
        subtitle="Software-Entwicklung und -Beratung um Ihre Anbindung an Lexoffice zu verwirklichen"
      />
      <Container>
        <Row className="mt-5 mb-3">
          <Col className="pb-4">
            Im Folgenden möchten wir Ihnen einen Überblick über die Leistungen
            der Hardfork GmbH für die Anbindung von verschiedenen Systemen an
            die Buchhaltungssoftware "Lexoffice" geben. Lexoffice bietet zwei
            Varianten für die automatische Anbindung von Software an Ihre
            Systeme an.
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
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </article>
  )
}
