import React, {
  FunctionComponent,
  SetStateAction,
  Dispatch,
  useState,
} from 'react'
import { Locale, LOCALES } from '../../data/i18n'
import * as R from 'ramda'
import { LocaleProvider } from '../../utils/hooks'

interface PreviewProps<JSONType, ComponentProps> {
  Component: FunctionComponent<ComponentProps>
  data: JSONType
  translator: (locale: Locale) => (data: JSONType) => ComponentProps
}

export const createPreview = <
  JSONType extends {} = any,
  ComponentProps extends {} = any
>(): FunctionComponent<PreviewProps<JSONType, ComponentProps>> => ({
  Component,
  data,
  translator,
}) => {
  const [locale, setLocale] = useState<Locale>('de')
  const componentProps: ComponentProps = translator(locale)(data)
  return (
    <LocaleProvider value={locale}>
      <LocalePicker currentLocale={locale} setLocale={setLocale} />
      <Component {...componentProps} />
    </LocaleProvider>
  )
}

const LocalePicker: FunctionComponent<{
  currentLocale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
}> = ({ currentLocale, setLocale }) => (
  <ul className="nav nav-tabs sticky-top border-0">
    {R.map(
      (locale: Locale) => (
        <LocaleTab
          locale={locale}
          key={locale}
          active={R.equals(currentLocale, locale)}
          onClick={() => setLocale(locale)}
        />
      ),
      LOCALES,
    )}
  </ul>
)

const LocaleTab: FunctionComponent<{
  locale: Locale
  active: boolean
  onClick: () => void
}> = ({ locale, active, onClick }) => (
  <li className="nav-item">
    <button
      className={`nav-link ${active ? 'active' : ''}`}
      disabled={active}
      onClick={onClick}
    >
      {locale}
    </button>
  </li>
)
