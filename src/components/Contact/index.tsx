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
import { Form as FinalForm, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'
import * as R from 'ramda'
import translations from './translations.json'
import { useTranslations } from '../../utils/hooks'
import request from 'superagent'

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
const FORM_SUBMIT_ENDPOINT: string = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

interface FormValues {
  name: string
  company: string
  email: string
  phone: string
  body: string
}

const sendData = (values: FormValues) =>
  request
    .post(FORM_SUBMIT_ENDPOINT)
    .type('json')
    .send(values)

const ContactForm: FunctionComponent<ContactFormProps> = () => {
  const [t] = useTranslations(translations)
  const onSubmit = useCallback(async (values: FormValues) => {
    try {
      await sendData(values)
      return {}
    } catch (error) {
      return { [FORM_ERROR]: error.message }
    }
  }, [])
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={formProps => (
        <Form onSubmit={formProps.handleSubmit}>
          <Row form>
            <Col xs={12} sm={6}>
              <Field name="name">
                {({ input }) => (
                  <FormGroup>
                    <Label hidden for="contactform-input-name">
                      {t('name')}
                    </Label>
                    <Input
                      {...(input as any)}
                      id="contactform-input-name"
                      placeholder={t('name')}
                      required
                    />
                  </FormGroup>
                )}
              </Field>
            </Col>
            <Col xs={12} sm={6}>
              <Field name="company">
                {({ input }) => (
                  <FormGroup>
                    <Label hidden for="contactform-input-company">
                      {t('company')}
                    </Label>
                    <Input
                      {...(input as any)}
                      id="contactform-input-company"
                      name="company"
                      placeholder={t('company')}
                    ></Input>
                  </FormGroup>
                )}
              </Field>
            </Col>
          </Row>
          <Field name="phone">
            {({ input }) => (
              <FormGroup>
                <Label hidden for="contactform-input-phone">
                  {t('phone')}
                </Label>
                <Input
                  {...(input as any)}
                  type="tel"
                  id="contactform-input-phone"
                  placeholder={t('phone')}
                  required
                />
              </FormGroup>
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <FormGroup>
                <Label hidden for="contactform-input-email">
                  {t('email')}
                </Label>
                <Input
                  {...(input as any)}
                  type="email"
                  id="contactform-input-email"
                  placeholder={t('email')}
                  required
                ></Input>
              </FormGroup>
            )}
          </Field>
          <Field name="message">
            {({ input }) => (
              <FormGroup>
                <Label hidden for="contactform-input-body">
                  {t('message')}
                </Label>
                <textarea
                  {...(input as any)}
                  className="form-control"
                  id="contactform-input-body"
                  rows={8}
                  required
                  placeholder={t('message')}
                />
              </FormGroup>
            )}
          </Field>
          <Row className="my-4">
            <Col xs={12} md={{ size: 6, offset: 6 }}>
              <Button
                block
                type="submit"
                color="primary"
                className="px-5 my-2 text-uppercase"
              >
                <SubmitButtonText
                  {...R.pick(
                    ['submitting', 'submitError', 'submitSucceeded'],
                    formProps,
                  )}
                />
              </Button>
            </Col>
          </Row>

          <Input type="hidden" name="_captcha" value="false" />
          <Input type="hidden" name="_template" value="table" />
          <Input name="_honey" className="d-none" />
        </Form>
      )}
    />
  )
}

interface SubmitButtonTextProps {
  submitting: boolean
  submitError: boolean
  submitSucceeded: boolean
}

const SubmitButtonText: FC<SubmitButtonTextProps> = ({
  submitting,
  submitError,
  submitSucceeded,
}) => {
  const [t] = useTranslations(translations)
  if (submitting) {
    return <>{t('submitting')}</>
  }
  if (submitError) {
    return <>{t('submit error')}</>
  }
  if (submitSucceeded) {
    return <>{t('submit success')}</>
  }
  return <>{t('submit')}</>
}
