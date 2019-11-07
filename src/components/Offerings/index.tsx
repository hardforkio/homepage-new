import React, { FunctionComponent } from 'react'
import * as R from 'ramda'
import styles from './Offering.module.scss'
import helperStyles from '../helper.module.css'
import cn from 'classnames'
import { Col, Row } from 'reactstrap'

export const Offerings: FunctionComponent<{ offerings: Offering[] }> = ({
  offerings,
}) => (
  <div>
    {R.addIndex<Offering>(R.map)((item, index) => (
      <OfferingComponent
        index={index}
        image={item.image}
        headline={item.headline}
        text={item.text}
      />
    ))(offerings)}
  </div>
)

export const OfferingComponent: FunctionComponent<{
  index: number
  image: any
  headline: string
  text: string
}> = ({ index, image, headline, text }) => (
  <Row
    noGutters
    className={cn(styles.offering, 'align-items-center')}
    key={'index' + index}
  >
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
        <p>{text}</p>
      </div>
    </Col>
  </Row>
)

interface Offering {
  headline: string
  text: string
  image: string
}
