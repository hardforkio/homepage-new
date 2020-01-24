import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import { createLocalizedStringControl } from './control'
import { Wrapper } from '../mockNetlify'

storiesOf('Widgets.LocalizedString', module)
  .add('default', () => (
    <Wrapper Widget={createLocalizedStringControl(['de', 'en'])} />
  ))
  .add('exotic', () => (
    <Wrapper
      Widget={createLocalizedStringControl([
        'de',
        'de-AT',
        'en',
        'en-US-POSIX',
      ])}
    />
  ))
