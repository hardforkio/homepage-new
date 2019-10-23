import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router'

import Button, {MailButton, HeaderButton} from '../src/components/Button'

storiesOf('components/Button', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('filled', () => (
    <Button to='/slug/' label='button' onClick={action('clicked')} />
  ))
  .add('empty', () => (
    <Button />
  ))
  .add('MailButton', () => (
    <MailButton to='/slug/' label='button' onClick={action('clicked')} />
  ))
  .add('HeaderButton', () => (
    <HeaderButton to='/slug/' label='button' onClick={action('clicked')} />
  ))

