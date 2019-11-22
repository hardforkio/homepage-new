import React, { FunctionComponent } from 'react'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { HomeData, useHome } from '../../data/home'

export const HomePageComponent: FunctionComponent<HomeData> = ({
  title,
  heading,
  offerings,
  contactHeadline,
  contactDescription,
  contactButtonText,
  moreLinkText,
  emailButton,
  contactEmail,
}) => (
  <div>
    <HeroSection
      title={title}
      heading={heading}
      contactButtonText={contactButtonText}
      moreLinkText={moreLinkText}
    />
    <section className={cn(styles.avoidOverlapWithStickyHeader)} id="offerings">
      <Offerings offerings={offerings} />
    </section>
    <section id="contact">
      <CallToAction
        headline={contactHeadline}
        description={contactDescription}
        url={contactEmail}
        buttonLabel={emailButton}
      />
    </section>
  </div>
)

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  return <HomePageComponent {...data} />
}
