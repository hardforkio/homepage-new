import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { HomeData, useHomeData } from '../../data/home'
import Layout from '../layout'

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
      <section
        className={cn(styles.avoidOverlapWithStickyHeader)}
        id="offerings"
      >
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

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHomeData()
  return (
    <Layout title={data.metaTitle}>
      <HomePageTemplate {...data} />
    </Layout>
  )
}
