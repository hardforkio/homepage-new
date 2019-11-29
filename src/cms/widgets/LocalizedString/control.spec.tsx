import React from 'react'
import { render } from '@testing-library/react'
import { createLocalizedStringWidget } from './control'
import { TranslationCollection } from '../i18n'

import { fromJS } from 'immutable'

const Widget = createLocalizedStringWidget(['de', 'en'])

const data: TranslationCollection<string> = [{ locale: 'de', value: 'Hallo' }]

test('Widget accepts immutable data.', () => {
  const { getByLabelText } = render(
    <Widget value={fromJS(data)} onChange={jest.fn()} />,
  )
  expect(getByLabelText('de')).toHaveValue('Hallo')
})
