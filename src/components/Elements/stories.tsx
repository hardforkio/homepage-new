import { storiesOf } from '@storybook/react'
import React from 'react'

import { Bootstrap } from './components/bootstrap'
import { Form } from './components/form'
import { Headlines } from './components/headlines'
import { Text } from './components/text'

storiesOf('Elements', module)
  .add('All', Bootstrap)
  .add('Form', () => <Form />)
  .add('Headlines', () => <Headlines />)
  .add('Text', () => <Text />)
