import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { createLocalizedStringWidget } from './localizedString'

const LocalizedStringControl = createLocalizedStringWidget(['de', 'en'])

export const Wrapper: React.FunctionComponent = () => {
  const [value, setValue] = React.useState([])
  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <LocalizedStringControl onChange={setValue} value={value} />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

storiesOf('Widgets.LocalizedString', module).add('default', () => <Wrapper />)
