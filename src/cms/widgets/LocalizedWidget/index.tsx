import React from 'react'
import * as R from 'ramda'
import { isImmutable, fromJS } from 'immutable'

import { LocalePicker } from './LocalePicker'
import { Locale } from '../../i18n-locales'
import {
  getTranslation,
  uppendTranslation,
  TranslationCollection,
} from '../../i18n-lib'

interface WidgetProps {
  onChange: (newValue: any) => void
  value?: any
}

interface LocalizedWidgetProps extends WidgetProps {
  widget: React.ComponentType<WidgetProps>
  locales: Locale[]
}

export const LocalizedWidget: React.FC<LocalizedWidgetProps> = props => {
  const { widget: Widget, locales, value, onChange } = props

  const [locale, setLocale] = React.useState<Locale>(R.head(locales) as Locale)

  const collection = extractAsJS(value)

  const getValue = (locale: Locale) =>
    fromJS(getTranslation<string>(locale)(collection))

  const handleChange = (locale: Locale) => (newValue: any) => {
    onChange(fromJS(uppendTranslation(locale, newValue)(collection)))
  }

  return (
    <div>
      <LocalePicker
        locales={locales}
        currentLocale={locale}
        setLocale={setLocale}
      />
      <Widget
        {...props}
        key={locale}
        onChange={handleChange(locale)}
        value={getValue(locale)}
      />
    </div>
  )
}

const toJS = (value: any) => value.toJS()

const extractAsJS: (value: any) => TranslationCollection<any> = R.cond([
  [R.isNil, R.always([])],
  [isImmutable, toJS],
  [R.T, R.identity],
])
