import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Map } from 'immutable'

export interface WidgetProps {
  value?: any // should be undefined as each component sets its own default
  forID?: string // equals field.get('name') + someID
  field?: Map<string, any>
  fieldsErrors?: Map<any, any>
  onChange: (newValue: any, newMetadata?: any) => void
  onChangeObject: (fieldName: string, newValue: any, newMetadata?: any) => void
  classNameWrapper: string
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
          fieldsErrors={Map()}
          field={Map({ fields: [{ name: 'some', widget: 'string' }] })}
          value={value}
        />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
