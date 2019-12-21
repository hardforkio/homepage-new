import React, { FunctionComponent } from 'react'
import { Offerings } from '../Offerings'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { PastProjectsComponent } from '../PastProjects/Section'
import { Link } from 'gatsby'
import { HomeData } from '../../data/home/types'
import { ProjectData } from '../../data/project/types'
import { Team } from '../Team'
import * as R from 'ramda'
import { TeamData } from '../../data/team'
import { ContactSection } from '../Contact'

export const HomePageComponent: FunctionComponent<HomeData & {
  projects: ProjectData[]
}> = ({
  heroHeadline,
  heroSubheadline,
  offerings,
  contactHeadline,
  contactDescription,
  contactButtonText,
  moreLinkText,
  projectsHeadline,
  projects,
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

    <PastProjectsComponent
      headline={projectsHeadline}
      projects={projects}
      linkTag={Link}
    />
    <section id="team">
      {hasMembers(team) ? <Team {...team}></Team> : ''}
    </section>
    <section id="contact">
      <ContactSection
        headline={contactHeadline}
        description={contactDescription}
      />
    </section>
  </div>
)

const hasMembers: (team: TeamData) => boolean = R.ifElse(
  R.prop('members'),
  R.pipe(R.prop('members'), R.isEmpty, R.not),
  R.F,
)
