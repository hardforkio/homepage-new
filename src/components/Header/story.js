import React from 'react'
import { storiesOf } from '@storybook/react'

import { HeaderComponent } from '.'

storiesOf('Header', module)
  .add('default', () => <HeaderComponent />)
  .add('transparent', () => <HeaderComponent isHome={true} />)
