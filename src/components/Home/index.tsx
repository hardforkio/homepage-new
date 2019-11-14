import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'

export const HomePageTemplate: FunctionComponent<HomeData> = ({
  title,
  heading,
  offerings,
  contactHeadline,
  contactDescription,
  contactButton,
  contactEmail,
  metaDescription,
}) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <>
      <HeroSection title={title} heading={heading} />
      <section
        className={cn(styles.avoidOverlapWithStickyHeader)}
        id="offerings"
      >
        <Offerings offerings={offerings} />
      </section>
      <section id="contact">
        <CallToAction
          headline={contactHeadline}
          description={contactDescription}
          url={contactEmail}
          buttonLabel={contactButton}
        />
      </section>
    </>
  </div>
)
