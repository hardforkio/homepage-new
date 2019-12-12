import React, { ReactNode } from 'react'
import * as R from 'ramda'
import { FunctionComponent } from 'react'

export const mapToComponent = <Props extends unknown>(
  Component: FunctionComponent<Props>,
  list: ReadonlyArray<Props>,
) =>
  R.addIndex<Props, ReactNode>(R.map)(
    (item, index) => <Component key={index} {...item} />,
    list,
  )

/**
 * Returns the first element of ```list``` which matches ```predicate```.
 *
 * If no element matches, returns the first element.
 *
 * If the list is empty, return ```undefined```.
 * @param locale
 */
export const findDefaultingToHead = <T extends unknown>(
  predicate: (item: T) => boolean,
): ((list: T[]) => T | undefined) =>
  R.ifElse(R.any(predicate), R.find<T>(predicate), R.head)

export const submitFormData = (
  url: string,
  formSubmitEvent: any, //DOM Form 'submit' event
  onSuccess: () => void = () => undefined,
) => {
  formSubmitEvent.preventDefault()
  return fetch(url, {
    method: 'POST',
    body: new FormData(formSubmitEvent.target),
  }).then((response: Response) => (response.ok ? onSuccess() : undefined))
}
