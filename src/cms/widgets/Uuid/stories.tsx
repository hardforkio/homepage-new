import React from 'react'
import '../../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import cn from 'classnames'
import styles from '../styles.module.scss'
import { UuidControl } from './control'

export const Wrapper: React.FunctionComponent<{}> = () => {
  const [value, setValue] = React.useState<string>()

  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <UuidControl
          forID={'widget-identifier'}
          classNameWrapper={cn(styles.netlify)}
          onChange={setValue}
          value={value}
        />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}

storiesOf('Widgets.Uuid', module).add('default', () => <Wrapper />)
