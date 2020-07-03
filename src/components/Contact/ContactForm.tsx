import { FORM_ERROR } from 'final-form'
import * as R from 'ramda'
import React, { FC, FunctionComponent, useCallback } from 'react'
import { Field, Form as FinalForm } from 'react-final-form'
import {
  Alert,
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import request from 'superagent'

import { useTranslations } from '../../utils/hooks'
import translations from './translations.json'

const CONTACT_EMAIL: string = 'contact@hardfork.io'
const FORM_SUBMIT_ENDPOINT: string = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export interface FormValues {
  name: string
  company: string
  email: string
  phone: string
  message: string
  _honey: string
  _captcha: boolean
}

const sendDataDefault = async (values: FormValues) => {
  const response = await request
    .post(FORM_SUBMIT_ENDPOINT)
    .type('form')
    .send(values)
  const body = JSON.parse(response.text)
  console.log(body)
  if (body.success !== 'true') {
    throw new Error('Failed to submit successfully')
  }
}

interface ContactFormProps {
  sendData?: (values: FormValues) => Promise<void>
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  sendData = sendDataDefault,
}) => {
  const [t] = useTranslations(translations)
  const onSubmit = useCallback(
    async (values: FormValues) => {
      try {
        if (sendData) {
          await sendData(values)
        }
        return {}
      } catch (error) {
        console.error(error)
        return { [FORM_ERROR]: error.message }
      }
    },
    [sendData],
  )
  return (
    <FinalForm<FormValues>
      onSubmit={onSubmit}
      initialValues={
        {
          _captcha: false,
        } as FormValues
      }
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
            {formProps.submitError ? (
              <Alert color="danger">
                There was an error during submission. Please try a different
                browser without adblockers. If the problem persists please send
                an email to contact@hardfork.io
              </Alert>
            ) : null}
          </Row>
          <Field name="_captcha">
            {({ input }) => (
              <Input type="checkbox" {...(input as any)} className="d-none" />
            )}
          </Field>
          <Field name="_honey">
            {({ input }) => <Input {...(input as any)} className="d-none" />}
          </Field>
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
