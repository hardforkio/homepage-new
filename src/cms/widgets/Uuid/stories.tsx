import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import { UuidControl } from './control'
import { Wrapper } from '../mockNetlify'

storiesOf('Widgets.Uuid', module).add('default', () => (
  <Wrapper Widget={UuidControl} />
))
