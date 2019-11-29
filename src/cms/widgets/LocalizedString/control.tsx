import * as React from 'react'
import * as R from 'ramda'

import { getTranslationDefault, upsertTranslation, Localized } from '../i18n'
import { Locale } from '../i18n-locales'

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
  value,
  classNameWrapper,
}) => {
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(upsertTranslation(locale, event.target.value)(value))
    },
    [locale, onChange, value],
  )
  return (
    <div>
      <label htmlFor={locale}>{locale}</label>
      <input
        id={locale}
        className={classNameWrapper}
        type="text"
        value={getTranslationDefault(locale)(value) || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export const createLocalizedStringWidget = (locales: Locale[]) => {
  class LocalizedStringControl extends React.Component<
    LocalizedStringWidgetProps
  > {
    render = () => {
      const { value = [], onChange, classNameWrapper } = this.props

      return (
        <div className={classNameWrapper}>
          {locales.map((locale: Locale, index: number) => (
            <InputField
              classNameWrapper={classNameWrapper}
              key={index.toString()}
              locale={locale}
              onChange={onChange}
              value={R.is(Array, value) ? value : (value as any).toJS()}
            />
          ))}
        </div>
      )
    }
  }

  return LocalizedStringControl
}
