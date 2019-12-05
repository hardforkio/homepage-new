import React, { FunctionComponent } from 'react'
import { Offerings } from '../Offerings'
import CallToAction from '../CallToAction'
import { HeroSection } from '../Hero'
import cn from 'classnames'
import styles from './Home.module.scss'
import { PastProjectsComponent } from '../PastProjects/Section'
import { Container } from 'reactstrap'
import { Link } from 'gatsby'
import { HomeData } from '../../data/home/types'
import { ProjectData } from '../../data/project/types'

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
  emailButton,
  contactEmail,
  projectsHeadline,
  projects,
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
    <section>
      <Container>
        <PastProjectsComponent
          headline={projectsHeadline}
          projects={projects}
          linkTag={Link}
        />
      </Container>
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
