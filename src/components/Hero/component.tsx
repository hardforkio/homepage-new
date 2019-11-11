import React, { FunctionComponent } from 'react'
import { Button, Row, Col } from 'reactstrap'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'

interface IntroProps {
  title: string
  subTitle: string
  showHeadline: boolean
  showBackground: boolean
  showMoreSection: boolean
  showSubHeadline: boolean
  LinkTag: any
}

export const HeroSectionComponent: FunctionComponent<IntroProps> = ({
  title,
  subTitle,
  showHeadline,
  showBackground,
  showMoreSection,
  showSubHeadline,
  LinkTag,
}) => (
  <section
    className={cn(
      blurryBackgroundBanner,
      styles.intro,
      showBackground ? 'showBackground' : '',
      'hiddenBackground d-flex justify-content-center text-center p-sm-0',
    )}
  >
    <Row className="mt-auto mb-5">
      <Col xs={{ size: 10, offset: 1 }} md={{ size: 2, offset: 5 }}>
        <h1 className={cn(styles.headline, showHeadline ? 'show' : '', 'py-3')}>
          {title}
        </h1>
      </Col>
    </Row>
    <div
      className={cn(
        'mb-auto',
        styles.fadeInSubheadline,
        showSubHeadline ? 'show' : '',
      )}
    >
      <p className={cn(styles.spaced, 'text-uppercase')}>{subTitle}</p>
      <LinkTag to="/#contact">
        <Button className="px-5 my-4 text-uppercase" color="primary">
          Kontakt
        </Button>
      </LinkTag>
    </div>
    <div
      className={cn(
        styles.fadedOut,
        showMoreSection ? styles.fadeIn : 'invisible',
        'd-sm-block mb-5',
      )}
    >
      <a
        className={cn(
          styles.smallText,
          styles.spaced,
          'text-uppercase align-items-end',
        )}
        href="#offerings"
      >
        <p>Mehr</p>
        <AiOutlineArrowDown size={40} />
      </a>
    </div>
  </section>
)
