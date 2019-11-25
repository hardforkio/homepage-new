import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { Wrapper } from './localizedString'

storiesOf('Widgets.LocalizedString', module).add('default', () => <Wrapper />)
