import React, { FunctionComponent } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  FormFeedback,
} from 'reactstrap'
import cn from 'classnames'
import { SafeExternalLink } from '../Link'
import { blurryBackgroundBanner } from '../../scss/global.module.scss'

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
  Link = SafeExternalLink,
  buttonLabel,
  url,
}) => (
  <div className={cn(blurryBackgroundBanner, 'py-3', 'py-md-5')}>
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
    submitButton: string
    optional: string
  }
}

const CONTACT_EMAIL: string = '36e919fa91e3e3e350fac038388f1737'

const ContactForm: FunctionComponent<ContactFormProps> = ({
  children,
  labels: {
    name = 'Name',
    company = 'Company',
    phone = 'Phone',
    body = 'Your inquiry',
    submitButton = 'Send',
    optional = 'optional',
  } = {},
}) => (
  <Form action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
    <FormGroup>
      <Label for="contactform-input-name">{name}</Label>
      <Input id="contactform-input-name" name="name" required></Input>
    </FormGroup>
    <FormGroup>
      <Label for="contactform-input-company">{company}</Label>
      <Input
        id="contactform-input-company"
        name="company"
        placeholder={optional}
      ></Input>
    </FormGroup>
    <FormGroup>
      <Label for="contactform-input-phone">{phone}</Label>
      <Input
        type="tel"
        id="contactform-input-phone"
        name="phone"
        required
      ></Input>
    </FormGroup>
    <FormGroup>
      <Label for="contactform-input-body">{body}</Label>
      <textarea
        className="form-control"
        id="contactform-input-body"
        name="body"
        rows={8}
        required
      ></textarea>
    </FormGroup>
    <Input type="hidden" name="_captcha" value="false" />
    <Input name="_honey" className="d-none" />
    <Button
      type="submit"
      color="primary"
      className="px-5 my-4 text-uppercase mx-auto"
    >
      {submitButton}
    </Button>
  </Form>
)
