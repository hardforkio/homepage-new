import React from 'react'
import { storiesOf } from '@storybook/react'

import CallToAction from '../src/components/CallToAction'

storiesOf('components/CallToAction', module)
  .add('filled', () => (<CallToAction headline='headline' description='description' email='example@host.com' button_label='button_label' />))
  .add('empty', () => (<CallToAction />))

