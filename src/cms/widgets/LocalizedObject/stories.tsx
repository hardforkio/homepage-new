import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import { createLocalizedObjectControl } from './control'
import { Wrapper } from '../mockNetlify'

storiesOf('Widgets.LocalizedObject', module).add('default', () => (
  <Wrapper Widget={createLocalizedObjectControl(['de', 'en'])} />
))
