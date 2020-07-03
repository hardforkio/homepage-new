import '../../scss/main.scss'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { ContactSection } from '.'
import { ContactForm, FormValues } from './ContactForm'

const HEADLINE = 'We want YOU!'
const DESCRIPTION = 'To take action and apply for a job click the button.'

storiesOf('Contact Section', module).add('default', () => (
  <ContactSection headline={HEADLINE} description={DESCRIPTION} />
))

const actionTracker = (values: FormValues): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, 1000)).then(resolve =>
    action('mocked data send')(values),
  )
}

storiesOf('Contact Form', module).add('only form, no decoration', () => (
  <ContactForm sendData={actionTracker} />
))
