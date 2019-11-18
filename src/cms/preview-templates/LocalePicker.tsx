import React, { FunctionComponent, SetStateAction, Dispatch } from 'react'
import { Locale, LOCALES } from '../../data/i18n'
import * as R from 'ramda'

export const LocalePicker: FunctionComponent<{
  currentLocale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
}> = ({ currentLocale, setLocale }) => (
  <ul className="nav nav-tabs sticky-top border-0">
    {R.map(
      (locale: Locale) => (
        <LocaleTab
          locale={locale}
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
    <button className={`nav-link ${active ? 'active' : ''}`} onClick={onClick}>
      {locale}
    </button>
  </li>
)
