import React, { FC } from 'react'
import { Button } from 'reactstrap'

import { useTranslations } from '../../utils/hooks'
import translations from './translations.json'

interface SubmitButtonProps {
  submitting: boolean
  submitError: boolean
  submitSucceeded: boolean
}

export const SubmitButton: FC<SubmitButtonProps> = ({
  submitting,
  submitError,
  submitSucceeded,
}) => (
  <Button
    block
    disabled={submitting || submitSucceeded}
    type="submit"
    color={submitSucceeded ? 'success' : 'primary'}
    className="px-5 my-2 text-uppercase"
  >
    <SubmitButtonText
      submitting={submitting}
      submitError={submitError}
      submitSucceeded={submitSucceeded}
    />
  </Button>
)

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
