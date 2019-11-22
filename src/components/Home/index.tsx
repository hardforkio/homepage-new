import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { HomeData, useHome } from '../../data/home'
import Layout from '../layout'
import { Team } from '../Team'
import * as R from 'ramda'
import { TeamData } from '../../data/team'

export const HomePageTemplate: FunctionComponent<HomeData> = ({
  title,
  heading,
  offerings,
  contactHeadline,
  contactDescription,
  contactButtonText,
  moreLinkText,
  emailButton,
  contactEmail,
  metaDescription,
  team,
}) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <>
      <HeroSection
        title={title}
        heading={heading}
        contactButtonText={contactButtonText}
        moreLinkText={moreLinkText}
      />
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
          buttonLabel={emailButton}
        />
      </section>
      <section id="team">
        {hasMembers(team) ? <Team {...team}></Team> : ''}
      </section>
    </>
  </div>
)

const hasMembers: (team: TeamData) => boolean = R.pipe(
  R.prop('members'),
  R.isEmpty,
  R.not,
)

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  return (
    <Layout title={data.metaTitle}>
      <HomePageTemplate {...data} />
    </Layout>
  )
}
