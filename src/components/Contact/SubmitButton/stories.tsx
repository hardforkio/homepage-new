import '../../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import React from 'react'
import { Field, Form } from 'react-final-form'
import { Container } from 'reactstrap'
import wait from 'waait'

import { SubmitButton } from '.'

const MockForm = () => (
  <Form<{ firstName: string }>
    onSubmit={() => wait(2000)}
    render={formRenderProps => (
      <form onSubmit={formRenderProps.handleSubmit}>
        <h2>Simple Default Input</h2>
        <Field name="firstName" component="input" placeholder="First Name" />
        <SubmitButton {...formRenderProps} />
      </form>
    )}
  />
)

storiesOf('Contact Section/Submit Button', module).add(
  'mock form with submit button',
  () => (
    <Container>
      <MockForm />
    </Container>
  ),
)

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
