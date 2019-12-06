import React from 'react'
import { storiesOf } from '@storybook/react'
import { Bootstrap } from './components/bootstrap'
import { Form } from './components/form'
import { Headlines } from './components/headlines'

storiesOf('Elements', module)
  .add('All', Bootstrap)
  .add('Form', () => <Form />)
  .add('Headlines', () => <Headlines />)
