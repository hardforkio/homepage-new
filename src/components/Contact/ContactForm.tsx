import { FORM_ERROR } from 'final-form'
import React, { FunctionComponent, useCallback } from 'react'
import { Field, Form as FinalForm } from 'react-final-form'
import {
  Alert,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap'
import request from 'superagent'

import { usePathPrefix, useTranslations } from '../../utils/hooks'
import { SafeExternalLink } from '../Link'
import { SubmitButton } from './SubmitButton'
import translations from './translations.json'

export const CONTACT_EMAIL: string = 'contact@hardfork.io'
const FORM_SUBMIT_ENDPOINT: string = `https://formsubmit.co/ajax/`

export interface FormValues {
  name: string
  company: string
  email: string
  phone: string
  message: string
  _honey: string
  _captcha: boolean
  acceptPrivacy: boolean
}

//TODO: make this a function creator that accepts an email address
// (and rename it to onSubmit to make its usage transparent)
export const onSubmit = (contactEmail: string) => async (
  values: FormValues,
) => {
  const response = await request
    .post(`${FORM_SUBMIT_ENDPOINT}${contactEmail}`)
    .type('form')
    .send(values)
  const body = JSON.parse(response.text)
  if (body.success !== 'true') {
    throw new Error('Failed to submit successfully')
  }
}

interface ContactFormProps {
  initialValues?: FormValues
  sendData: (values: FormValues, form: any) => Promise<void>
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  initialValues,
  sendData,
}) => {
  const [t] = useTranslations(translations)
  const privacyLink: string = usePathPrefix('/privacy-policy')
  const onSubmit = useCallback(
    async (values: FormValues, form: any) => {
      try {
        if (sendData) {
          await sendData(values, form)
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
          ...initialValues,
          _captcha: false,
        } as FormValues
      }
      render={(formRenderProps) => (
        <Form onSubmit={formRenderProps.handleSubmit}>
          <Row form>
            <Field name="name">
              {({ input }) => (
                <Col xs={12} sm={6} tag={FormGroup}>
                  <Label hidden for="contactform-input-name">
                    {t('name')}
                  </Label>
                  <Input
                    {...(input as any)}
                    id="contactform-input-name"
                    placeholder={t('name')}
                    required
                  />
                </Col>
              )}
            </Field>

            <Field name="company">
              {({ input }) => (
                <Col xs={12} sm={6} tag={FormGroup}>
                  <Label hidden for="contactform-input-company">
                    {t('company')}
                  </Label>
                  <Input
                    {...(input as any)}
                    id="contactform-input-company"
                    name="company"
                    placeholder={t('company')}
                  />
                </Col>
              )}
            </Field>
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
                />
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
          <Row form>
            <Field name="acceptPrivacy">
              {({ input }) => (
                <Col xs={12} tag={FormGroup}>
                  <CustomInput
                    {...input}
                    checked={input.value}
                    required
                    type="checkbox"
                    id="accept-privacy"
                    label={
                      <span>
                        {t('acceptPrivacyBeginning')}
                        <SafeExternalLink to={privacyLink}>
                          {t('privacyPolicyLinkText')}
                        </SafeExternalLink>
                        {t('acceptPrivacyEnding')}
                      </span>
                    }
                  />
                </Col>
              )}
            </Field>
          </Row>
          <Row>
            <Col xs={{ size: 6, offset: 6 }} md={{ size: 4, offset: 8 }}>
              <SubmitButton {...formRenderProps} />
            </Col>
            {formRenderProps.submitError ? (
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
