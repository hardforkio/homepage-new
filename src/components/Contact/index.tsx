import React, { FunctionComponent, useCallback, FC } from 'react'
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
import { ContactFormProps } from '../../data/home/types'

import { FORM_ERROR } from 'final-form'
import * as R from 'ramda'
import translations from './translations.json'
import { useTranslations } from '../../utils/hooks'

interface ContactSectionProps {
  headline: string
  description: string
  formProps: ContactFormProps
}

export const ContactSection: FunctionComponent<ContactSectionProps> = ({
  headline,
  description,
  formProps,
}) => (
  <div className="py-3 py-md-5 bg-white text-dark">
    <Container>
      <Row className="py-3 py-md-5 justify-content-center">
        <Col md={8} className="text-center text-md-left">
          <header>
            <h4 className="mb-4">{headline}</h4>
            <p>{description}</p>
          </header>
          <ContactForm {...formProps} />
        </Col>
      </Row>
    </Container>
  </div>
)

const CONTACT_EMAIL: string = 'contact@hardfork.io'
const FORM_SUBMIT_ENDPOINT: string = `https://formsubmit.co/${CONTACT_EMAIL}`

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  const [t] = useTranslations(translations)
  return (
    <Form action={FORM_SUBMIT_ENDPOINT} method="POST">
      <Row form>
        <Col xs={12} sm={6}>
          <FormGroup>
            <Label hidden for="contactform-input-name">
              {t('name')}
            </Label>
            <Input
              id="contactform-input-name"
              placeholder={t('name')}
              required
              name="name"
            />
          </FormGroup>
        </Col>
        <Col xs={12} sm={6}>
          <FormGroup>
            <Label hidden for="contactform-input-company">
              {t('company')}
            </Label>
            <Input
              id="contactform-input-company"
              name="company"
              placeholder={t('company')}
            ></Input>
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label hidden for="contactform-input-phone">
          {t('phone')}
        </Label>
        <Input
          name="phone"
          type="tel"
          id="contactform-input-phone"
          placeholder={t('phone')}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label hidden for="contactform-input-email">
          {t('email')}
        </Label>
        <Input
          name="email"
          type="email"
          id="contactform-input-email"
          placeholder={t('email')}
          required
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label hidden for="contactform-input-body">
          {t('message')}
        </Label>
        <textarea
          className="form-control"
          id="contactform-input-body"
          name="message"
          rows={8}
          required
          placeholder={t('message')}
        />
      </FormGroup>
      <Row className="my-4">
        <Col xs={12} md={{ size: 6, offset: 6 }}>
          <Button
            block
            type="submit"
            color="primary"
            className="px-5 my-2 text-uppercase"
          >
            {t('submit')}
          </Button>
        </Col>
      </Row>
      <Input type="hidden" name="_captcha" value="false" />
      <Input type="hidden" name="_template" value="table" />
      <Input name="_honey" className="d-none" />
    </Form>
  )
}
