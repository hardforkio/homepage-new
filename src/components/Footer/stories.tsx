import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import Footer from './'
import { MockedExternalLink } from '../ExternalLink'

storiesOf('Footer', module).add('default', () => (
  <Footer ExtLink={MockedExternalLink} />
))
