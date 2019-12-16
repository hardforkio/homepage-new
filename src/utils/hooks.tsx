import React, {
  useContext,
  FunctionComponent,
  useState,
  useEffect,
} from 'react'
import { globalHistory } from '@reach/router'
import { Locale } from '../data/types'
import * as R from 'ramda'
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

export const useLocation = () => {
  const initialState = {
    location: globalHistory.location,
    navigate: globalHistory.navigate,
  }
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const removeListener = globalHistory.listen(params => {
      const { location } = params
      const newState = Object.assign({}, initialState, { location })
      setState(newState)
    })
    return () => {
      removeListener()
    }
  }, [initialState])

  return state
}

export const useTranslations = (
  translations: any,
): [(key: string) => string] => {
  const locale = useLocale()
  return [(key: string) => R.path<any>([locale, key])(translations) || key]
}
