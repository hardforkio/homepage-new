import '../../scss/main.scss'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Container } from 'reactstrap'
import wait from 'waait'

import { ContactSection } from '.'
import { ContactForm, FormValues } from './ContactForm'

const HEADLINE = 'We want YOU!'
const DESCRIPTION = 'To take action and apply for a job click the button.'

storiesOf('Contact Section', module).add('default', () => (
  <ContactSection headline={HEADLINE} description={DESCRIPTION} />
))

storiesOf('Contact Section', module).add('Only form, no decoration', () => (
  <Container>
    <ContactForm sendData={logSubmissionAndFakeAjaxRequest} />
  </Container>
))

const initialValues = {
  name: 'Jane Doe',
  company: 'Google',
  email: 'jane@gmail.com',
  phone: '000',
  message: 'Hi!',
  acceptPrivacy: true,
} as FormValues

storiesOf('Contact Section', module).add('Form with prefilled values', () => (
  <Container>
    <ContactForm
      sendData={logSubmissionAndFakeAjaxRequest}
      initialValues={initialValues}
    />
  </Container>
))

storiesOf('Contact Section', module).add('Form with default values', () => {
  const testContactForm = (
    <Container>
      <ContactForm
        sendData={logSubmissionAndFakeAjaxRequest}
        initialValues={initialValues}
      />
    </Container>
  )
  console.log(testContactForm.props)
  return testContactForm
})

const logSubmissionAndFakeAjaxRequest = (values: FormValues): Promise<void> => {
  action('Form submitted')(values)
  return wait(1000)
}
