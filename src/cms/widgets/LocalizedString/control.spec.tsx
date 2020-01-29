import { render } from '@testing-library/react'
import { fromJS } from 'immutable'
import React from 'react'

import { TranslationCollection } from '../../i18n-lib'
import { createLocalizedStringControl } from './control'

const LocalizedStringControl = createLocalizedStringControl(['de', 'en'])

const data: TranslationCollection<string> = [{ locale: 'de', value: 'Hallo' }]

test('LocalizedStringControl accepts immutable data.', () => {
  const testProps = {
    value: fromJS(data),
    onChange: jest.fn(),
    forID: 'test-id',
    classNameWrapper: '',
  }
  const { getByLabelText } = render(<LocalizedStringControl {...testProps} />)
  expect(getByLabelText('de')).toHaveValue('Hallo')
})
