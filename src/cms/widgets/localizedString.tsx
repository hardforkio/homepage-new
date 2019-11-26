import * as React from 'react'
import * as R from 'ramda'
import cn from 'classnames'

import styles from './styles.module.scss'
import {
  getTranslation,
  upsertTranslation,
  areValidLocales,
  Locale,
} from './helpers'

interface WidgetProps {
  value: any
  onChange: (value: any) => void
}

interface InputProps extends WidgetProps {
  locale: Locale
}

const InputField: React.FunctionComponent<InputProps> = ({
  locale,
  onChange,
  value,
}) => {
  const handleChange = React.useCallback(
    event => {
      onChange(upsertTranslation(locale, event.target.value)(value))
    },
    [locale, onChange, value],
  )
  return (
    <div>
      <label>{locale}</label>
      <input
        type="text"
        value={getTranslation(locale)(value) || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export const createLocalizedStringWidget = (locales: string[]) => {
  if (!areValidLocales(locales)) {
    throw new Error('Input must be a list of valid i18n locales.')
  }

  return class LocalizedStringControl extends React.Component<WidgetProps> {
    componentDidMount() {
      if (R.isEmpty(this.props.value)) {
        this.props.onChange([])
      }
    }
    render() {
      const { value, onChange } = this.props

      return (
        <div className={cn(styles.defaults)}>
          {locales.map((locale: any, index: any) => (
            <InputField
              key={index.toString()}
              locale={locale}
              onChange={onChange}
              value={value}
            />
          ))}
        </div>
      )
    }
  }
}
