import * as R from 'ramda'
import React, { ComponentClass, FC } from 'react'
import { FormRenderProps } from 'react-final-form'
import { Button, ButtonProps } from 'reactstrap'
import {
  defaultProps,
  InferableComponentEnhancerWithProps,
  mapper,
  mapProps,
  nest,
} from 'recompose'

import { useTranslations } from '../../../utils/hooks'
import translations from '../translations.json'

const stringToReactNode = (value: string) => <>{value}</>

const mapPropsWithChildren: (
  propsMapper: mapper<any, any>,
) => InferableComponentEnhancerWithProps<any, any> = R.partial(
  // @ts-ignore
  R.pipe(R.pipe(R.converge, R.unapply)(R.merge), mapProps),
  [R.pick(['children'])],
)

type SubmitButtonProps = Pick<
  FormRenderProps<any>,
  'submitSucceeded' | 'submitting' | 'submitError'
> &
  Partial<FormRenderProps<any>>

const submitSuccessfulAndHasNotBeenTouchedSince = R.allPass([
  R.prop('submitSucceeded'),
  R.pipe<FormRenderProps, boolean, boolean>(
    R.prop('dirtySinceLastSubmit'),
    R.not,
  ),
])
const shouldBeDisabled = R.anyPass([
  R.prop('submitting'),
  submitSuccessfulAndHasNotBeenTouchedSince,
])

const SubmitButtonText: FC<SubmitButtonProps> = R.pipe(
  R.converge(R.call, [
    R.pipe(R.thunkify(useTranslations)(translations), R.head),
    R.cond<SubmitButtonProps, string>([
      [R.prop('submitting'), R.always('submitting')],
      [R.prop('submitError'), R.always('submit error')],
      [submitSuccessfulAndHasNotBeenTouchedSince, R.always('submit success')],
      [R.T, R.always('submit')],
    ]),
  ]),
  stringToReactNode,
)

const getColor = R.ifElse(
  submitSuccessfulAndHasNotBeenTouchedSince,
  R.always('success'),
  R.always('primary'),
)

const formRenderPropsToSubmitButtonProps: (
  props: SubmitButtonProps,
) => ButtonProps = R.applySpec({
  color: getColor,
  disabled: shouldBeDisabled,
})

const OuterButton = R.pipe(
  defaultProps<{
    block?: boolean
    type?: 'submit' | 'reset' | 'button'
    className?: string
  }>({
    block: true,
    type: 'submit',
    className: 'text-uppercase',
  }),
  mapPropsWithChildren(formRenderPropsToSubmitButtonProps),
)(Button)

export const SubmitButton: ComponentClass<SubmitButtonProps> = nest(
  OuterButton,
  SubmitButtonText,
)
