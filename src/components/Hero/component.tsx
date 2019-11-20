import React, { FunctionComponent } from 'react'
import { Button } from 'reactstrap'
import styles from './Hero.module.scss'
import cn from 'classnames'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { WithBlurryBackground } from '../BlurryBackground'

interface IntroProps {
  title: string
  subTitle: string
  contactButtonText: string
  moreLinkText: string
  showHeadline: boolean
  showBackground: boolean
  showMoreSection: boolean
  showSubHeadline: boolean
  LinkTag: any
}

export const HeroSectionComponent: FunctionComponent<IntroProps> = ({
  showBackground,
  showMoreSection,
  moreLinkText,
  ...props
}) => (
  <WithBlurryBackground
    show={showBackground}
    className={cn(styles.intro, 'd-flex flex-column justify-content-center')}
  >
    <MainSection {...props} className="flex-grow-1" />
    <MoreSection show={showMoreSection} linkText={moreLinkText} />
  </WithBlurryBackground>
)

const MainSection: FunctionComponent<{
  className: string
  title: string
  showHeadline: boolean
  showSubHeadline: boolean
  contactButtonText: string
  subTitle: string
}> = ({
  className,
  title,
  showSubHeadline,
  showHeadline,
  contactButtonText,
  subTitle,
}) => (
  <div className={cn(className, 'd-flex flex-column justify-content-center')}>
    <Headline show={showHeadline} title={title} />
    <SubHeadline
      show={showSubHeadline}
      subTitle={subTitle}
      contactButtonText={contactButtonText}
    />
  </div>
)

const MoreSection: FunctionComponent<{
  show: boolean
  linkText: string
}> = ({ show, linkText }) => (
  <div
    className={cn(
      styles.fadedOut,
      show ? styles.fadeIn : 'invisible',
      'mb-5',
      'd-flex justify-content-center',
    )}
  >
    <a
      className={cn(
        styles.smallText,
        styles.spaced,
        'text-uppercase text-center',
      )}
      href="#offerings"
    >
      {linkText}
      <br />
      <AiOutlineArrowDown size={40} />
    </a>
  </div>
)

const Headline: FunctionComponent<{ show: boolean; title: string }> = ({
  show,
  title,
}) => (
  <div className="d-flex justify-content-center pb-5">
    <div className="position-relative">
      <h1 className={cn(styles.headline, show ? 'show' : '', 'px-4 my-2')}>
        {title}
      </h1>
    </div>
  </div>
)

const SubHeadline: FunctionComponent<{
  show: boolean
  subTitle: string
  contactButtonText: string
}> = ({ show, subTitle, contactButtonText }) => (
  <div
    className={cn(
      styles.fadeInSubheadline,
      show ? 'show' : '',
      'mt-5',
      'text-center',
    )}
  >
    <p className={cn(styles.spaced, 'text-uppercase')}>{subTitle}</p>
    <Button
      tag="a"
      href="#contact"
      className="px-5 my-4 text-uppercase"
      color="primary"
    >
      {contactButtonText}
    </Button>
  </div>
)
