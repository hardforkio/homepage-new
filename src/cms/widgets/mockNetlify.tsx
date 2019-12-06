import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Map, fromJS } from 'immutable'

export interface WidgetProps {
  value?: any
  forID?: string // equals field.get('name') + numberID
  field?: Map<string, string>
  fieldsErrors?: Map<any, any>
  classNameWrapper: string
  onChange: (newValue: any, newMetadata?: any) => void
  onChangeObject: (fieldName: string, newValue: any, newMetadata?: any) => void
  setActiveStyle?: React.FocusEventHandler
  setInactiveStyle?: React.FocusEventHandler
}

interface WrapperProps {
  Widget: React.ComponentClass<WidgetProps>
}

export const Wrapper: React.FunctionComponent<WrapperProps> = ({ Widget }) => {
  const [value, setValue] = React.useState(undefined)

  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <Widget
          forID={'widget-identifier'}
          classNameWrapper={cn(styles.netlify)}
          onChange={setValue}
          // TODO: Fix setValue
          onChangeObject={(fn, v) => {}}
          fieldsErrors={fromJS({})}
          value={value}
        />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
