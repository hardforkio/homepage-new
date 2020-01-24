import React from 'react'
import { render } from '@testing-library/react'
import { createLocalizedStringControl } from './control'
import { TranslationCollection } from '../../i18n-lib'
import { fromJS } from 'immutable'

const LocalizedStringControl = createLocalizedStringControl(['de', 'en'])

const data: TranslationCollection<string> = [{ locale: 'de', value: 'Hallo' }]

test('LocalizedStringControl accepts immutable data.', () => {
  const testProps = {
    value: fromJS(data),
    onChange: jest.fn(),
    onChangeObject: jest.fn(),
    forID: 'test-id',
    classNameWrapper: '',
  }
  const { getByLabelText } = render(<LocalizedStringControl {...testProps} />)
  expect(getByLabelText('de')).toHaveValue('Hallo')
})
