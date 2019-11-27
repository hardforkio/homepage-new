import '../../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'reactstrap'
import { PastProjectsComponent } from '.'
import * as R from 'ramda'
import { ProjectProps } from '../../../data/home'

storiesOf('Past Projects', module)
  .add('1 Project', () => (
    <Container>
      <PastProjectsComponent
        headline={HEADLINE}
        projects={getOneProject(projects)}
      />
    </Container>
  ))
  .add('4 Projects', () => (
    <Container>
      <PastProjectsComponent headline={HEADLINE} projects={projects} />
    </Container>
  ))

const HEADLINE = 'Past Projects'

const projects: ProjectProps[] = [
  {
    client: 'FND',
    clientLink: 'fnd',
    reference: 'string',
    product:
      'A digital investment platform for investments in real estate funds',
    application: 'string',
    technologies: 'string',
    responsibilies: 'string',
  },
  {
    client: 'SatoshiPay',
    clientLink: 'stoshi',
    reference: 'string',
    product:
      'Micropayment "one click, zero signup" solution using Bitcoin / Blockchain (today Stellar)',
    application: 'string',
    technologies: 'string',
    responsibilies: 'string',
  },
  {
    client: 'FND',
    clientLink: 'fnd',
    reference: 'string',
    product:
      'A digital investment platform for investments in real estate funds',
    application: 'string',
    technologies: 'string',
    responsibilies: 'string',
  },
  {
    client: 'SatoshiPay',
    clientLink: 'stoshi',
    reference: 'string',
    product:
      'Micropayment "one click, zero signup" solution using Bitcoin / Blockchain (today Stellar)',
    application: 'string',
    technologies: 'string',
    responsibilies: 'string',
  },
]

const getOneProject = R.slice(0, 1)
