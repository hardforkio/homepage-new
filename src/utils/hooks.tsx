import React, { useContext, FunctionComponent, useState } from 'react'
import { Locale } from '../data/i18n'

type NavbarState = [boolean, (newValue: boolean) => void]

const NavbarContext = React.createContext<NavbarState>([
  true,
  () => {
    console.warn(
      'WARNING: useNavbarState was used without a NavbarContext Provider',
    )
  },
])
const LocaleContext = React.createContext<Locale>('de')

export const NavbarStateProvider: FunctionComponent = ({ children }) => {
  const [transparent, setTransparent] = useState(true)
  return (
    <NavbarContext.Provider value={[transparent, setTransparent]}>
      {children}
    </NavbarContext.Provider>
  )
}
export const LocaleProvider = LocaleContext.Provider

export const useNavbarState = () => useContext(NavbarContext)
export const useLocale = () => useContext(LocaleContext)

export const getPathPrefix = (locale: Locale) => (to: string): string => {
  const currentPrefix = locale === 'en' ? '/en' : '/de'
  return `${currentPrefix}${to}`
}

export const usePathPrefix = (to: string): string => {
  const locale = useLocale()
  return getPathPrefix(locale)(to)
}
