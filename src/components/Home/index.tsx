import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'

interface HomePageProps {
  title: string
  metaTitle: string
  metaDescription: string
  heading: string
  offerings: { blurbs: any }
  contactHeadline: string
  contactDescription: string
  contactButton: string
  contactEmail: string
}

export const HomePageTemplate: FunctionComponent<HomePageProps> = ({
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
      <section id="offerings">
        <Offerings offerings={offerings.blurbs} />
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
