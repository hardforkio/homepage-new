import React, { FunctionComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import cn from 'classnames'
import { SafeExternalLink } from '../Link'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'

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
  <div className={cn(blurryBackgroundBanner, 'text-center', 'py-3', 'py-md-5')}>
    <Container>
      <Row className="py-3 py-md-5">
        <Col md={8} className="text-md-left">
          <header>
            <h4 className="mb-4">{headline}</h4>
            <p>{description}</p>
          </header>
        </Col>
        <Col md={4} className="align-self-center">
          <Link
            className="btn btn-primary text-uppercase text-white text-nowrap px-5 mx-2"
            to={url}
          >
            {buttonLabel}
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)

export default CallToAction
