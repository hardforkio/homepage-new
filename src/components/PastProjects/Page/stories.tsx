import '../../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ProjectPageComponent } from '.'
import { MOCK_PROJECTS } from '../mockData'

storiesOf('Project Page', module)
  .add('default', () => <ProjectPageComponent {...MOCK_PROJECTS[0]} />)
  .add('with image', () => <ProjectPageComponent {...MOCK_PROJECTS[1]} />)
