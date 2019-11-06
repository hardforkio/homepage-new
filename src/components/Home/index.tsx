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
        <title>{meta_title}</title>
        <meta name="description" content={meta_description} />
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
      </Layout>
    </div>
  )
}
