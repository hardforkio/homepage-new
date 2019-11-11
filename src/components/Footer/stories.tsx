import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { Footer } from './component'
import { DispatchActionLink } from '../../storybook/helpers'

storiesOf('Footer', module).add('default', () => (
  <Footer ExternalLink={DispatchActionLink} InternalLink={DispatchActionLink} />
))
