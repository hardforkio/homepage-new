import React from 'react'
import uuidv4 from 'uuid/v4'

interface WidgetProps {
  value?: string
  field: Map<any, any>
  forID: string
  onChange: (value: string) => void
  classNameWrapper: string
}

const grayTextColor = {
  color: '#cdcdcd',
}

// Widgets cannot be function components.
export class UuidControl extends React.Component<WidgetProps> {
  componentDidMount() {
    const { value, onChange } = this.props

    if (!value) {
      onChange(uuidv4())
    }
  }

  render() {
    const { value, classNameWrapper, forID } = this.props

    return (
      <input
        type="text"
        id={forID}
        value={value || ''}
        className={classNameWrapper}
        style={grayTextColor}
        disabled
      />
    )
  }
}
