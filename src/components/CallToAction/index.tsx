import React, { FunctionComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import cn from 'classnames'

import { SafeExternalLink } from '../ExternalLink'
import styles from './CallToAction.module.scss'

export interface CallToActionProps {
  headline: string
  description: string
  Link?: any
  buttonLabel: string
  url: string
}

const CallToAction: FunctionComponent<CallToActionProps> = ({
  headline,
  description,
  Link = SafeExternalLink,
  buttonLabel,
  url,
}) => (
  <section className={cn(styles.backgroundImg, 'p-5')}>
    <Container>
      <Row className="py-5">
        <Col>
          <header>
            <h2 className={cn(styles.blockLetters, 'mb-4')}>{headline}</h2>
            <p>{description}</p>
          </header>
        </Col>
        <Col className="align-self-center text-center">
          <Link
            className="btn btn-primary text-uppercase text-white px-5 mx-2"
            to={url}
          >
            {buttonLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  </section>
)

export default CallToAction
