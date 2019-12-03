import React, { FunctionComponent, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from 'reactstrap'

interface ContactProps {
  headline: string
  description: string
  Link?: any
  buttonLabel: string
  url: string
}

export const ContactSection: FunctionComponent<ContactProps> = ({
  headline,
  description,
}) => (
  <div className="py-3 py-md-5 bg-white text-dark">
    <Container>
      <Row className="py-3 py-md-5 justify-content-center">
        <Col md={8} className="text-center text-md-left">
          <header>
            <h4 className="mb-4">{headline}</h4>
            <p>{description}</p>
          </header>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  </div>
)

interface ContactFormProps {
  labels?: {
    name: string
    company: string
    phone: string
    body: string
    submitButtonText: string
    submitButtonSuccessText: string
  }
}

const CONTACT_EMAIL: string = '36e919fa91e3e3e350fac038388f1737'
const FORM_SUBMIT_ENDPOINT: string = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const ContactForm: FunctionComponent<ContactFormProps> = ({
  labels: {
    name = 'Name',
    company = 'Company',
    phone = 'Phone',
    body = 'Your inquiry',
    submitButtonText = 'Send',
    submitButtonSuccessText = 'Sent',
  } = {},
}) => {
  const [success, setSuccess] = useState(false)

  return (
    <Form
      onSubmit={(event: any) => {
        const data: FormData = new FormData(event.target)
        submitFormData(FORM_SUBMIT_ENDPOINT, data, () => setSuccess(true))
        event.preventDefault()
      }}
    >
      <FormGroup>
        <Label hidden for="contactform-input-name">
          {name}
        </Label>
        <Input
          id="contactform-input-name"
          name="name"
          placeholder={name}
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label hidden for="contactform-input-company">
          {company}
        </Label>
        <Input
          id="contactform-input-company"
          name="company"
          placeholder={company}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label hidden for="contactform-input-phone">
          {phone}
        </Label>
        <Input
          type="tel"
          id="contactform-input-phone"
          name="phone"
          placeholder={phone}
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label hidden for="contactform-input-body">
          {body}
        </Label>
        <textarea
          className="form-control"
          id="contactform-input-body"
          name="body"
          rows={8}
          required
          placeholder={body}
        ></textarea>
      </FormGroup>
      <Button
        type="submit"
        color="primary"
        className="px-5 my-4 text-uppercase mx-auto"
      >
        {success ? submitButtonSuccessText : submitButtonText}
      </Button>
      <Input type="hidden" name="_captcha" value="false" />
      <Input type="hidden" name="_template" value="table" />
      <Input name="_honey" className="d-none" />
    </Form>
  )
}

const submitFormData = (
  url: string,
  data: FormData,
  onSuccess: () => void = () => undefined,
) =>
  fetch(url, {
    method: 'POST',
    body: data,
  }).then((response: Response) => (response.ok ? onSuccess() : undefined))
