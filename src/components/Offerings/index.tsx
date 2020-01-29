import cn from 'classnames'
import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-commonmark'
import { Col, Row } from 'reactstrap'

import { Offering } from '../../data/home/types'
import { mapToComponent } from '../../utils/helpers'
import helperStyles from '../helper.module.scss'
import styles from './Offering.module.scss'

export const Offerings: FunctionComponent<{ offerings: Offering[] }> = ({
  offerings,
}) => (
  <div className="bg-dark text-white">
    {mapToComponent(OfferingComponent, offerings)}
  </div>
)

export const OfferingComponent: FunctionComponent<{
  image: any
  headline: string
  text: string
}> = ({ image, headline, text }) => (
  <Row noGutters className={cn(styles.offering, 'align-items-center ')}>
    <Col sm={12} md={{ size: 5 }}>
      <img className="img-fluid" alt="" src={image} />
    </Col>
    <Col className="text-center text-md-left p-4" sm={12} md={{ size: 7 }}>
      <div className={'p-md-5'}>
        <h3
          className={cn(
            helperStyles.breakWord,
            styles.spacedHeadline,
            'text-uppercase mb-4',
          )}
        >
          {headline}
        </h3>
        <ReactMarkdown source={text} />
      </div>
    </Col>
  </Row>
)
