import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import CallToAction from '.'

const SPECS = {
  headline: 'We want YOU!',
  description: 'To take action and apply for a job click the button.',
  buttonLabel: 'Click here!',
  email: 'mailto:example@gmx.com',
  id: 3,
}

storiesOf('CallToAction', module).add('default', () => (
  <CallToAction {...SPECS} />
))
