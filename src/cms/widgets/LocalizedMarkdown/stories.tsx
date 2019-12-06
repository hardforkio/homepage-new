import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import { createLocalizedMarkdownControl } from './control'
import { Wrapper } from '../mockNetlify'

storiesOf('Widgets.LocalizedMarkdown', module).add('default', () => (
  <Wrapper Widget={createLocalizedMarkdownControl(['de', 'en'])} />
))
