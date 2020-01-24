import React from 'react'
import uuidv4 from 'uuid/v4'

import { WidgetProps } from '../mockNetlify'

const grayTextColor = {
  color: '#cdcdcd',
}

// Has to be React.Component, see: https://github.com/netlify/netlify-cms/issues/1346
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
