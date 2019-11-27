import '../../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from 'reactstrap'
import { PastProjectsComponent } from '.'
import * as R from 'ramda'
import { MOCK_PROJECTS } from '../mockData'

storiesOf('Past Projects', module)
  .add('1 Project', () => (
    <Container>
      <PastProjectsComponent
        headline={HEADLINE}
        projects={getOneProject(MOCK_PROJECTS)}
      />
    </Container>
  ))
  .add('4 Projects', () => (
    <Container>
      <PastProjectsComponent headline={HEADLINE} projects={MOCK_PROJECTS} />
    </Container>
  ))

const HEADLINE = 'Past Projects'

const getOneProject = R.slice(0, 1)
