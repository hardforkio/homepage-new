import * as React from 'react'
import cn from 'classnames'

import { getTranslation, upsertTranslation, Localized } from './helpers'
import { Locale } from './i18n-locales'

import styles from './styles.module.scss'

interface WidgetProps<T> {
  value: T
  onChange: (value: T) => void
  classNameWrapper?: string
}

interface LocalizedStringWidgetProps
  extends WidgetProps<readonly Localized<string>[]> {}

interface InputFieldProps extends LocalizedStringWidgetProps {
  locale: Locale
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  locale,
  onChange,
  value = [],
}) => {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(upsertTranslation(locale, event.target.value)(value))
    },
    [locale, onChange, value],
  )
  return (
    <div>
      <label>{locale}</label>
      <input
        className={cn(styles.defaults)}
        type="text"
        value={getTranslation<string>(locale)(value) || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export const createLocalizedStringWidget = (locales: Locale[]) => {
  return class LocalizedStringControl extends React.Component<
    LocalizedStringWidgetProps
  > {
    render() {
      const { value, onChange, classNameWrapper } = this.props

      return (
        <div className={cn(styles.defaults, classNameWrapper)}>
          {locales.map((locale: Locale, index: number) => (
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
