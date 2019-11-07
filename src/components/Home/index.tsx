import React, { FunctionComponent, useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Practices from '../Practices'
import CallToAction from '../CallToAction'
import Layout from '../layout'
import { useInView } from 'react-hook-inview'
import { IntroSection } from './intro'

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
  metaTitle,
  metaDescription,
  heading,
  offerings,
  practicesHeadline,
  practicesDescription,
  practices,
  contactHeadline,
  contactDescription,
  contactButton,
  contactEmail,
}) => {
  const [startAnimation, setAnimation] = useState(false)
  const [startSecondAnimation, setSecondAnimation] = useState(false)
  const [startThirdAnimation, setThirdAnimation] = useState(false)

  const [ref, inView] = useInView()

  useEffect(() => {
    setAnimation(true)
    setTimeout(() => {
      setThirdAnimation(true)
    }, 2000)
  }, [])

  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Layout isHeaderTransparent={inView}>
        <>
          <div ref={ref}>
            <IntroSection
              startSecondAnimation={startSecondAnimation}
              startAnimation={startAnimation}
              setSecondAnimation={setSecondAnimation}
              title={title}
              heading={heading}
              startThirdAnimation={startThirdAnimation}
            />
          </div>
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
            button_label={contactButton}
          />
        </>
      </Layout>
    </div>
  )
}
