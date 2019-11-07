import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Practices from '../Practices'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'

interface HomePageProps {
  title: string
  metaTitle: string
  metaDescription: string
  heading: string
  offerings: { blurbs: any }
  practicesHeadline: string
  practicesDescription: string
  practices: any
  contactHeadline: string
  contactDescription: string
  contactButton: string
  contactEmail: string
}

export const HomePageTemplate: FunctionComponent<HomePageProps> = ({
  title,
  heading,
  offerings,
  practices,
  contactHeadline,
  contactDescription,
  contactButton,
  contactEmail,
  metaDescription,
  practicesDescription,
  practicesHeadline,
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
      <Practices
        headline={practicesHeadline}
        description={practicesDescription}
        practices={practices}
      />
      <CallToAction
        id="contact"
        headline={contactHeadline}
        description={contactDescription}
        email={contactEmail}
        buttonLabel={contactButton}
      />
    </>
  </div>
)
