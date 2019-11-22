import React, { FunctionComponent } from 'react'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { HomeData, useHome } from '../../data/home'
import { Team } from '../Team'
import * as R from 'ramda'
import { TeamData } from '../../data/team'

export const HomePageComponent: FunctionComponent<HomeData> = ({
  heroHeadline,
  heroSubheadline,
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
    <HeroSection
      headline={heroHeadline}
      subheadline={heroSubheadline}
      contactButtonText={contactButtonText}
      moreLinkText={moreLinkText}
    />
    <section className={cn(styles.avoidOverlapWithStickyHeader)} id="offerings">
      <Offerings offerings={offerings} />
    </section>
    <section id="team">
      {hasMembers(team) ? <Team {...team}></Team> : ''}
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

const hasMembers: (team: TeamData) => boolean = R.pipe(
  R.prop('members'),
  R.isEmpty,
  R.not,
)

export const HomePage: FunctionComponent<{}> = () => {
  const data: HomeData = useHome()
  return <HomePageComponent {...data} />
}
