import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Practices from '../Practices'
import CallToAction from '../CallToAction'
import { HeroSection } from './Hero'

interface HomePageProps {
  title: string
  meta_title: string
  meta_description: string
  heading: string
  offerings: { blurbs: any }
  practices_headline: string
  practices_description: string
  practices: any
  contact_headline: string
  contact_description: string
  contact_button: string
  contact_email: string
}

export const HomePageTemplate: FunctionComponent<HomePageProps> = ({
  title,
  meta_title,
  meta_description,
  heading,
  offerings,
  practices_headline,
  practices_description,
  practices,
  contact_headline,
  contact_description,
  contact_button,
  contact_email,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <>
      <HeroSection title={title} heading={heading} />
      <section id="offerings">
        <Offerings offerings={offerings.blurbs} />
      </section>
      <Practices
        headline={practices_headline}
        description={practices_description}
        practices={practices}
      />
      <CallToAction
        id="contact"
        headline={contact_headline}
        description={contact_description}
        email={contact_email}
        button_label={contact_button}
      />
    </>
  </div>
)
