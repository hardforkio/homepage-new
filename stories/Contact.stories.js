import React from 'react'
import { storiesOf } from '@storybook/react'

import Contact from '../src/components/Contact'

storiesOf('components/Contact', module)
  .add('filled', () => (<Contact email='example@host.com' description='description' />))
  .add('empty', () => (<Contact />))

