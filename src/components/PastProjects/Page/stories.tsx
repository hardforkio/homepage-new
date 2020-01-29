import '../../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import React from 'react'

import { MOCK_PROJECTS } from '../mockData'
import { ProjectPageComponent } from '.'

storiesOf('Project Page', module)
  .add('default', () => <ProjectPageComponent {...MOCK_PROJECTS[0]} />)
  .add('with image', () => <ProjectPageComponent {...MOCK_PROJECTS[1]} />)
