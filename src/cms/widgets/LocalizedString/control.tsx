import * as R from 'ramda'
import * as React from 'react'

import { getTranslation, uppendTranslation } from '../../i18n-lib'
import { Locale } from '../../i18n-locales'
import { NetlifyWidgetProps } from '../utils'

interface LocalizedStringWidgetProps extends NetlifyWidgetProps {}

export const createLocalizedStringControl = (locales: Locale[]) => {
  class LocalizedStringControl extends React.Component<
    LocalizedStringWidgetProps
  > {
    ensureJS = (value: any = []) =>
      R.is(Array, value) ? value : (value as any).toJS()

    changeHandler = (locale: Locale) => (
      event: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const { value, onChange } = this.props
      onChange(
        uppendTranslation(locale, event.target.value)(this.ensureJS(value)),
      )
    }

    getValue = (locale: Locale) => {
      const { value } = this.props
      return getTranslation<string>(locale)(this.ensureJS(value))
    }

    render = () => {
      const {
        classNameWrapper,
        forID,
        setActiveStyle,
        setInactiveStyle,
      } = this.props

      return (
        <div className={classNameWrapper} id={forID}>
          {locales.map((locale: Locale) => (
            <InputField
              classNameWrapper={classNameWrapper}
              key={locale}
              locale={locale}
              onChange={this.changeHandler(locale)}
              value={this.getValue(locale)}
              setActiveStyle={setActiveStyle}
              setInactiveStyle={setInactiveStyle}
            />
          ))}
        </div>
      )
    }
  }

  return LocalizedStringControl
}

interface InputFieldProps {
  locale: Locale
  value: string | undefined
  onChange: (Event: React.ChangeEvent<HTMLInputElement>) => void
  classNameWrapper: string
  setActiveStyle?: React.FocusEventHandler
  setInactiveStyle?: React.FocusEventHandler
}

const InputField: React.FunctionComponent<InputFieldProps> = ({
  locale,
  onChange,
  value,
  classNameWrapper,
  setActiveStyle,
  setInactiveStyle,
}) => {
  return (
    <div>
      <label htmlFor={locale}>{locale}</label>
      <input
        id={locale}
        className={classNameWrapper}
        type="text"
        value={value || ''}
        onChange={onChange}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    </div>
  )
}
