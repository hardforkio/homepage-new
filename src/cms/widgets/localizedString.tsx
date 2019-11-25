import * as React from 'react'
import * as R from 'ramda'
import cn from 'classnames'

import styles from './styles.module.scss'

const LOCALES = ['de', 'en']
const DEFAULT = [
  { locale: 'de', value: '' },
  { locale: 'en', value: '' },
]

const deLens = R.lensPath(['0', 'value'])
const enLens = R.lensPath(['1', 'value'])

interface WidgetProps {
  value: any
  onChange: (value: any) => void
}

export class Widget extends React.Component<WidgetProps> {
  componentDidMount() {
    if (R.isEmpty(this.props.value)) {
      this.props.onChange(DEFAULT)
    }
  }
  render() {
    return (
      <div className={cn(styles.defaults)}>
        <input
          style={{ display: 'block', width: '100%', position: 'relative' }}
          value={R.pipe<any, any, any>(
            R.view(deLens),
            R.defaultTo(''),
          )(this.props.value)}
          onChange={event => {
            this.props.onChange(
              R.set(deLens, event.target.value, this.props.value),
            )
          }}
          type="text"
        />
        <input
          value={R.pipe<any, any, any>(
            R.view(enLens),
            R.defaultTo(''),
          )(this.props.value)}
          onChange={event => {
            console.log(event.target.value)
            this.props.onChange(
              R.set(enLens, event.target.value, this.props.value),
            )
          }}
          type="text"
        />
      </div>
    )
  }
}

export const Wrapper: React.FunctionComponent = () => {
  const [value, setValue] = React.useState([])
  return (
    <div>
      <div>In the widget I would see:</div>
      <div>
        <Widget onChange={setValue} value={value} />
      </div>
      <div>And in the file I would save:</div>
      <div> {JSON.stringify(value, null, 2)}</div>
    </div>
  )
}
