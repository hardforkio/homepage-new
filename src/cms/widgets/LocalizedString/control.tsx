import * as React from 'react'
import * as R from 'ramda'
import {
  getTranslation,
  uppendTranslation,
  TranslationCollection,
} from '../../i18n-lib'
import { Locale } from '../../i18n-locales'

interface WidgetProps<T> {
  value: T
  onChange: (value: T) => void
  classNameWrapper?: string
}

interface LocalizedStringWidgetProps
  extends WidgetProps<TranslationCollection<string>> {}

export const createLocalizedStringWidget = (locales: Locale[]) => {
  class LocalizedStringControl extends React.Component<
    LocalizedStringWidgetProps
  > {
    render = () => {
      const { value = [], onChange, classNameWrapper } = this.props

      return (
        <div className={classNameWrapper}>
          {locales.map((locale: Locale) => (
            <InputField
              classNameWrapper={classNameWrapper}
              key={locale}
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
      onChange(uppendTranslation(locale, event.target.value)(value))
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
        value={getTranslation<string>(locale)(value) || ''}
        onChange={handleChange}
      />
    </div>
  )
}
