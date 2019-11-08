import React, { FunctionComponent } from 'react'
import styles from './Offering.module.scss'
import helperStyles from '../helper.module.css'
import cn from 'classnames'
import { Col, Row } from 'reactstrap'
import { mapToComponent } from '../../utils/helpers'
import ReactMarkdown from 'react-commonmark'

export const Offerings: FunctionComponent<{ offerings: Offering[] }> = ({
  offerings,
}) => <div>{mapToComponent(OfferingComponent, offerings)}</div>

export const OfferingComponent: FunctionComponent<{
  image: any
  headline: string
  text: string
}> = ({ image, headline, text }) => (
  <Row noGutters className={cn(styles.offering, 'align-items-center')}>
    <Col sm={12} md={{ size: 5 }}>
      <img className="img-fluid" alt="" src={image} />
    </Col>
    <Col className="text-center text-md-left p-4" sm={12} md={{ size: 7 }}>
      <div className={'p-md-5'}>
        <h4
          className={cn(
            helperStyles.breakWord,
            styles.spacedHeadline,
            'text-uppercase mb-4',
          )}
        >
          {headline}
        </h4>
        <ReactMarkdown source={text} />
      </div>
    </Col>
  </Row>
)

interface Offering {
  headline: string
  text: string
  image: string
}
