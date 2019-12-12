import '../../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { PastProjectsComponent } from '.'
import * as R from 'ramda'
import { MOCK_PROJECTS } from '../mockData'
import { DispatchActionLink } from '../../../storybook/helpers'

storiesOf('Past Projects', module)
  .add('1 Project', () => (
    <PastProjectsComponent
      headline={HEADLINE}
      projects={getOneProject(MOCK_PROJECTS)}
      linkTag={DispatchActionLink}
    />
  ))
  .add('4 Projects', () => (
    <PastProjectsComponent
      headline={HEADLINE}
      projects={getFourProjects(MOCK_PROJECTS)}
      linkTag={DispatchActionLink}
    />
  ))
  .add('7 Projects', () => (
    <PastProjectsComponent
      headline={HEADLINE}
      projects={MOCK_PROJECTS}
      linkTag={DispatchActionLink}
    />
  ))

const HEADLINE = 'Past Projects'

const getOneProject = R.slice(0, 1)
const getFourProjects = R.slice(0, 4)
