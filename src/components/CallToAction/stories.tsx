import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'

import { MockedExternalLink } from '../ExternalLink'
import CallToAction from './'

const HEADLINE = 'We want YOU!'
const DESCRIPTION = 'To take action and apply for a job click the button.'
const BUTTONLABEL = 'Click here!'

storiesOf('CallToAction', module).add('default', () => (
  <CallToAction
    headline={HEADLINE}
    description={DESCRIPTION}
    buttonLabel={BUTTONLABEL}
    Link={MockedExternalLink}
    url="https://example.org"
  />
))
