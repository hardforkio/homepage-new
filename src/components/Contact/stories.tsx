import '../../scss/main.scss'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { Container } from 'reactstrap'

import { ContactSection } from '.'
import { ContactForm, FormValues } from './ContactForm'
import { SubmitButton } from './SubmitButton'

const HEADLINE = 'We want YOU!'
const DESCRIPTION = 'To take action and apply for a job click the button.'

storiesOf('Contact Section', module).add('default', () => (
  <ContactSection headline={HEADLINE} description={DESCRIPTION} />
))

const actionTracker = (values: FormValues, form: any): Promise<void> => {
  setTimeout(form.reset, 3000)
  console.log(form)
  return new Promise(resolve => setTimeout(resolve, 1000)).then(resolve =>
    action('mocked data send')(values),
  )
}

storiesOf('Contact Section', module).add('Only form, no decoration', () => (
  <Container>
    <ContactForm sendData={actionTracker} />
  </Container>
))

const initialValues = {
  name: 'Jane Doe',
  company: 'Google',
  email: 'jane@gmail.com',
  phone: '000',
  message: 'Hi!',
} as FormValues

storiesOf('Contact Section', module).add('Form with prefilled values', () => (
  <Container>
    <ContactForm sendData={actionTracker} initialValues={initialValues} />
  </Container>
))

storiesOf('Contact Section', module).add('Form with default values', () => {
  const testContactForm = (
    <Container>
      <ContactForm sendData={actionTracker} initialValues={initialValues} />
    </Container>
  )
  console.log(testContactForm.props)
  return testContactForm
})

storiesOf('Contact Section/Submit Button', module).add(
  'submit button in different stages',
  () => (
    <Container>
      <SubmitButton
        submitting={false}
        submitError={false}
        submitSucceeded={false}
      />
      <SubmitButton
        submitting={true}
        submitError={false}
        submitSucceeded={false}
      />
      <SubmitButton
        submitting={false}
        submitError={false}
        submitSucceeded={true}
      />
      <SubmitButton
        submitting={false}
        submitError={true}
        submitSucceeded={false}
      />
    </Container>
  ),
)
